import React from "react";

export default class Logo extends React.Component {
  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="500"
        zoomAndPan="magnify"
        viewBox="0 0 375 374.999991"
        height="500"
        preserveAspectRatio="xMidYMid meet"
        version="1.0"
      >
        <defs>
          <clipPath id="051d198ed0">
            <path
              d="M 31.875 0 L 343.125 0 L 343.125 375 L 31.875 375 Z M 31.875 0 "
              clipRule="nonzero"
            />
          </clipPath>
        </defs>
        <g clip-path="url(#051d198ed0)">
          <path
            fill="#000000"
            d="M 343.023438 0 L 343.023438 58.832031 L 130.730469 58.832031 L 189.5625 0 Z M 197.277344 159.300781 L 138.445312 218.078125 L 343.023438 217.664062 L 343.023438 100.375 L 284.207031 159.300781 Z M 90.816406 316.191406 L 90.816406 0 L 31.984375 0 L 31.984375 375.03125 L 343.023438 375.03125 L 343.023438 257.328125 L 284.148438 316.199219 L 90.816406 316.199219 Z M 90.816406 316.191406 "
            fillOpacity="1"
            fillRule="nonzero"
          />
        </g>
      </svg>
    );
  }
}
