import React from "react";

export default class CodeSpacing1 extends React.Component {
  render() {
    return (
      <div key="Cod1" className="CodeSpacing">
        <ul className="CodeLines">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li>10</li>
          <li>11</li>
        </ul>
        <ul className="CodeLinesScript">
          <li>
            <span className="LineRoxa">import</span>{" "}
            <span className="LineVerde">time</span>,{" "}
            <span className="LineVerde">sys</span>
          </li>
          <li style={{ opacity: 0 }}>|</li>
          <li>
            <span className="LineAzulEscuro">def</span>{" "}
            <span className="LineAmarela">Printer</span>{" "}
            <span className="LineRoxa">(</span>
            <span className="LineAzulClaro">Text</span>
            <span className="LineRoxa">)</span>:
          </li>
          <li className="ident1">
            <span className="LineRoxa">for</span>{" "}
            <span className="LineAzulClaro">index</span>{" "}
            <span className="LineRoxa">in</span>{" "}
            <span className="LineVerde">list</span>
            <span className="LineAmarela">(</span>
            <span className="LineAzulClaro">text</span>
            <span className="LineAmarela">)</span>:
          </li>
          <li className="ident1">
            <span className="LineAmarela">print</span>
            <span className="LineRoxa">(</span>
            <span className="LineAzulClaro">i</span>,
            <span className="LineAzulClaro">end</span>=
            <span className="LineMarrom">''</span>
            <span className="LineRoxa">)</span>
          </li>
          <li className="ident1">
            <span className="LineVerde">sys</span>.
            <span className="LineAzulClaro">stdout</span>.
            <span className="LineAmarela">flush</span>
            <span className="LineRoxa">(</span>
            <span className="LineRoxa">)</span>
          </li>
          <li className="ident1">
            <span className="LineVerde">time</span>.
            <span className="LineAmarela">sleep</span>
            <span className="LineRoxa">(</span>0.1
            <span className="LineRoxa">)</span>
          </li>
        </ul>
      </div>
    );
  }
}
