import streamlit as st

from streamlit_card import card

st.title("Streamlit Card - test")

res = card(
    title="Streamlit Card",
    text="This is a test card",
    image="https://placekitten.com/500/500",
    on_click=lambda: print("Clicked!")
)

st.write(res)
