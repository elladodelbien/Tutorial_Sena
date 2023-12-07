import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../App.css";
import paperMario from "../assets/paperMario.jpg";

 
const CarrouselTatto = ({ imagen }) => {
  const Nramdom = Math.round(Math.random() * 10);
  const path1 = imagen[Math.round(Math.random() * 10)];
  const path2 = imagen[Math.round(Math.random() * 10)];
  const path3 = imagen[Math.round(Math.random() * 10)];
  const [errorImagen, setErrorImagen] = useState(false);
  const [paper,setPaper] = useState(path2)
  const [paper1,setPaper1] = useState(path1)
  const [paper3,setPaper3] = useState(path3)

  const manejarError = () => {
    setErrorImagen(true);
  };

  return (
    <>
      <Carousel
        additionalTransfrom={0}
        autoPlay
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass="img-carousel"
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
        <div className="carrousel-hijo   bg-slate-400">
          <h1>Tatuajes</h1>

          <img
            className="w-96 h-64 p-5 ml-2  "
            onError={()=>{
              setPaper(paperMario)
            }}
            src={path2}
            alt="imagen de un tatuaje"
           
          />
        </div>
        <div className="carrousel-hijo bg-slate-400">
          <h1>Mira estos tatuajes :</h1>

          <img
            className="w-96 h-64 p-5 ml-2"
            onError={()=>{
              setPaper1(paperMario)
            }}
            src={path3}
            alt="imagen de un tatuaje"
           
          />

          {/* <img className="w-96 h-64 p-5 ml-2 "  src={ path2} alt="" sizes="imagen de un tatto" /> */}
        </div>
        <div className="carrousel-hijo     bg-slate-400">
          <h1>tattos</h1>
          <img
            className="w-96 h-64 p-5 ml-2  "
            onError={()=>{
              setPaper3(paperMario)
            }}
            src={paper3}
            alt="imagen de un tatuaje"
            
          />
        </div>
      </Carousel>
      ;
    </>
  );
};

export default CarrouselTatto;
