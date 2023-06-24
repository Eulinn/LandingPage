import React from "react";

import "./carroussel.css";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

import { RiWhatsappFill } from "react-icons/ri";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import Karol from '../../assets/img/Karol.jpg'

export default function Carroussel() {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      origin: "center",
      perView: 2,
      spacing: 54,
    },
  },
  [
    (slider) => {
      let timeout;
      let mouseOver = false;
      function clearNextTimeout() {
        clearTimeout(timeout);
      }
      function nextTimeout() {
        clearTimeout(timeout);
        if (mouseOver) return;
        timeout = setTimeout(() => {
          slider.next();
        }, 1000);
      }
      slider.on("created", () => {
        slider.container.addEventListener("mouseover", () => {
          mouseOver = true;
          clearNextTimeout();
        });
        slider.container.addEventListener("mouseout", () => {
          mouseOver = false;
          nextTimeout();
        });
        nextTimeout();
      });
      slider.on("dragStarted", clearNextTimeout);
      slider.on("animationEnded", nextTimeout);
      slider.on("updated", nextTimeout);
    },
  ]);

  return (
    <div ref={sliderRef} className="keen-slider ContainerCarrossel">
      <div className="DesktopSeta Back">
        <span
          onClick={() => {
            instanceRef.current?.prev();
          }}
        >
          <IoIosArrowBack />
        </span>
      </div>

      <div className="keen-slider__slide ItemSlider">
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
          Fiquei impressionada com a capacidade de resolver problemas complexos
          de uma forma tão ágil e eficiente, demonstrando que realmente domina o
          que faz, assim como, um alto nível de profissionalismo e
          comprometimento. Além do mais, sempre cumpriu os prazos estabelecidos,
          entregando um trabalho de alta qualidade dentro do tempo previsto e
          sempre me consultando para saber se eu estava gostando ou não. A
          dedicação do programador em adquirir novas habilidades e estar
          atualizado com as últimas tendências tecnológicas é admirável. Sua
          busca contínua pelo aprimoramento pessoal e profissional reflete em
          seu trabalho de qualidade.
        </div>
      </div>

      <div className="keen-slider__slide ItemSlider">
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
          Fiquei impressionada com a capacidade de resolver problemas complexos
          de uma forma tão ágil e eficiente, demonstrando que realmente domina o
          que faz, assim como, um alto nível de profissionalismo e
          comprometimento. Além do mais, sempre cumpriu os prazos estabelecidos,
          entregando um trabalho de alta qualidade dentro do tempo previsto e
          sempre me consultando para saber se eu estava gostando ou não. A
          dedicação do programador em adquirir novas habilidades e estar
          atualizado com as últimas tendências tecnológicas é admirável. Sua
          busca contínua pelo aprimoramento pessoal e profissional reflete em
          seu trabalho de qualidade.
        </div>
      </div>

      <div className="keen-slider__slide ItemSlider">
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
          Fiquei impressionada com a capacidade de resolver problemas complexos
          de uma forma tão ágil e eficiente, demonstrando que realmente domina o
          que faz, assim como, um alto nível de profissionalismo e
          comprometimento. Além do mais, sempre cumpriu os prazos estabelecidos,
          entregando um trabalho de alta qualidade dentro do tempo previsto e
          sempre me consultando para saber se eu estava gostando ou não. A
          dedicação do programador em adquirir novas habilidades e estar
          atualizado com as últimas tendências tecnológicas é admirável. Sua
          busca contínua pelo aprimoramento pessoal e profissional reflete em
          seu trabalho de qualidade.
        </div>
      </div>

      

      <div className="DesktopSeta Forward">
        <span
          onClick={() => {
            instanceRef.current?.next();
          }}
        >
          <IoIosArrowForward />
        </span>
      </div>
    </div>
  );
}
