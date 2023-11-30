import { motion, useScroll } from "framer-motion";
import React, { useRef, useState } from "react";
import { useParallax } from "react-scroll-parallax";
import "../App.css";

const Section = ({ titulo, bg }) => {
  const ref = useRef(null);
  const scrollYprogress = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  // const handleAnimationComplete = () => {
  //   // Esta función se ejecutará cuando la animación se complete
  //   setAnimationPlayed(true);
  // };

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        
        transition={{ duration: 3 }} // Ajusta la duración de la animación según tus necesidades
        className={`md:w-full md:flex ${bg} justify-center items-center  text-center p-2 h-screen`}
      >
        <motion.div>
          <motion.h1 className="md:text-4xl text-sm text-white font-bold ">
            Bienvenido
          </motion.h1>

          {/* Aqui el contenido de la seccion */}
          <motion.p className="text-lg text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing <br />
            elit. Ex, ab? Laborum qui deleniti quibusdam atque accusantium
            nesciunt <br /> aspernatur voluptas explicabo, tempora sit labore
            tenetur quis dolore facilis <br />
            praesentium reiciendisbr incidunt?
          </motion.p>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Section;
