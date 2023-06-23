import React from "react";

export default class CodeSpacing1 extends React.Component {

  render() {
    return (
      <div key='Cod1' className="CodeSpacing">
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
            <span className="LineVerde">os</span>
          </li>
          <li>
            <span className="LineRoxa">from</span>{" "}
            <span className="LineVerde">time</span>{" "}
            <span className="LineRoxa">import</span>{" "}
            <span className="LineAmarela">sleep</span>
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
            <span className="LineVerde">range</span>
            <span className="LineAmarela">(</span>0,{" "}
            <span className="LineAmarela">len</span>
            <span className="LineRoxa">(</span>
            <span className="LineAzulClaro">Text</span>
            <span className="LineRoxa">)</span>+1
            <span className="LineAmarela">)</span>:
          </li>
          <li className="ident1">
            <span className="LineAmarela">sleep</span>
            <span className="LineRoxa">(</span>0.1
            <span className="LineRoxa">)</span>
          </li>
          <li className="ident1">
            <span className="LineVerde">os</span>.
            <span className="LineAmarela">system</span>
            <span className="LineRoxa">(</span>
            <span className="LineMarrom">'cls'</span>
            <span className="LineRoxa">)</span>
          </li>
          <li className="ident1">
            <span className="LineRoxa">if</span>{" "}
            <span className="LineAzulClaro">index</span> =={" "}
            <span className="LineAmarela">len</span>
            <span className="LineRoxa">(</span>
            <span className="LineAzulClaro">Text</span>
            <span className="LineRoxa">)</span>
          </li>
          <li className="ident2">
            <span className="LineAmarela">print</span>
            <span className="LineRoxa">(</span>
            <span className="LineAzulClaro">Text</span>
            <span className="LineRoxa">)</span>
          </li>
          <li className="ident2">
            <span className="LineRoxa">return</span>
          </li>
          <li className="ident1">
          <span className="LineAmarela">print</span>
            <span className="LineRoxa">(</span>
            <span className="LineAzulClaro">Text</span>
            <span className="LineAmarela">[</span>
            :
            -
            <span className="LineAzulEscuro">(</span>
            <span className="LineAmarela">len</span>
            <span className="LineRoxa">(</span>
            <span className="LineAzulClaro">Text</span>
            <span className="LineRoxa">)</span>
            -
            <span className="LineAzulClaro">index</span>
            <span className="LineAzulEscuro">)</span>
            <span className="LineAmarela">]</span>
            <span className="LineRoxa">)</span>
          </li>
        </ul>
      </div>
    );
  }
}
