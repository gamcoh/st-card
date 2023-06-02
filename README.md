# st-card

Streamlit Component, for a UI card

authors - [@gamcoh](https://github.com/gamcoh) @Pernod Ricard

## Installation

Install `streamlit-card` with pip
```bash
pip install streamlit-card 
```

usage, import the `card` function from `streamlit_card`
```py
from streamlit_card import card

hasClicked = card(
  title="Hello World!",
  text="Some description",
  image="http://placekitten.com/200/300",
  url="https://github.com/gamcoh/st-card"
)
```
   
You can also use a local image by doing this instead
```py
import base64

with open(filepath, "rb") as f:
    data = f.read()
    encoded = base64.b64encode(data)
data = "data:image/png;base64," + encoded.decode("utf-8")

from streamlit_card import card

hasClicked = card(
  title="Hello World!",
  text="Some description",
  image=data
  url="https://github.com/gamcoh/st-card"
)
```

You can also create a card without an URL. That way you control the behavior when the user click on it.
For instance:
```py
from streamlit_card import card

hasClicked = card(
  title="Hello World!",
  text="Some description",
  image="http://placekitten.com/200/300",
)

if hasClicked:
    # do something
```
