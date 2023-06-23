import React from "react";

export default class Heart extends React.Component {
  render() {
    return (
      <svg
        width="924"
        height="516"
        viewBox="0 0 924 516"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={this.props.class}
      >
        <path
          opacity="0.1"
          d="M682 2L922 252.056L644 523.531H255.5L2 252.056L235.5 2L469 252.056L682 2Z"
          stroke="var(--Verde)"
          stroke-width="2"
        />
      </svg>
    );
  }
}
