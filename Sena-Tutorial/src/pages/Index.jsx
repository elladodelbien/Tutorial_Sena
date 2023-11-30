import { useState } from "react";
import Section from "../components/Section";
import Section2 from "../components/Section2";

import DivSombra from "../components/DivSombra";
import Footter from "../components/Footter";
import CarrouselTatto from "../components/CarrouselTatto";

const Index = () => {
  const [titulo, setTitulo] = useState("BIENVENIDO");
  return (
    <>
      <div className="md:w-11/12    text-center  h-screen">
        <Section titulo={titulo} />

        {/* carrousel */}
        <div className="mi-carousel ">
          <CarrouselTatto />
        </div>

        <div
          id="contenedor-sombra"
          className="md:m-5 m-2 p-8 flex flex-col  justify-center  h-screen rounded-xl bg-slate-400"
        >
          <div className="contenedor-seccion-intro p-4">
            <div>
              <h1 className="text-5xl font-bold  text-white">
                Como se hace un tatuaje?
              </h1>
              <p className="md:m-5 text-white  md:text-xl text-sm p-1">
                En <span className="text-2xl">Cueva Store</span>, nos apasiona
                el arte del tatuaje y estamos aquí para guiarte en el
                emocionante viaje de crear y llevar contigo una obra de arte
                única en tu piel. Nuestro objetivo es proporcionar información
                detallada y consejos prácticos para ayudarte a tomar decisiones
                informadas antes, durante y después de tu experiencia con el
                tatuaje.
              </p>
            </div>
            <div className="m-5">
              <img src="" alt="la imagen de un tatuaje" srcset="" />
            </div>
          </div>
        </div>

        <Footter />
      </div>
    </>
  );
};

export default Index;
