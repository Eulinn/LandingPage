import React from "react";
import "./sobre.css";
import Carroussel from "../carroussel";

import { BsPersonFill, BsGithub } from "react-icons/bs";
import { BiBuildings } from "react-icons/bi";
import { MdTouchApp } from "react-icons/md";
import Trabalhos from "../Trabalhos";
import Pandoo from "../Trabalhos/Pandoo";
import Maiara from "../Trabalhos/Maiara";
import Thaiane from "../Trabalhos/Thaiane";
import LuizHome from "../Trabalhos/LuizHome";
import Layout from "../../assets/SVG/Layout";
import ServiceCarrossel from "../ServicesCarrossel";

import { RiWhatsappFill } from "react-icons/ri";
import Karol from "../../assets/img/Karol.jpg";

import Arduino from "../../assets/img/Arduino.png";
import CodeSnap from "../../assets/img/CodeSnap.png";
import Fisica from "../../assets/img/fisica.webp";
import Crypto from "../../assets/img/Crypto.jpeg";
import Egames from "../../assets/img/Egames.png";
import BankApp from "../../assets/img/BankApp.jpeg";

export default class Sobre extends React.Component {
  constructor() {
    super();
    this.state = {
      Stage: 0,
      GapTablet: 64,
      CarrousesselTablet: false,
      CurrentTitle: String,
      CurrentLink: String,
      CurrentImage: null,
      Projetos: {
        el: [
          {
            title: "Efeito Digitar",
            image: CodeSnap,
            link: "https://github.com/Eulinn/Pythons",
          },
          {
            title: "Arduino - PySide6 Pydracula",
            image: Arduino,
            link: "https://github.com/Eulinn/Ardu-no",
          },
          {
            title: "Fórmulas",
            image: Fisica,
            link: "https://github.com/Eulinn/Formulas",
          },
        ],
        lz: [
          {
            title: "Crypto",
            image: Crypto,
            link: "https://www.figma.com/file/nxCF5Je63HRQPg2KhidH5P/Cursodefigma_start?type=design&node-id=46%3A1384&mode=design&t=rVjkpj0HIhLvyKT0-1",
          },
          {
            title: "Egames",
            image: Egames,
            link: "https://www.figma.com/file/2TmeyeVbrE4QqOVa537UqJ/Untitled?type=design&node-id=0%3A1&mode=design&t=AERlaX48dMZ1XQA2-1",
          },
          {
            title: "Bank App",
            image: BankApp,
            link: "https://www.figma.com/file/vRghyOPXjnJizFT7iLgZml/Untitled?type=design&node-id=102-2600&mode=design&t=VvNg5aEsWpWLKAC4-0",
          },
        ],
      },
    };
  }

  FirsImpres = () => {
    if (this.props.Changed) {
      this.setState({
        CurrentTitle: this.state.Projetos?.lz[0]?.title,
        CurrentLink: this.state.Projetos?.lz[0]?.link,
        CurrentImage: this.state.Projetos?.lz[0]?.image,
      });

      return;
    }
    this.setState({
      CurrentTitle: this.state.Projetos?.el[0]?.title,
      CurrentLink: this.state.Projetos?.el[0]?.link,
      CurrentImage: this.state.Projetos?.el[0]?.image,
    });
  };

  ChangeStage = () => {
    if (this.props.Changed) {
      return <LuizHome />;
    }

    if (!this.state.Stage) {
      return <Trabalhos />;
    }

    if (this.state.Stage === 1) {
      return <Pandoo Func={this.ReturnStage} />;
    }

    if (this.state.Stage === 2) {
      return <Maiara Func={this.ReturnStage} />;
    }

    if (this.state.Stage === 3) {
      return <Thaiane Func={this.ReturnStage} />;
    }
  };

  ReturnStage = async () => {
    await this.setState({ Stage: 0 });
  };

  componentDidMount() {
    const FirstImpress = async () => {
      if (window.innerWidth <= 1024 && window.innerWidth >= 600) {
        await this.setState({ CarrousesselTablet: true });
        await this.setState({ GapTablet: (64 * window.innerWidth) / 1200 });
        return;
      }

      await this.setState({ CarrousesselTablet: false });
    };

    FirstImpress();

    window.addEventListener("resize", async (event) => {
      if (window.innerWidth <= 1024 && window.innerWidth >= 600) {
        await this.setState({ CarrousesselTablet: true });
        await this.setState({ GapTablet: (64 * window.innerWidth) / 1200 });

        return;
      }

      await this.setState({ CarrousesselTablet: false });
    });

    this.FirsImpres();
  }

  render() {

    return (
      <div className="Sobre" id="Sobre">
        <div className="WorksBanner">
          <p>Com quem já trabalhei</p>
          <ul>
            {this.props.Person?.Persons?.map((item, index) => {
              return (
                <li
                  key={index}
                  onClick={async () => {
                    await this.setState({ Stage: index + 1 });

                    console.log(this.state.Stage);
                  }}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>

        {this.ChangeStage()}

        <div className="ContentSobre ColumnVideo">
          <span className="Detail Detail2"></span>
          <span className="Detail Detail3"></span>
          <p className="TitleGeral">Quer saber mais sobre minhas habilidade?</p>
          <div className="ContainerVideo">
            <ul className="LinuxDetail">
              <li></li>
              <li></li>
              <li></li>
            </ul>

            <div className="ContentVideo">
              <div className="LocalVideo">
                <div
                  className="AtualVideo"
                  style={{ backgroundImage: `url(${this.state.CurrentImage})` }}
                ></div>
                <p>
                  Para acessar o projeto {this.state.CurrentTitle} completo, use
                  o link do botão abaixo!
                </p>
                <button
                  onClick={() => {
                    window.open(this.state.CurrentLink, "_blank");
                  }}
                >
                  <span>
                    <BsGithub />
                  </span>{" "}
                  Acessar
                </button>
              </div>
              <div className="ScrollVideo">
                {this.props.Changed
                  ? this.state.Projetos?.lz?.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="MiniVideo"
                          style={{ backgroundImage: `url(${item?.image})` }}
                          onClick={async () => {
                            await this.setState({
                              CurrentTitle: item?.title,
                              CurrentLink: item?.link,
                              CurrentImage: item?.image,
                            });
                          }}
                        ></div>
                      );
                    })
                  : this.state.Projetos?.el?.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="MiniVideo"
                          style={{ backgroundImage: `url(${item?.image})` }}
                          onClick={async () => {
                            await this.setState({
                              CurrentTitle: item?.title,
                              CurrentLink: item?.link,
                              CurrentImage: item?.image,
                            });
                          }}
                        ></div>
                      );
                    })}
              </div>
              <div className="MobileTitle">
                <p>
                  Para acessar o projeto {this.state.CurrentTitle} completo, use
                  o link do botão abaixo!
                </p>
                <button
                  onClick={() => {
                    window.open(this.state.CurrentLink, "_blank");
                  }}
                >
                  <span>
                    <BsGithub />
                  </span>{" "}
                  Acessar
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="ContentSobre ColumnServices">
          <p className="TitleGeral">Eu ofereço serviços para você que</p>
          <div className="Services">
            <div className="ItemService">
              <div className="IconService">
                <BiBuildings />
              </div>
              <div className="ContentService">
                <p className="ServiveTitle">
                  Empresas que precisam de Site e aplicativos para usufruir de
                  serviços
                </p>
                <p className="ServiceText">
                  Eu ofereço serviços abrangentes para empresas que desejam ter
                  um site e aplicativos personalizados para potencializar seus
                  serviços. Com minha experiência em desenvolvimento web e de
                  aplicativos, posso criar soluções sob medida que atendam às
                  necessidades exclusivas da sua empresa. Seja para um site
                  corporativo informativo, um e-commerce funcional ou um
                  aplicativo interativo.
                </p>
              </div>
            </div>

            <div className="ItemService">
              <div className="IconService">
                <BsPersonFill />
              </div>
              <div className="ContentService">
                <p className="ServiveTitle">
                  Pessoas que querem ter seu site próprio
                </p>
                <p className="ServiceText">
                  Crio sites personalizados para pessoas que desejam ter sua
                  presença online única. Com minha experiência em design web e
                  desenvolvimento de sites, posso criar um site sob medida para
                  você, refletindo sua identidade e atendendo às suas
                  necessidades específicas. Desde blogs pessoais a portfólios
                  profissionais, posso criar um site que transmita sua mensagem
                  de forma eficaz e atraente.
                </p>
              </div>
            </div>

            <div className="ItemService">
              <div className="IconService">
                <MdTouchApp />
              </div>
              <div className="ContentService">
                <p className="ServiveTitle">
                  Empresas que queiram ter automações e agilidade
                </p>
                <p className="ServiceText">
                  Scripts personalizados para empresas que buscam automação e
                  agilidade em seus processos. Com minha experiência em
                  programação e conhecimento das melhores práticas empresariais,
                  posso desenvolver scripts eficientes e personalizados que
                  ajudarão a otimizar tarefas e aumentar a produtividade. Seja
                  para automatizar o envio de e-mails, gerar relatórios
                  automáticos ou simplificar fluxos de trabalho complexos.
                </p>
              </div>
            </div>

            <div
              className="ItemService"
              style={{ display: this.props.Changed ? "flex" : "none" }}
            >
              <div className="IconService">
                <Layout />
              </div>
              <div className="ContentService">
                <p className="ServiveTitle">
                  Templates para perfis do Instagram
                </p>
                <p className="ServiceText">
                  Crio templates personalizados para perfis do Instagram,
                  oferecendo um design bonito e atraente. Com minha experiência
                  em design gráfico, posso criar templates exclusivos que
                  ajudarão a destacar o seu perfil. Seja para influenciadores,
                  marcas ou indivíduos que desejam transmitir uma imagem
                  profissional e elegante, meus templates são projetados para se
                  adaptarem perfeitamente ao estilo e à identidade visual de
                  cada cliente.
                </p>
              </div>
            </div>
          </div>

          {this.state.CarrousesselTablet ? (
            <ServiceCarrossel
              Gap={this.state.GapTablet}
              Changed={this.props.Changed}
            />
          ) : null}
        </div>

        <div
          className="ContentSobre Carroussel"
          id="Depoimentos"
          style={{ display: "none" }}
        >
          <p className="TitleGeral">
            O que as pessoas que eu já trabalhei falam de mim
          </p>

          <Carroussel />

          <div className="ContainerFeedbacks">
            <div className="ItemSlider">
              <div className="WhatsIcons">
                <span className="WhatsIcon">
                  <RiWhatsappFill />
                </span>
              </div>
              <div className="PerfilSlider">
                <div
                  className="PhotoPerfilSlider"
                  style={{ backgroundImage: `url(${Karol})` }}
                ></div>
                <div className="ContentPerfilSlider">
                  <p className="NamePerfilSlider">Karolayne Campos</p>
                  <p className="CargoPerfilSlider">Estudante</p>
                </div>
              </div>

              <div className="Feedback">
                Fiquei impressionada com a capacidade de resolver problemas
                complexos de uma forma tão ágil e eficiente, demonstrando que
                realmente domina o que faz, assim como, um alto nível de
                profissionalismo e comprometimento. Além do mais, sempre cumpriu
                os prazos estabelecidos, entregando um trabalho de alta
                qualidade dentro do tempo previsto e sempre me consultando para
                saber se eu estava gostando ou não. A dedicação do programador
                em adquirir novas habilidades e estar atualizado com as últimas
                tendências tecnológicas é admirável. Sua busca contínua pelo
                aprimoramento pessoal e profissional reflete em seu trabalho de
                qualidade.
              </div>
            </div>

            <div className="ItemSlider">
              <div className="WhatsIcons">
                <span className="WhatsIcon">
                  <RiWhatsappFill />
                </span>
              </div>
              <div className="PerfilSlider">
                <div
                  className="PhotoPerfilSlider"
                  style={{ backgroundImage: `url(${Karol})` }}
                ></div>
                <div className="ContentPerfilSlider">
                  <p className="NamePerfilSlider">Karolayne Campos</p>
                  <p className="CargoPerfilSlider">Estudante</p>
                </div>
              </div>

              <div className="Feedback">
                Fiquei impressionada com a capacidade de resolver problemas
                complexos de uma forma tão ágil e eficiente, demonstrando que
                realmente domina o que faz, assim como, um alto nível de
                profissionalismo e comprometimento. Além do mais, sempre cumpriu
                os prazos estabelecidos, entregando um trabalho de alta
                qualidade dentro do tempo previsto e sempre me consultando para
                saber se eu estava gostando ou não. A dedicação do programador
                em adquirir novas habilidades e estar atualizado com as últimas
                tendências tecnológicas é admirável. Sua busca contínua pelo
                aprimoramento pessoal e profissional reflete em seu trabalho de
                qualidade.
              </div>
            </div>

            <div className="ReturnHome">
              <button>Carregar Mais...</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
