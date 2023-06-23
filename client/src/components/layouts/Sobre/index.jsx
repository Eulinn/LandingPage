import React from "react";
import "./sobre.css";
import Carroussel from "../carroussel";

import { BsClockFill,BsPersonFill } from "react-icons/bs";
import { GoTasklist } from "react-icons/go";
import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import { BiLogoVisualStudio, BiBuildings } from "react-icons/bi";
import { AiFillThunderbolt } from "react-icons/ai";
import { SiExpo } from "react-icons/si";
import { MdTouchApp } from "react-icons/md";



export default class Sobre extends React.Component {
  render() {
    return (
      <div className="Sobre">
        <div className="ContentSobre">
          <div className="ImageSobre">
            <div className="CircleImageSobre">
              <div className="ImageDeitada"></div>

              <div className="ContIcon ContIconsPos1">
                <FaHtml5 />
              </div>
              <div className="ContIcon ContIconsPos2">
                <FaReact />
              </div>
              <div className="ContIcon ContIconsPos3">
                <FaCss3Alt />
              </div>
            </div>
          </div>
          <div className="TextContentSobre">
            <p className="TitleSobre">Você terá o menor tempo</p>
            <p className="TextSobre">
              Meu trabalho é reconhecido por ser o mais rápido em proporcionar
              resultados. Com uma abordagem ágil e eficiente, estou
              comprometido(a) em executar tarefas e projetos com velocidade e
              precisão. Utilizando minha experiência e habilidades aprimoradas,
              sou capaz de entregar soluções de forma eficaz, reduzindo
              significativamente o tempo necessário para atingir seus objetivos.
            </p>
            <div className="Icon">
              <BsClockFill />
            </div>
          </div>
        </div>

        <div className="ContentSobre Invertido">
          <div className="ImageSobre">
            <div className="CircleImageSobre">
              <div className="ImageDeitada ImgInvert"></div>

              <div className="ContIcon ContIconsPosInvert1">
                <SiExpo />
              </div>
              <div className="ContIcon ContIconsPosInvert2">
                <BiLogoVisualStudio />
              </div>
              <div className="ContIcon ContIconsPosInvert3">
                <AiFillThunderbolt />
              </div>
            </div>
          </div>
          <div className="TextContentSobre">
            <p className="TitleSobre">Facilidade em resolver problemas</p>
            <p className="TextSobre">
              Eu possuo uma habilidade excepcional em resolver problemas com
              facilidade. Sou conhecido(a) por minha capacidade de analisar
              situações complexas e encontrar soluções rápidas e efetivas. Minha
              mente analítica e criativa me permite identificar os desafios
              subjacentes e abordá-los de maneira assertiva. Seja lidando com
              questões técnicas, estratégicas ou operacionais, estou
              preparado(a) para enfrentar qualquer desafio que surgir,
              proporcionando a você a tranquilidade de saber que seus problemas
              serão resolvidos com facilidade e eficácia.
            </p>
            <div className="Icon">
              <GoTasklist />
            </div>
          </div>
        </div>

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
                <div className="AtualVideo"></div>
                <p>
                  Para acessar o {"{Nome Projeto}"} completo, use o link do
                  botão abaixo!
                </p>
                <button>Acessar</button>
              </div>
              <div className="ScrollVideo">
                <div className="MiniVideo"></div>
                <div className="MiniVideo"></div>
                <div className="MiniVideo"></div>
                <div className="MiniVideo"></div>
                <div className="MiniVideo"></div>
                <div className="MiniVideo"></div>
                <div className="MiniVideo"></div>
                <div className="MiniVideo"></div>
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Necessitatibus, esse ab! Repellendus maiores hic molestias
                  consectetur eligendi laborum architecto, fugit voluptatum
                  consequatur accusamus minus. Perferendis consequuntur ipsam
                  labore possimus sint.
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Necessitatibus, esse ab! Repellendus maiores hic molestias
                  consectetur eligendi laborum architecto, fugit voluptatum
                  consequatur accusamus minus. Perferendis consequuntur ipsam
                  labore possimus sint.
                </p>
              </div>
            </div>

            <div className="ItemService">
              <div className="IconService">
                <MdTouchApp/>
              </div>
              <div className="ContentService">
                <p className="ServiveTitle">
                  Empresas que queiram ter automações e agilidade
                </p>
                <p className="ServiceText">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Necessitatibus, esse ab! Repellendus maiores hic molestias
                  consectetur eligendi laborum architecto, fugit voluptatum
                  consequatur accusamus minus. Perferendis consequuntur ipsam
                  labore possimus sint.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="ContentSobre Carroussel">
          <p className="TitleGeral">
            O que pessoas que eu já trabalhei falam de mim
          </p>
          <Carroussel />
        </div>
      </div>
    );
  }
}
