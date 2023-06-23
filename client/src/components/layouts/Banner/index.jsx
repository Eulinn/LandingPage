import react from "react";
import "./banner.css";
import ExampleComponent from "../Typyng";

import Heart from "../../assets/SVG/Heart";

export default class Banner extends react.Component {
  constructor() {
    super();
    this.state = {
      ListAll: [
        <span className="LineAmarela">print</span>,
        <span className="LineRoxa">(</span>,
        <span className="LineAzulClaro">Text</span>,
        <span className="LineAmarela">[</span>,
        ":",
        "-",
        <span className="LineAzulEscuro">(</span>,
        <span className="LineAmarela">len</span>,
        <span className="LineRoxa">(</span>,
        <span className="LineAzulClaro">Text</span>,
        <span className="LineRoxa">)</span>,
        "-",
        <span className="LineAzulClaro">index</span>,
        <span className="LineAzulEscuro">)</span>,
        <span className="LineAmarela">]</span>,
        <span className="LineRoxa">)</span>,
      ],
    };
  }

  ToChange = () =>{
      const Id = document.getElementById('PressableButton1');
      const IdButton = document.getElementById('Button1');

      Id.classList.add('Passing')
      IdButton.classList.add('Hidding')

      setTimeout(() => {
        if(this.props.Changed){
          this.props.Changing(false)
          return
        }
        this.props.Changing(true)
      }, 1100);

  }


  render() {
    return (
      <div key={new Date().getTime()} className="ContainerBanner">
        <div className="ContentBanner">
          <span className="Detail Detail1"></span>
          <div className="TextBanner">
          <Heart class={{position:"absolute", bottom:'0px'}}/>
            <p className="TitleBanner">
              {this.props.slogan}
            </p>
            <p className="PhraseBanner">
              {this.props.Text}
            </p>
            <div className="ButtonsBanner">
              <button id="Button1" className="Button1">
                Conheça mais de design
                <div id="PressableButton1" className="PressableButton1" onClick={()=>{
                  this.ToChange()
                }}>
                  <span>{"<"}</span>
                </div>
              </button>
              <button className="Button2" onClick={()=>{
                  window.open("https://eulinn.github.io/portfolio/", '_blank')
              }}>Portfolio</button>
              <button className="Button3">Contato</button>
            </div>
          </div>
          <div className="ImagesBanner">
            <div className="CodeSpacing">
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
                  {this.state.ListAll.map((item) => {
                    return item;
                  })}
                </li>
              </ul>
            </div>
            <div className="CodeSpacing">
              <ul className="CodeLines">
                <li>1</li>
                <li>2</li>
                <li>3</li>
              </ul>
              <ul className="CodeLinesScript">
                <li style={{ color: '#7e848190',}}>Python 3.11.3</li>
                <li style={{ color: '#7e848190',}}> Type "help", "copyright", "credits" or "license" for more information.</li>
                <li style={{ color: '#7e848190',}}>{">>>"} <ExampleComponent /></li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="WorksBanner">
          <p>Com quem já trabalhei</p>
          <ul>
            <li>Pandoo</li>
            <li>Maiara</li>
            <li>Thaiane</li>
          </ul>
        </div>
      </div>
    );
  }
}
