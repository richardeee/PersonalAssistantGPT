from typing import Any, List, Optional

from langchain.agents.tools import Tool
from langchain.callbacks.base import BaseCallbackManager
from langchain.chains.api.base import APIChain
from langchain.llms.base import BaseLLM
from langchain.tools.base import BaseTool
from api.docs.weather.get_weather_docs import GET_WEATHER_DOCS
import requests


def _get_weather(location: str):
    url = f'https://api.seniverse.com/v3/weather/now.json?key=your_api_key&location={location}&language=zh-Hans&unit=c'
    r = requests.get(url)

def _get_weather_api(llm: BaseLLM, **kwargs: Any) -> BaseTool:
    # print (**kwargs["weather_key"])
    chain = APIChain.from_llm_and_api_docs(llm, GET_WEATHER_DOCS)
    return Tool(
        name="Get weather",
        description="Useful for when you want to get weather. The input should be a question in natural language that this API can answer.",
        func=chain.run,
        return_direct=True
    )


_BASE_TOOLS = {"get_weather": _get_weather_api,}
_LLM_TOOLS = {}
_EXTRA_LLM_TOOLS = {}
_EXTRA_OPTIONAL_TOOLS={}

def load_tools(
    tool_names: List[str],
    llm: Optional[BaseLLM] = None,
    callback_manager: Optional[BaseCallbackManager] = None,
    **kwargs: Any,
) -> List[BaseTool]:
    """Load tools based on their name.

    Args:
        tool_names: name of tools to load.
        llm: Optional language model, may be needed to initialize certain tools.
        callback_manager: Optional callback manager. If not provided, default global callback manager will be used.

    Returns:
        List of tools.
    """
    tools = []
    for name in tool_names:
        if name in _BASE_TOOLS:
            if llm is None:
                raise ValueError(f"Tool {name} requires an LLM to be provided")
            tool = _BASE_TOOLS[name](llm)
            if callback_manager is not None:
                tool.callback_manager = callback_manager
            tools.append(tool)
        else:
            raise ValueError(f"Got unknown tool {name}")
    return tools