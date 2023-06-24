import React from "react";

import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import { SiExpo } from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";

import { GoTasklist } from "react-icons/go";
import { BsClockFill } from "react-icons/bs";

import Codando from "../../assets/img/Codando.jpg"
import Problemas from "../../assets/img/Problemas.jpg"



export default class Trabalhos extends React.Component {
  constructor() {
    super();
    this.state = {
      Home: [
        {
          Icons: [<FaHtml5 />, <FaReact />, <FaCss3Alt />],
          Title: "Você terá o menor tempo",
          Text: "Meu trabalho é reconhecido por ser o mais rápido em proporcionar resultados. Com uma abordagem ágil e eficiente, estou comprometido(a) em executar tarefas e projetos com velocidade e precisão. Utilizando minha experiência e habilidades aprimoradas, sou capaz de entregar soluções de forma eficaz, reduzindo significativamente o tempo necessário para atingir seus objetivos.",
          Tags: [<BsClockFill />],
          Image: Codando,
        },
        {
          Icons: [<SiExpo />, <BiLogoVisualStudio />, <AiFillThunderbolt />],
          Title: "Facilidade em resolver problemas",
          Text: "Eu possuo uma habilidade excepcional em resolver problemas com facilidade. Sou conhecido(a) por minha capacidade de analisar situações complexas e encontrar soluções rápidas e efetivas. Minha mente analítica e criativa me permite identificar os desafios subjacentes e abordá-los de maneira assertiva. Seja lidando com questões técnicas, estratégicas ou operacionais, estou preparado(a) para enfrentar qualquer desafio que surgir, proporcionando a você a tranquilidade de saber que seus problemas serão resolvidos com facilidade e eficácia.",
          Tags: [<GoTasklist />],
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
              className={index ? "ContentSobre Invertido" : "ContentSobre"}
              id="ContetGeralSobre"
            >
              <div className="ImageSobre">
                <div className="CircleImageSobre">
                  <div
                    className={
                      index ? "ImageDeitada ImgInvert" : "ImageDeitada"
                    }
                    style={{backgroundImage:`url(${Item.Image})`}}
                  ></div>

                  <div
                    className={
                      index
                        ? "ContIcon ContIconsPosInvert1"
                        : "ContIcon ContIconsPos1"
                    }
                  >
                    {Item.Icons[0]}
                  </div>
                  <div
                    className={
                      index
                        ? "ContIcon ContIconsPosInvert2"
                        : "ContIcon ContIconsPos2"
                    }
                  >
                    {Item.Icons[1]}
                  </div>
                  <div
                    className={
                      index
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
