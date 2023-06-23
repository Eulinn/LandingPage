import React from "react";

import { GoTasklist } from "react-icons/go";
import { FaCss3Alt, FaHtml5, FaReact, FaBook } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import { SiExpo } from "react-icons/si";
import { BsClockFill } from "react-icons/bs";
import { BiLogoVisualStudio } from "react-icons/bi";
import { GiNotebook } from "react-icons/gi";
import { TbCircleLetterM } from "react-icons/tb";
import { GrWorkshop } from "react-icons/gr";
import { MdOutlineAttachMoney } from "react-icons/md";

import PandooIcon from "../../assets/SVG/Pandoo";
import Food from "../../assets/SVG/Food";
import Talher from "../../assets/SVG/Talher";
import MachineFood from "../../assets/SVG/MachineFood";
import Cake from "../../assets/SVG/Cake";
import Coockie from "../../assets/SVG/Coockie";

export default class Trabalhos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Euler: {
        Home: [
          {
            Icons: [<FaHtml5 />, <FaReact />, <FaCss3Alt />],
            Title: "Você terá o menor tempo",
            Text: "Meu trabalho é reconhecido por ser o mais rápido em proporcionar resultados. Com uma abordagem ágil e eficiente, estou comprometido(a) em executar tarefas e projetos com velocidade e precisão. Utilizando minha experiência e habilidades aprimoradas, sou capaz de entregar soluções de forma eficaz, reduzindo significativamente o tempo necessário para atingir seus objetivos.",
            Tags: [<BsClockFill />],
          },
          {
            Icons: [<SiExpo />, <BiLogoVisualStudio />, <AiFillThunderbolt />],
            Title: "Facilidade em resolver problemas",
            Text: "Eu possuo uma habilidade excepcional em resolver problemas com facilidade. Sou conhecido(a) por minha capacidade de analisar situações complexas e encontrar soluções rápidas e efetivas. Minha mente analítica e criativa me permite identificar os desafios subjacentes e abordá-los de maneira assertiva. Seja lidando com questões técnicas, estratégicas ou operacionais, estou preparado(a) para enfrentar qualquer desafio que surgir, proporcionando a você a tranquilidade de saber que seus problemas serão resolvidos com facilidade e eficácia.",
            Tags: [<GoTasklist />],
          },
        ],
        Pandoo: [
          {
            Icons: [<PandooIcon />, <Talher />, <Food />],
            Title: "Com sites ja no mercado como o Pandoo",
            Text: "O Pandoo é uma plataforma incrível que permite aos usuários explorar uma ampla variedade de receitas de qualidade da região de Minas Gerais. Aqui você pode navegar por um extenso banco de dados de receitas autênticas, compartilhadas por chefs locais e amantes da culinária mineira. Descubra segredos culinários bem guardados, aprenda técnicas de preparo e mergulhe nas tradições e sabores únicos dessa região encantadora. ",
            Tags: [<BsClockFill />],
          },
          {
            Icons: [<MachineFood />, <Cake />, <Coockie />],
            Title: "Rapido, prático perfeito para o usuário",
            Text: "No Pandoo, você terá acesso a um desenvolvimento limpo, ágil e tecnologias modernas, como Bootstrap e Laravel. Essas ferramentas poderosas ajudam a criar interfaces elegantes e responsivas, além de agilizar o processo de desenvolvimento de aplicativos e sites. Com o Pandoo, você pode aproveitar ao máximo essas tecnologias avançadas, permitindo que sua equipe de desenvolvimento crie projetos de alta qualidade com eficiência e facilidade.",
            Tags: [<GoTasklist />],
          },
        ],
        Maiara: [
          {
            Icons: [<GiNotebook />, <TbCircleLetterM />, <GrWorkshop />],
            Title: "Conte também com a sua empresa on-line",
            Text: "Através da Maiara Barreto Consultorias, você terá acesso a um serviço online de alta qualidade, além de uma variedade de e-books gratuitos e pagos que irão aprimorar os serviços da sua empresa. Seja você um empreendedor iniciante ou um empresário experiente, a Maiara Barreto Consultorias está comprometida em fornecer recursos de qualidade que impulsionarão o sucesso e o desenvolvimento contínuo da sua empresa.",
            Tags: [<BsClockFill />],
          },
          {
            Icons: [
              <AiFillThunderbolt />,
              <FaBook />,
              <MdOutlineAttachMoney />,
            ],
            Title: "Inúmeros estilos de layouts",
            Text: "Veja também um design sério e alinhado com a índole da empresa. Reconhecemos a importância de transmitir uma imagem profissional e confiável através da identidade visual.",
            Tags: [<GoTasklist />],
          },
        ],
      },
    };
  }

  ChangeStage = () => {
    if (this.props.Changed) {
      return;
    }

    let Array = [
      this.state.Euler.Home,
      this.state.Euler.Pandoo,
      this.state.Euler.Maiara,
    ];

    return Array[this.props.Stage];
  };

  render() {
    return (
      <>
        {this.ChangeStage()?.map((Item, index) => {
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
                <div className="Icon">{Item.Tags[0]}</div>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}
