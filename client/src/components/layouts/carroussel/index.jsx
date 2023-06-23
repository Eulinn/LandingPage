import React from "react";

import "./carroussel.css";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

import { RiWhatsappFill } from "react-icons/ri";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";


export default function Carroussel() {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      origin: "center",
      perView: 2,
      spacing: 54,
    },
  });

  return (
    <div ref={sliderRef} className="keen-slider ContainerCarrossel">
        
        <div className="DesktopSeta Back">
            <span onClick={()=>{
                instanceRef.current?.prev()
            }}>
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
          <div className="PhotoPerfilSlider"></div>
          <div className="ContentPerfilSlider">
            <p className="NamePerfilSlider">Maiara Barreto</p>
            <p className="CargoPerfilSlider">
              Seu cargo ce trabalha com o que?lkkkkkkkkk
            </p>
          </div>
        </div>

        <div className="Feedback">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
          nobis? Error consequuntur architecto saepe commodi dignissimos quos,
          veniam sapiente quibusdam delectus ea quisquam molestias reiciendis
          vel ex magnam quam eos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
          nobis? Error consequuntur architecto saepe commodi dignissimos quos,
          veniam sapiente quibusdam delectus ea quisquam molestias reiciendis
          vel ex magnam quam eos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
          nobis? Error consequuntur architecto saepe commodi dignissimos quos,
          veniam sapiente quibusdam delectus ea quisquam molestias reiciendis
          vel ex magnam quam eos.
        </div>
      </div>

      <div className="keen-slider__slide ItemSlider">
        <div className="WhatsIcons">
          <span className="WhatsIcon">
            <RiWhatsappFill />
          </span>
        </div>
        <div className="PerfilSlider">
          <div className="PhotoPerfilSlider"></div>
          <div className="ContentPerfilSlider">
            <p className="NamePerfilSlider">Maiara Barreto</p>
            <p className="CargoPerfilSlider">
              Seu cargo ce trabalha com o que?lkkkkkkkkk
            </p>
          </div>
        </div>

        <div className="Feedback">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
          nobis? Error consequuntur architecto saepe commodi dignissimos quos,
          veniam sapiente quibusdam delectus ea quisquam molestias reiciendis
          vel ex magnam quam eos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
          nobis? Error consequuntur architecto saepe commodi dignissimos quos,
          veniam sapiente quibusdam delectus ea quisquam molestias reiciendis
          vel ex magnam quam eos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
          nobis? Error consequuntur architecto saepe commodi dignissimos quos,
          veniam sapiente quibusdam delectus ea quisquam molestias reiciendis
          vel ex magnam quam eos.
        </div>
      </div>

      <div className="keen-slider__slide ItemSlider">
        <div className="WhatsIcons">
          <span className="WhatsIcon">
            <RiWhatsappFill />
          </span>
        </div>
        <div className="PerfilSlider">
          <div className="PhotoPerfilSlider"></div>
          <div className="ContentPerfilSlider">
            <p className="NamePerfilSlider">Maiara Barreto</p>
            <p className="CargoPerfilSlider">
              Seu cargo ce trabalha com o que?lkkkkkkkkk
            </p>
          </div>
        </div>

        <div className="Feedback">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
          nobis? Error consequuntur architecto saepe commodi dignissimos quos,
          veniam sapiente quibusdam delectus ea quisquam molestias reiciendis
          vel ex magnam quam eos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
          nobis? Error consequuntur architecto saepe commodi dignissimos quos,
          veniam sapiente quibusdam delectus ea quisquam molestias reiciendis
          vel ex magnam quam eos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
          nobis? Error consequuntur architecto saepe commodi dignissimos quos,
          veniam sapiente quibusdam delectus ea quisquam molestias reiciendis
          vel ex magnam quam eos.
        </div>
      </div>

      <div className="DesktopSeta Forward">
            <span onClick={()=>{
                instanceRef.current?.next()
            }}>
                <IoIosArrowForward />
            </span>
        </div>

    </div>
    );
}
