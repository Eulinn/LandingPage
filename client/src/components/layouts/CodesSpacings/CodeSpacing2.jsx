import React from "react";
import ExampleComponent from "../Typyng";

export default class CodeSpacing2 extends React.Component {
  render() {
    return (
      <div key='Cod2' className="CodeSpacing">
        <ul className="CodeLines">
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
        <ul className="CodeLinesScript">
          <li style={{ color: "#7e848190" }}>Python 3.11.3</li>
          <li style={{ color: "#7e848190" }}>
            {" "}
            Type "help", "copyright", "credits" or "license" for more
            information.
          </li>
          <li style={{ color: "#7e848190" }}>
            {">>>"} <ExampleComponent />
          </li>
          <li></li>
        </ul>
      </div>
    );
  }
}
