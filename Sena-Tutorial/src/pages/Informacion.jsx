import React, { useState, useEffect } from "react";
import InformacionSection from "../components/InformacionSection";
import { generarDivsAleatorios } from "../AuxiliaresJavascript/GenerarDiv.js";
import "../../styles.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import paperMario from "../assets/paperMario.jpg";
const Informacion = () => {
  useEffect(() => {
    generarDivsAleatorios(20);
  }, []);

  return (
    <>
      <div id="container-information" className="w-screen  file: h-full">
        <div id="carouse-paper-mario" className=" md:absolute md:mx-52 mx-20 my-72 md:my-44  h-auto">
          <Carousel
            additionalTransfrom={0}
            autoPlay
            arrows
            autoPlaySpeed={9000}
            centerMode={false}
            className=""
            containerClass="container-with-dots"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass="img-carousel-dos"
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024,
                },
                items: 3,
                partialVisibilityGutter: 40,
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0,
                },
                items: 1,
                partialVisibilityGutter: 30,
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464,
                },
                items: 2,
                partialVisibilityGutter: 30,
              },
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass="mi-carousel"
            slidesToSlide={1}
            swipeable
          >
            <div className="w-72 h-56">
              <img src={paperMario} alt="imagen de paper mario" />
            </div>
            <div className="w-72 h-56">
              <img src={paperMario} alt="imagen de paper mario" />
            </div>
            <div className="w-72 h-56">
              <img src={paperMario} alt="imagen de paper mario" />
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Informacion;
