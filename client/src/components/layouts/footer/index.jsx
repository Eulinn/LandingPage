import React from "react";
import "./footer.css";
import { RiWhatsappFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import Line1 from "../../assets/SVG/Line1";
import Line2 from "../../assets/SVG/Line2";
import Heart from "../../assets/SVG/Heart";

export default class Footer extends React.Component {
  render() {
    return (
      <div className="Footer" id="Contato">
        <span className="Detail Detail4"></span>
        <span className="Detail Detail5"></span>
        <span className="Detail Detail6"></span>
        <Line1 />
        <Line2 />
        <Heart class={{position:"absolute", bottom:'0px'}}/>


        

        <p className="TitleGeral">A procura deste serviço?</p>
        <p className="TextSobre">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          quae doloremque deserunt neque obcaecati? Ipsum iure reiciendis,
          laborum temporibus blanditiis corporis, excepturi sint aperiam officia
          a, deserunt ducimus dolores magnam? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Repudiandae quae doloremque deserunt
          neque obcaecati? Ipsum iure reiciendis, laborum temporibus blanditiis
          corporis, excepturi sint aperiam officia a, deserunt ducimus dolores
          magnam?
        </p>
        <ul className="Redes">
          <li><FaLinkedin/></li>
          <li>
            <AiFillInstagram />
          </li>
          <li>
            <RiWhatsappFill />
          </li>
        </ul>
      </div>
    );
  }
}
