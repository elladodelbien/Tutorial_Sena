import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../App.css";

const CarrouselTatto = ({   imagen  }) => {

  const path1 = imagen[0]
  const path2 = imagen[1]
  const path3 = imagen[2]

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
          <h1>imgs</h1>
          <img className="w-96 h-64 p-5 ml-2  " src={path3} alt="" sizes="imagen de un tatto" />
        </div>
        <div className="carrousel-hijo bg-slate-400">
          <h1>tiene medidas</h1>
          <img className="w-96 h-64 p-5 ml-2  "   src={ path2} alt="" sizes="imagen de un tatto" />
          {/* url("/torre.jpg") */}
        </div>
        <div className="carrousel-hijo     bg-slate-400">
          <h1>imgs</h1>
          <img className="w-96 h-64 p-5 ml-2  "  src={ path1} alt="" sizes="imagen de un tatto" />
        </div>
      </Carousel>
      ;
    </>
  );
};

export default CarrouselTatto;
