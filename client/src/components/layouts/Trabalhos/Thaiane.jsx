import React from "react";

import { GiMeat, GiKnifeFork } from "react-icons/gi";
import { BiLogoFirebase } from "react-icons/bi";

import { MdOutlineAttachMoney } from "react-icons/md";

import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { BsEnvelopePaper, BsInstagram, BsPhone } from "react-icons/bs";

import Tata1 from "../../assets/img/Tata1.png";
import Tata2 from "../../assets/img/Tata2.png";

export default class Thaiane extends React.Component {
  constructor() {
    super();
    this.state = {
      Thaiane: [
        {
          Icons: [<GiMeat />, <GiKnifeFork />, <BsEnvelopePaper />],
          Title: "A sua empresa em qualquer dispositivo",
          Text: "Através da Tata Alimentos, você terá acesso a um serviço online de alta qualidade, além de uma variedade de receitas e produtos de qualidade insuperável, proporcionando uma experiência única! Ao longo dos anos, a empresa enfrentou desafios e superou obstáculos, mas nunca perdeu de vista seus valores e compromisso com clientes e colaboradores.",
          Tags: [<BsPhone />],
          Image: Tata1,
        },
        {
          Icons: [<BsInstagram />, <BiLogoFirebase />, <MdOutlineAttachMoney />],
          Title: "Layouts responsivos e dedicados",
          Text: "Veja também um design responsivo e excepcional. Reconhecemos a importância de transmitir uma imagem profissional e confiável através da identidade visual em todos os dispositivos.",
          Tags: [<HiOutlineComputerDesktop />],
          Image: Tata2,
        },
      ],
    };
  }

  render() {
    return (
      <>
        {this.state.Thaiane.map((Item, index) => {
          return (
            <div
              key={index}
              className={index ? "ContentSobre Invertido" : "ContentSobre"}
              id="ContetGeralSobre"
            >
              <div className="ImageSobre">
                <div
                  className="CircleImageSobre"
                  style={{ borderColor: "var(--TataColor)" }}
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
                    style={{ backgroundColor: "var(--TataColor)" }}
                  >
                    {Item.Icons[0]}
                  </div>
                  <div
                    className={
                      index
                        ? "ContIcon ContIconsPosInvert2"
                        : "ContIcon ContIconsPos2"
                    }
                    style={{ backgroundColor: "var(--TataColor)" }}
                  >
                    {Item.Icons[1]}
                  </div>
                  <div
                    className={
                      index
                        ? "ContIcon ContIconsPosInvert3"
                        : "ContIcon ContIconsPos3"
                    }
                    style={{ backgroundColor: "var(--TataColor)" }}
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
                backgroundColor: "var(--TataColor)",
                boxShadow: "0px 4px 88px var(--TataColor)",
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
