# -*- coding: utf-8 -*-
import streamlit as st

from streamlit_card import card

st.title("Streamlit Card - test")

res = card(
    title="Streamlit Card",
    text="This is a test card",
    image="https://placekitten.com/500/500",
    styles={
        "card": {
            "width": "500px",
            "height": "500px",
            "border-radius": "3px",
            "box-shadow": "0 0 10px rgba(0,0,0,0.5)",
        },
        "text": {
            "font-family": "serif",
        },
    },
)

st.write(res)
