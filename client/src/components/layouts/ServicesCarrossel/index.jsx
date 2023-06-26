import React from "react";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

import Layout from "../../assets/SVG/Layout";
import { BsPersonFill } from "react-icons/bs";
import { BiBuildings } from "react-icons/bi";
import { MdTouchApp } from "react-icons/md";

export default function ServiceCarrossel(props) {
  const [sliderRef] = useKeenSlider({
    initial: 1,
    slides: {
      origin: "center",
      perView: 2,
      spacing: props.Gap,
    },
  });

  return (
    <div ref={sliderRef} className="keen-slider TabletCarroussel">
      <div className="keen-slider__slide ItemService">
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
            consequatur accusamus minus. Perferendis consequuntur ipsam labore
            possimus sint.
          </p>
        </div>
      </div>

      <div className="keen-slider__slide ItemService">
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
            consequatur accusamus minus. Perferendis consequuntur ipsam labore
            possimus sint.
          </p>
        </div>
      </div>

      <div className="keen-slider__slide ItemService">
        <div className="IconService">
          <Layout />
        </div>
        <div className="ContentService">
          <p className="ServiveTitle">Templates para perfis do Instagram</p>
          <p className="ServiceText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, esse ab! Repellendus maiores hic molestias
            consectetur eligendi laborum architecto, fugit voluptatum
            consequatur accusamus minus. Perferendis consequuntur ipsam labore
            possimus sint.
          </p>
        </div>
      </div>

      <div className="keen-slider__slide ItemService">
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
            consequatur accusamus minus. Perferendis consequuntur ipsam labore
            possimus sint.
          </p>
        </div>
      </div>
    </div>
  );
}
