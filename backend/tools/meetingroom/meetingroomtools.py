from typing import Any, List, Optional

from langchain.agents.tools import Tool
from langchain.callbacks.base import BaseCallbackManager
from langchain.chains.api.base import APIChain
from langchain.llms.base import BaseLLM
from langchain.tools.base import BaseTool

from api.docs.MeetingRoom.book_meeting_room_docs import BOOK_MEETING_ROOM_DOCS
from api.docs.MeetingRoom.get_available_meeting_room_docs import GET_AVAILABLE_MEETING_ROOM_DOCS


def _get_available_meeting_room_api(llm: BaseLLM, **kwargs: Any) -> BaseTool:
    chain = APIChain.from_llm_and_api_docs(llm, GET_AVAILABLE_MEETING_ROOM_DOCS)
    return Tool(
        name="Get available meeting rooms",
        description="Useful for when you want to get available meeting rooms. The input should be a question in natural language that this API can answer.",
        func=chain.run,
        return_direct=True
    )

def _book_meeting_room_api(llm: BaseLLM, **kwargs: Any) -> BaseTool:
    chain = APIChain.from_llm_and_api_docs(llm, BOOK_MEETING_ROOM_DOCS)
    return Tool(
        name="Book meeting room",
        description="Useful for when you want to book a meeting room. The input should be a question in natural language that this API can answer.",
        func=chain.run,
        return_direct=True
    )

_BASE_TOOLS = {
    "get_available_meeting_room": _get_available_meeting_room_api,
    "book_meeting_room": _book_meeting_room_api
}

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

