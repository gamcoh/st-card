# -*- coding: utf-8 -*-
import streamlit as st

from streamlit_card import card

st.title("Streamlit Card - test")

card(
    title="Streamlit Card",
    text=["A text", "and a subtext"],
    image="https://placekitten.com/500/500",
)
