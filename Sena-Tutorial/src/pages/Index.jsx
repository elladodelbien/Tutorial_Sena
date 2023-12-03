import { useState } from "react";
import Section from "../components/Section";
import Section2 from "../components/Section2";
import tatto from "/tatto-001.jpg";
import DivSombra from "../components/DivSombra";
import Footter from "../components/Footter";
import CarrouselTatto from "../components/CarrouselTatto";

const Index = () => {
  const [titulo, setTitulo] = useState("BIENVENIDO");
  const [foticos,setFoticos] = useState([])
  // curl -H "PyL2QUGh9Li2KAE5RkjFSxBfqLB6dXrr1KkIK3qJxnbTtXdOFbInt2ZL"\
  // "https://api.pexels.com/v1/search?query=people"

  async function ObtenerFotos() {
    try {
      const respuesta = await fetch(
        "https://api.pexels.com/v1/search?query=people",
        {
          headers: {
            Authorization:
              " PyL2QUGh9Li2KAE5RkjFSxBfqLB6dXrr1KkIK3qJxnbTtXdOFbInt2ZL",
          },
        }
      );
      if (!respuesta) {
        throw new Error("error en la solicitud");
      }
      const Fotos = await respuesta.json() ;
      
      return  setFoticos(Fotos.photos)
    } catch (error) {
      console.error("Error:", error.message);
    }
  }
  ObtenerFotos()
 
 
  return (
    <>
      <div className="md:w-11/12 w-full   text-center  h-screen">
        <Section titulo={titulo} />

        {/* carrousel */}
        <div className="mi-carousel ">
          <CarrouselTatto />
        </div>

        <div
          id="contenedor-sombra"
          className="md:m-3 m-2 p-8 block md:flex md:flex-col flex-wrap  justify-center  h-screen rounded-xl "
        >
          <div className="contenedor-seccion-intro block md:grid  md:grid-cols-2 md:gap-1 h-screen p-4">
            <div className=" ">
              <h1 className="text-5xl font-bold  text-white">
                Como se hace un tatuaje?
              </h1>
              <p className="md:m-5 text-p text-white text-center lg:text-xl md:text-base text-sm p-1 whitespace-normal">
                En <span className="text-2xl">Cueva Store</span>, nos apasiona
                el arte del tatuaje y estamos aquí para guiarte en el
                emocionante viaje de crear y llevar contigo o crear una obra de
                arte única en tu piel. Nuestro objetivo es proporcionar
                información detallada y consejos prácticos para ayudarte a tomar
                decisiones informadas antes, durante y después de tu experiencia
                con el tatuaje.
              </p>
            </div>
            <div className="m-5 img-animate  flex items-center">
              <img src={tatto} alt="la imagen de un tatuaje"   />
            </div>
          </div>
        </div>
        <Section2 />

        <Footter />
      </div>
    </>
  );
};

export default Index;
