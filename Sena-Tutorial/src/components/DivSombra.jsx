import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";

const DivSombra = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    // Llama a controls.start() dentro de useEffect después de que el componente se haya montado.
    controls.start(inView ? "visible" : "hidden");
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      exit="hidden"
      variants={variants}
      transition={{ duration: 1 }}
      style={{
        width: "200px",
        height: "200px",
        backgroundColor: "blue",
        margin: "20px",
      }}
    >
      {/* Contenido del div animado */}
    </motion.div>
  );
};

export default DivSombra;
