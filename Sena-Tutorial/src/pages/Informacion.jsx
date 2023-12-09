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
      <div id="container-information" className="w-screen   h-full">
        <div
          id="carouse-paper-mario"
          className=" md:absolute md:mx-52 mx-20 my-72 md:my-44  h-auto"
         
        >
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quam, dolorem eos recusandae cupidita non.
          </p>
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
            <div className="bg-fixed mx-1  bg-italo bg-cover  h-auto">
              <h1 className="text-white text-xl text-center">Estilo de tatuae realista</h1>
              <div className=" carousel-imformation    ">
                
              </div>
            </div>
            <div className=" bg-fixed  mx-1   bg-arlo bg-cover  h-auto">
              <h1 className="text-white text-xl text-center">Estilo de tatuae realista</h1>
              <div className=" carousel-imformation    ">
                
              </div>
            </div>
            <div className=" bg-fixed  mx-1 bg-papper bg-cover  h-auto">
              <h1 className="text-white text-xl text-center">Estilo de tatuae realista</h1>
              <div className=" carousel-imformation    ">
                
              </div>
            </div>
             

            {/* <div className="w-72 bg-papper bg-cover flex flex-col-reverse h-56">
             <p className="text-white shadow-xl  text-stroke font-bold md:text-xl   text-center">tatuaje estilo cartoon</p>
            </div>
            
            <div className="w-72 bg-arlo bg-cover flex flex-col-reverse h-56"> 
              <p className="text-white shadow-xl  text-stroke font-bold md:text-xl   text-center">tatuaje estilo realismo dark</p>
            </div> */}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Informacion;
