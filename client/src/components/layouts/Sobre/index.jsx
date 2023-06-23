import React from "react";
import "./sobre.css";
import Carroussel from "../carroussel";

import { BsPersonFill } from "react-icons/bs";
import { BiBuildings } from "react-icons/bi";
import { MdTouchApp } from "react-icons/md";
import Trabalhos from "../Trabalhos";


export default class Sobre extends React.Component {
  constructor() {
    super();
    this.state = {
      Stage: 0,
    };
  }



  render() {
    return (
      <div className="Sobre">
        <div className="WorksBanner">
          <p>Com quem já trabalhei</p>
          <ul>
            {this.props.Person?.Persons?.map((item,index) =>{
              return <li key={index} onClick={async ()=>{
                await this.setState({Stage: index+1})

                console.log(this.state.Stage)

              }}>{item}</li>
            })}
          </ul>
        </div>

        <Trabalhos Stage={this.state.Stage} Changed={this.props.Changed}/>

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
                <MdTouchApp />
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
            O que as pessoas que eu já trabalhei falam de mim
          </p>
          <Carroussel />
        </div>
      </div>
    );
  }
}
