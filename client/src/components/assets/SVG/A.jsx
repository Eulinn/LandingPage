import React from "react";

export default class A extends React.Component {
  render() {
    return (
      <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.3">
          <path
            d="M10 50H17.5M35 50H52.5M17.25 37.5H34.5M25.5 15.75L40 50M12.5 50L27.5 10H32.5L50 50"
            stroke="white"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    );
  }
}
