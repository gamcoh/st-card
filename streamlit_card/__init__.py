import os
from typing import Optional

import streamlit.components.v1 as components

_RELEASE = True
COMPONENT_NAME = "streamlit_card"

if _RELEASE:  # use the build instead of development if release is true
    root_dir = os.path.dirname(os.path.abspath(__file__))
    build_dir = os.path.join(root_dir, "frontend/build")

    _streamlit_chat = components.declare_component(COMPONENT_NAME, path=build_dir)
else:
    _streamlit_chat = components.declare_component(
        COMPONENT_NAME, url="http://localhost:3000"
    )


def card(
    title: str, text: str, image: Optional[str] = None, key: Optional[str] = None
) -> None:
    """Creates a UI card like component.

    Args:
        title (str): The title of the card.
        text (str): The text of the card.
        image (str, optional): An optional background image. Defaults to None.
        key (str, optional): An optional key for the component. Defaults to None.
    """
    return _streamlit_chat(title=title, text=text, image=image, key=key)
