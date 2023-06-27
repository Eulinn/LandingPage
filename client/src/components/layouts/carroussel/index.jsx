import React from "react";

import "./carroussel.css";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

import { RiWhatsappFill } from "react-icons/ri";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

export default function Carroussel(props) {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
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
    ]
  );

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

      {props.Coments.map((item, index) => {
        return (
          <div key={index} className="keen-slider__slide ItemSlider">
            <div className="WhatsIcons">
              <span className="WhatsIcon">
                <RiWhatsappFill />
              </span>
            </div>
            <div className="PerfilSlider">
              <div
                className="PhotoPerfilSlider"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
              <div className="ContentPerfilSlider">
                <p className="NamePerfilSlider">{item.name}</p>
                <p className="CargoPerfilSlider">{item.cargo}</p>
              </div>
            </div>

            <div className="Feedback">{item.feedback}</div>
          </div>
        );
      })}

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
