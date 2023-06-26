import {
  Streamlit,
  StreamlitComponentBase,
  withStreamlitConnection,
} from "streamlit-component-lib";
import React, { ReactNode } from "react";
import styled from "@emotion/styled";

class Card extends StreamlitComponentBase {
  public componentDidUpdate(): void {
    Streamlit.setFrameHeight();
  }

  public componentDidMount(): void {
    Streamlit.setFrameHeight();
  }

  public render = (): ReactNode => {
    const { title, text, image, styles } = this.props.args;

    // Streamlit sends us a theme object via props that we can use to ensure
    // that our component has visuals that match the active theme in a
    // streamlit app.
    const { theme } = this.props;

    // Maintain compatibility with older versions of Streamlit that don't send
    // a theme object.
    if (!theme) {
      return <div>Theme is undefined, please check streamlit version.</div>;
    }

    const height = 250;
    const width = 300;
    const margin = styles.card.margin || 40;

    const Card = styled.div(
      {
        display: "flex",
        cursor: "pointer",
        fontFamily: `${theme.font}, 'Segoe UI', 'Roboto', sans-serif`,
        height: `${height}px`,
        borderRadius: "20px",
        overflow: "hidden",
        backgroundImage: `url(${image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        boxShadow: "0px 0px 40px rgba(0, 0, 0, 0.2)",
        margin: `${margin}px`,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: theme.textColor,
        width: `${width}px`,
        position: "relative",
        transition: "all 0.3s ease-in-out",
        ...styles.card,
      },
      `
      &:hover {
        box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.4);
      }
      &:active {
        box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.7);
      }
      `
    );

    const Parent = styled.div({
      padding: margin
    });

    const Title = styled.h2({
      color: "white",
      zIndex: "2",
      fontSize: "2em",
      fontWeight: "bolder",
      ...styles.text,
    });

    const Text = styled.p({
      color: "white",
      fontWeight: "bolder",
      zIndex: "2",
      fontSize: "1em",
      ...styles.text,
    });

    const Filter = styled.div({
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      height: "100%",
      width: "100%",
      position: "absolute",
      top: "0",
      left: "0",
      zIndex: "1",
    });

    return (
      <Parent>
        <Card onClick={this.onClick}>
          <Filter />
          <Title>{title}</Title>
          <Text>{text}</Text>
        </Card>
      </Parent>
    );
  };

  private onClick = (): void => {
    if (this.props.args.url) {
      window.open(this.props.args.url, "_blank");
    }
    Streamlit.setComponentValue(true);
  };
}

export default withStreamlitConnection(Card);
