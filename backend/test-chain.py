from langchain.agents import ZeroShotAgent, Tool, AgentExecutor, AgentType, ConversationalAgent
from langchain.memory import ConversationBufferMemory, ReadOnlySharedMemory
from langchain import OpenAI, LLMChain, PromptTemplate
from langchain.chains import APIChain
from api.docs.MeetingRoom.get_available_meeting_room_docs import GET_AVAILABLE_MEETING_ROOM_DOCS
from langchain.chat_models import AzureChatOpenAI

from langchain.agents.agent_toolkits import ZapierToolkit
from langchain.utilities.zapier import ZapierNLAWrapper

import os
os.environ["OPENAI_API_TYPE"] = "azure"
os.environ["OPENAI_API_VERSION"] = "2023-03-15-preview"
os.environ["OPENAI_API_BASE"] = "https://az-openai-v2.openai.azure.com"
os.environ["OPENAI_API_KEY"] = "95faf5ba448d45e9a981d027096e1ccb"

from langchain.llms import AzureOpenAI
from langchain.agents import load_tools, initialize_agent

import tools.meetingroom.meetingroomtools as meetingroomtools

llm =  AzureChatOpenAI(
    openai_api_base="https://az-openai-v2.openai.azure.com",
    openai_api_version="2023-03-15-preview",
    deployment_name="gpt-35-turbo",
    openai_api_key="95faf5ba448d45e9a981d027096e1ccb",
    openai_api_type = "azure",
)

template = """This is a conversation between a human and a bot:

{chat_history}

{input}:
"""

prefix = """Have a conversation with a human, answering the following questions as best you can. You have access to the following tools:"""
suffix = """
Begin!"
{chat_history}
Question: {input}
{agent_scratchpad}"""

prompt = PromptTemplate(
    input_variables=["input", "chat_history"], 
    template=template
)

memory = ConversationBufferMemory(memory_key="chat_history", return_messages=True)
readonlymemory = ReadOnlySharedMemory(memory=memory)


math_llm = AzureOpenAI(deployment_name="text-davinci-003", model_name="text-davinci-003")

tools = load_tools(
    ["human", "llm-math"], 
    llm=math_llm,
)

tools_meeting = meetingroomtools.load_tools(["get_available_meeting_room","book_meeting_room"], llm=llm)
for tool in tools_meeting:
    tools.append(tool)


# prompt = ConversationalChatAgent.create_prompt(
#     tools, 
#     prefix=prefix, 
#     suffix=suffix, 
#     input_variables=["input", "chat_history", "agent_scratchpad"]
# )

# llm_chain = LLMChain(llm=llm, prompt=prompt)

# chain_new = APIChain.from_llm_and_api_docs(llm,GET_AVAILABLE_MEETING_ROOM_DOCS,verbose=True)

# result = chain_new.run("What is the available meeting room for 5 people and having a TV?")

# print(result)
# agent = ZeroShotAgent(llm_chain=llm_chain, tools=tools, verbose=True, memory=readonlymemory)

agent_chain = initialize_agent(tools, llm, agent=AgentType.CHAT_CONVERSATIONAL_REACT_DESCRIPTION, verbose=True, memory=readonlymemory)

# prompt = agent_chain.create_prompt(
#     tools, 
#     prefix=prefix, 
#     suffix=suffix, 
#     input_variables=["input", "chat_history", "agent_scratchpad"]
# )

# agent_chain = AgentExecutor.from_agent_and_tools(
#     agent_chain,
#     tools,
#     verbose=True,
#     memory = readonlymemory
# )


# result = agent_chain.run("Please help me book Room5 from 9:30 to 10:00")

# print(result)

meeting_room = {"facilities": ["Projector", "Whiteboard", "TV"]}

print(set(meeting_room["facilities"]).issuperset(""))