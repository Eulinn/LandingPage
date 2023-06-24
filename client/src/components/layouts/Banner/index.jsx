import react from "react";
import "./banner.css";

import Heart from "../../assets/SVG/Heart";

export default class Banner extends react.Component {

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
              {this.props.Person.Slogan}
            </p>
            <p className="PhraseBanner">
              {this.props.Person.Text}
            </p>
            <div className="ButtonsBanner">
              <button id="Button1" className="Button1">
                {this.props.Person.ToChangeText}
                <div id="PressableButton1" className="PressableButton1" onClick={()=>{
                  this.ToChange()
                }}>
                  <span>{"<"}</span>
                </div>
              </button>
              <button className="Button2" onClick={()=>{
                  window.open("https://eulinn.github.io/portfolio/", '_blank')
              }}>Portfolio</button>
              <a href="#Depoimentos"><button className="Button3">Depoimentos</button></a>
            </div>
          </div>
          <div className="ImagesBanner">
          {this.props.Person.CodeSpacings?.map(item =>{
              return item
            })}
          </div>
        </div>
      </div>
    );
  }
}
