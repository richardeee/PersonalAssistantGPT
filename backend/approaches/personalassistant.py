import os
from typing import List

import tools.douban.doubantools as doubantools
import tools.meetingroom.meetingroomtools as meetingroomtools
import tools.weather.weathertools as weathertools
from approaches.approach import Approach
from azure.search.documents import SearchClient
from azure.search.documents.models import QueryType
from langchain.agents import (AgentExecutor, AgentType, Tool, initialize_agent,
                              load_tools)
from langchain.agents.react.base import ReActDocstoreAgent
from langchain.callbacks.base import CallbackManager
from langchain.chat_models import AzureChatOpenAI
from langchain.llms import AzureOpenAI
from langchain.memory import ConversationBufferMemory, ReadOnlySharedMemory
from langchain.prompts import BasePromptTemplate, PromptTemplate
from langchain.schema import HumanMessage
from langchainadapters import HtmlCallbackHandler
from text import nonewlines


class PersonalAssistant(Approach):
    def __init__(self, openai_deployment: str, openai_gpt_deployment: str, azure_openai_key: str, azure_openai_base: str):
        self.openai_deployment = openai_deployment
        self.openai_gpt_deployment = openai_gpt_deployment
        self.azure_openai_key = azure_openai_key
        self.azure_openai_base = azure_openai_base

    def search(self, q: str, overrides: dict) -> str:
        return None

    def lookup(self, q: str, overrides: dict) -> str:

        return None

    def run(self, q: str, overrides: dict) -> any:
        # Not great to keep this as instance state, won't work with interleaving (e.g. if using async), but keeps the example simple
        self.results = None

        # Use to capture thought process during iterations
        cb_handler = HtmlCallbackHandler()
        cb_manager = CallbackManager(handlers=[cb_handler])

        llm = AzureChatOpenAI(
            openai_api_base=self.azure_openai_base,
            openai_api_version="2023-03-15-preview",
            deployment_name=self.openai_deployment,
            openai_api_key=self.azure_openai_key,
            openai_api_type="azure",
        )

        tools = load_tools(
            ["llm-math", "requests_all",],
            llm=llm,
        )

        tools_meeting = meetingroomtools.load_tools(
            ["get_available_meeting_room", "book_meeting_room"], llm=llm)
        # tools_douban = douban.load_tools(["douban_now_playing", "douban_comming_out"], llm=llm, callback_manager=cb_manager)
        tools_weather = weathertools.load_tools(["get_weather"], llm=llm)
        tools_douban = doubantools.load_tools(
            ["get_comming_out_movie", "get_now_playing_movie",], llm=llm)
        tools = tools + tools_meeting + tools_weather + tools_douban

        memory = ConversationBufferMemory(
            memory_key="chat_history", return_messages=True)
        readonlymemory = ReadOnlySharedMemory(memory=memory)
        agent = initialize_agent(tools, llm, agent=AgentType.CHAT_CONVERSATIONAL_REACT_DESCRIPTION,
                                 verbose=True, memory=readonlymemory, callback_manager=cb_manager)
        print(q[-1]["user"])
        question = f"Translate this sentence to English, if it's already in English, just reply original sentence. {q[-1]['user']}"
        question = llm([HumanMessage(content=question)])
        result = agent.run(question)
        answer = llm([HumanMessage(
            content="Translate this sentence from English to Simplified Chinese.if it's already in Chinese, just reply original sentence. " + result)])
        return {"data_points": self.results or [], "answer": answer.content, "thoughts": cb_handler.get_and_reset_log()}
