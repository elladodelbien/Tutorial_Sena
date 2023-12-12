import { motion, useScroll } from "framer-motion";
import React, { useRef, useState } from "react";
import { useParallax } from "react-scroll-parallax";
import "../App.css";

const Section = ({ titulo, bg }) => {
  const ref = useRef(null);
  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        
        transition={{ duration: 1.5 }} // Ajusta la duración de la animación según tus necesidades
        className={`md:w-full md:flex ${bg} justify-center items-center m-4  opacity-5  text-center p-2 h-screen`}
      >
        <motion.div className="flex   flex-col md:mb-48 p-4   items-center">
          <motion.h1 className="md:text-4xl text-3xl   text-white font-bold ">
            Bienvenido
          </motion.h1>

          {/* Aqui el contenido de la seccion */}
          <motion.p className="md:text-xl text-lime-300  text-lg font-bold text-center ">
          En <span>Cueva Store</span>, creemos que cada tatuaje cuenta una historia única.<br /> Te invitamos a explorar el fascinante mundo del arte corporal,<br /> donde la expresión personal se encuentra con la creatividad ilimitada. <br /> Desde consejos prácticos hasta una comunidad apasionada,<br />  aquí encontrarás todo lo que necesitas para hacer que <br />tu experiencia con los tatuajes sea extraordinaria.
         
          </motion.p>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Section;
