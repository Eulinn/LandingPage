import React from "react";

import PandooIcon from "../../assets/SVG/Pandoo";
import Talher from "../../assets/SVG/Talher";
import Food from "../../assets/SVG/Food";
import Cake from "../../assets/SVG/Cake";
import Coockie from "../../assets/SVG/Coockie";
import Carrinho from "../../assets/SVG/Carrinho";
import Clock from "../../assets/SVG/Clock";
import MachineFood from "../../assets/SVG/MachineFood";

import PandooImage from "../../assets/img/Pandoo.png"
import AgendaPandoo from "../../assets/img/AgendaPandoo.png"



export default class Pandoo extends React.Component {
  constructor() {
    super();
    this.state = {
      Pandoo: [
        {
          Icons: [<PandooIcon />, <Talher />, <Food />],
          Title: "Com sites ja no mercado como o Pandoo",
          Text: "O Pandoo é uma plataforma incrível que permite aos usuários explorar uma ampla variedade de receitas de qualidade da região de Minas Gerais. Aqui você pode navegar por um extenso banco de dados de receitas autênticas, compartilhadas por chefs locais e amantes da culinária mineira. Descubra segredos culinários bem guardados, aprenda técnicas de preparo e mergulhe nas tradições e sabores únicos dessa região encantadora. ",
          Tags: [<Carrinho />],
          Image: PandooImage,
        },
        {
          Icons: [<MachineFood />, <Cake />, <Coockie />],
          Title: "Rapido, prático perfeito para o usuário",
          Text: "No Pandoo, você terá acesso a um desenvolvimento limpo, ágil e tecnologias modernas, como Bootstrap e Laravel. Essas ferramentas poderosas ajudam a criar interfaces elegantes e responsivas, além de agilizar o processo de desenvolvimento de aplicativos e sites. Com o Pandoo, você pode aproveitar ao máximo essas tecnologias avançadas, permitindo que sua equipe de desenvolvimento crie projetos de alta qualidade com eficiência e facilidade.",
          Tags: [<Clock />],
          Image: AgendaPandoo,

        },
      ],
    };
  }

  render() {
    return (
      <>
        {this.state.Pandoo.map((Item, index) => {
          return (
            <div
              key={index}
              className={index ? "ContentSobre Invertido" : "ContentSobre"}
              id="ContetGeralSobre"
            >
              <div className="ImageSobre">
                <div
                  className="CircleImageSobre"
                  style={{ borderColor: "var(--PandooColor)" }}
                >
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
                    style={{ backgroundColor: "var(--PandooColor)" }}
                  >
                    {Item.Icons[0]}
                  </div>
                  <div
                    className={
                      index
                        ? "ContIcon ContIconsPosInvert2"
                        : "ContIcon ContIconsPos2"
                    }
                    style={{ backgroundColor: "var(--PandooColor)" }}
                  >
                    {Item.Icons[1]}
                  </div>
                  <div
                    className={
                      index
                        ? "ContIcon ContIconsPosInvert3"
                        : "ContIcon ContIconsPos3"
                    }
                    style={{ backgroundColor: "var(--PandooColor)" }}
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

        <div className="ReturnHome">
          <a href="#Sobre">
            <button
              onClick={() => {
                this.props.Func();
              }}
              style={{
                backgroundColor: "var(--PandooColor)",
                boxShadow: "0px 4px 88px var(--PandooColor)",
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
