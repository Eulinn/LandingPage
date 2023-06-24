import React from "react";

import { GiNotebook } from "react-icons/gi";
import { TbCircleLetterM } from "react-icons/tb";
import { GrWorkshop } from "react-icons/gr";
import { MdOutlineAttachMoney } from "react-icons/md";
import { AiFillThunderbolt, AiOutlineInsertRowRight } from "react-icons/ai";
import { FaBook } from "react-icons/fa";

import { GoTasklist } from "react-icons/go";

import MBImage from "../../assets/img/MBImage.png";
import MBPost from "../../assets/img/MbPost.png";

export default class Maiara extends React.Component {
  constructor() {
    super();
    this.state = {
      Maiara: [
        {
          Icons: [<GiNotebook />, <TbCircleLetterM />, <GrWorkshop />],
          Title: "Conte também com a sua empresa on-line",
          Text: "Através da Maiara Barreto Consultorias, você terá acesso a um serviço online de alta qualidade, além de uma variedade de e-books gratuitos e pagos que irão aprimorar os serviços da sua empresa. Seja você um empreendedor iniciante ou um empresário experiente, a Maiara Barreto Consultorias está comprometida em fornecer recursos de qualidade que impulsionarão o sucesso e o desenvolvimento contínuo da sua empresa.",
          Tags: [<AiOutlineInsertRowRight />],
          Image: MBImage,
        },
        {
          Icons: [<AiFillThunderbolt />, <FaBook />, <MdOutlineAttachMoney />],
          Title: "Inúmeros estilos de layouts",
          Text: "Veja também um design sério e alinhado com a índole da empresa. Reconhecemos a importância de transmitir uma imagem profissional e confiável através da identidade visual.",
          Tags: [<GoTasklist />],
          Image: MBPost,
        },
      ],
    };
  }

  render() {
    return (
      <>
        {this.state.Maiara.map((Item, index) => {
          return (
            <div
              key={index}
              className={index ? "ContentSobre Invertido" : "ContentSobre"}
              id="ContetGeralSobre"
            >
              <div className="ImageSobre">
                <div
                  className="CircleImageSobre"
                  style={{ borderColor: "var(--MBColor)" }}
                >
                  <div
                    className={
                      index ? "ImageDeitada ImgInvert" : "ImageDeitada"
                    }
                    style={{ backgroundImage: `url(${Item.Image})` }}
                  ></div>

                  <div
                    className={
                      index
                        ? "ContIcon ContIconsPosInvert1"
                        : "ContIcon ContIconsPos1"
                    }
                    style={{ backgroundColor: "var(--MBColor)" }}
                  >
                    {Item.Icons[0]}
                  </div>
                  <div
                    className={
                      index
                        ? "ContIcon ContIconsPosInvert2"
                        : "ContIcon ContIconsPos2"
                    }
                    style={{ backgroundColor: "var(--MBColor)" }}
                  >
                    {Item.Icons[1]}
                  </div>
                  <div
                    className={
                      index
                        ? "ContIcon ContIconsPosInvert3"
                        : "ContIcon ContIconsPos3"
                    }
                    style={{ backgroundColor: "var(--MBColor)" }}
                  >
                    {Item.Icons[2]}
                  </div>
                </div>
              </div>
              <div className="TextContentSobre">
                <p className="TitleSobre">{Item.Title}</p>
                <p className="TextSobre">{Item.Text}</p>
                <div className="IconContainer">
                  {Item.Tags.map((ItemIcon) => {
                    return <div className="Icon">{ItemIcon}</div>;
                  })}
                </div>
              </div>
            </div>
          );
        })}

        <div className="ReturnHome">
          <a href="#Sobre">
            <button
              onClick={() => {
                this.props.Func();
              }}
              style={{
                backgroundColor: "var(--MBColor)",
                boxShadow: "0px 4px 88px var(--MBColor)",
              }}
            >
              Voltar a tela inicial
            </button>
          </a>
        </div>
      </>
    );
  }
}
