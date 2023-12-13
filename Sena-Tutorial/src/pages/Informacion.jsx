import React, { useState, useEffect } from "react";

import { generarDivsAleatorios } from "../AuxiliaresJavascript/GenerarDiv.js";
import "../../styles.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import paperMario from "../assets/paperMario.jpg";
import { Link } from "react-router-dom";

const Informacion = () => {
  useEffect(() => {
    generarDivsAleatorios(20);
  }, []);

  return (
    <>
      <div id="container-information" className="md:w-screen w-80    h-screen">
        <div
          id="carouse-paper-mario"
          className=" md:absolute md:mx-52 my-28  pl-5 md:my-44  "
        >
          {/* contenedor del boton */}
          <div className="  md:mx-96 w-full pl-3 md:-my-10    absolute -my-16 mx-36 ">
            <Link
              to={"/"}
              className="m-2 p-1 rounded-lg text-white md:text-xl transition duration-150 hover:bg-indigo-400  bg-indigo-600"
            >
              Go Home
            </Link>
          </div>
          <h1 className="text-white bg-gray-70 backdrop-blur-2 shadow-white shadow-2xl text-center font-bold md:text-2xl text-xl">
            Estilos de tatuajes
          </h1>
          <div className="backdrop-blur-sm relative">
          <p className="text-white z-50  text-center text-sm m-5">
            Existen gran variedad de tatuajes y asi mismo de estilos, los cuales
            cuentan con artistas de talla mundial que realizan trabajos
            extraordinarios
          </p>
          </div>
       
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
            <div className="bg-fixed mx-1 bg-right  bg-italo bg-cover  h-auto">
              <h1 className="text-white bg-slate-500  text-xl text-center">
                Estilo de tatuae realista
              </h1>
              <div className=" carousel-imformation    "></div>
            </div>
            <div className=" bg-fixed  mx-1 bg-center   bg-arlo bg-cover  h-auto">
              <h1 className="text-white bg-slate-500 text-lg text-center">
                Estilo de tatuaje surealista
              </h1>
              <div className=" carousel-imformation    "></div>
            </div>
            <div className=" bg-fixed  mx-1 bg-center  bg-papper bg-cover  h-auto">
              <h1 className="text-white text-xl bg-slate-500 text-center">
                Estilo de tatuaje cartoon
              </h1>
              <div className=" carousel-imformation    "></div>
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
