# st-card

Streamlit Component, for a UI card

authors - [@gamcoh](https://github.com/gamcoh) @Pernod Ricard

![image](https://github.com/gamcoh/st-card/assets/18115514/c03e07e1-53a8-4829-85f4-3008571e5c1f)

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

If you want, you could use a callback to handle the click like so:
```py
from streamlit_card import card

hasClicked = card(
  title="Hello World!",
  text="Some description",
  image="http://placekitten.com/200/300",
  on_click=lambda: print("Clicked!")
)
```

## Customizations

If you want, you could use a callback to handle the click like so:
```py
from streamlit_card import card

res = card(
    title="Streamlit Card",
    text="This is a test card",
    image="https://placekitten.com/500/500",
    styles={
        "card": {
            "width": "500px",
            "height": "500px",
            "border-radius": "60px",
            "box-shadow": "0 0 10px rgba(0,0,0,0.5)",
            ...
        },
        "text": {
            "font-family": "serif",
            ...
        }
    }
)
```

If you want to modify the filter applied to the image, you could do this:
```py
from streamlit_card import card

res = card(
    title="Streamlit Card",
    text="This is a test card",
    image="https://placekitten.com/500/500",
    styles={
        "card": {
            "width": "500px",
            "height": "500px",
            "border-radius": "60px",
            "box-shadow": "0 0 10px rgba(0,0,0,0.5)",
            ...
        },
        "filter": {
            "background-color": "rgba(0, 0, 0, 0)"   <- make the image not dimmed anymore
            ...
        }
    }
)
```

## Multiple descriptions

```py
from streamlit_card import card

res = card(
    title="Streamlit Card",
    text=["This is a test card", "This is a subtext"],
    image="https://placekitten.com/500/500",
)
```
