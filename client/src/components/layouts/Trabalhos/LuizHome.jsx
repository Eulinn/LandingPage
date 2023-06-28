import React from "react";

import Codando from "../../assets/img/Codando.jpg"
import Problemas from "../../assets/img/Problemas.jpg"
import XD from "../../assets/SVG/Xd";
import ID from "../../assets/SVG/Id";
import Figma from "../../assets/SVG/Figma";
import Pencil2 from "../../assets/SVG/Pencil2";
import Pencil from "../../assets/SVG/Pencil";
import Geometric from "../../assets/SVG/geometric";
import A from "../../assets/SVG/A";
import Colorama from "../../assets/SVG/Colorama";
import Door from "../../assets/SVG/Door";


export default class LuizHome extends React.Component {
  constructor() {
    super();
    this.state = {
      Home: [
        {
          Icons: [<XD />, <ID />, <Figma color='#1f1f1f' squad='87' />],
          Title: "Grande experiencia com cores e tipografia",
          Text: "Gostaria de ressaltar minha habilidade em trabalhar com cores e tipografia, que considero de alto padrão. Tenho um olhar apurado para combinações de cores harmoniosas e escolho cuidadosamente as fontes e o espaçamento adequado para criar designs impactantes e visualmente atraentes.",
          Tags: [<A />, <Colorama />],
          Image: Codando,
        },
        {
          Icons: [<Pencil2 />, <Pencil />, <Geometric />],
          Title: "Design e prototipação completa",
          Text: "Gostaria de destacar a amplitude do meu trabalho, que abrange design e prototipação de forma exemplar. Tenho a habilidade de criar designs funcionais e visualmente atraentes, além de desenvolver protótipos interativos que validam conceitos e aprimoram a experiência do usuário. Essa combinação completa garante resultados eficientes e satisfatórios para os projetos em que trabalho.",
          Tags: [<Door />],
          Image: Problemas,
        },
      ],
    };
  }

  render() {
    return (
      <>
        {this.state.Home?.map((Item, index) => {
          return (
            <div
              key={index}
              className={!index ? "ContentSobre Invertido" : "ContentSobre"}
              id="ContetGeralSobre"
            >
              <div className="ImageSobre">
                <div className="CircleImageSobre">
                  <div
                    className={
                      !index ? "ImageDeitada ImgInvert" : "ImageDeitada"
                    }
                    style={{backgroundImage:`url(${Item.Image})`}}
                  ></div>

                  <div
                    className={
                      !index
                        ? "ContIcon ContIconsPosInvert1"
                        : "ContIcon ContIconsPos1"
                    }
                  >
                    {Item.Icons[0]}
                  </div>
                  <div
                    className={
                      !index
                        ? "ContIcon ContIconsPosInvert2"
                        : "ContIcon ContIconsPos2"
                    }
                  >
                    {Item.Icons[1]}
                  </div>
                  <div
                    className={
                      !index
                        ? "ContIcon ContIconsPosInvert3"
                        : "ContIcon ContIconsPos3"
                    }
                  >
                    {Item.Icons[2]}
                  </div>
                </div>
              </div>
              <div className="TextContentSobre">
                <p className="TitleSobre">{Item.Title}</p>
                <p className="TextSobre">{Item.Text}</p>
                <div className="IconContainer">
                  {Item.Tags.map(ItemIcon =>{
                    return <div className="Icon">{ItemIcon}</div>
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}
