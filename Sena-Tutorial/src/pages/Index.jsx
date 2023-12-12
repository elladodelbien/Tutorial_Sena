import { useEffect, useState } from "react";
import Section from "../components/Section";
import Section2 from "../components/Section2";
import tatto from "/tatto-001.jpg";
import DivSombra from "../components/DivSombra";
import Footter from "../components/Footter";
import CarrouselTatto from "../components/CarrouselTatto";
import Loader from "../components/Loader";

 

const Index = () => {
  const [titulo, setTitulo] = useState("BIENVENIDO");
  const Nramdom = Math.round(Math.random()*10)
  const [foticos,setFoticos] = useState([])
  const [loading, setLoading] = useState(true);
  const [isMobile,setIsMobile] = useState(null)
  const [isLoading, setIsLoading] = useState(true);
  document.body.style.overflow = 'auto';
  // curl -H "PyL2QUGh9Li2KAE5RkjFSxBfqLB6dXrr1KkIK3qJxnbTtXdOFbInt2ZL"\
  // "https://api.pexels.com/v1/search?query=people"
useEffect(() => {
  ObtenerFotos()
  const verificarAnchoPantalla = () => {
    const anchoPantalla = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    setIsMobile(anchoPantalla < 550);
  };

  // Verificar el ancho de la pantalla al cargar la página
  verificarAnchoPantalla();

  // Agregar un listener para verificar el ancho de la pantalla cuando cambie
  window.addEventListener('resize', verificarAnchoPantalla);

  // Limpiar el listener cuando el componente se desmonta
  return () => {
    window.removeEventListener('resize', verificarAnchoPantalla);
  };
 }, [])

  async function ObtenerFotos() {
    try {
      const respuesta = await fetch(
        "https://api.pexels.com/v1/search?query=tatto&orientation=landscape",
        {
          headers: {
            Authorization:
              "PyL2QUGh9Li2KAE5RkjFSxBfqLB6dXrr1KkIK3qJxnbTtXdOFbInt2ZL",
          },
        }
      );
      if (!respuesta) {
        throw new Error("error en la solicitud");
      }
      const Fotos = await respuesta.json() ;
      const fg = []
      for (let i  = 0; i  < Fotos.photos.length; i ++) {
      fg.push(Fotos.photos[i].src.medium)
        
      }
      setFoticos( fg )
     return setLoading(false)
     
    } catch (error) {
      console.error("Error:", error.message);
    }
  }
 console.log(Nramdom)
  return (
    <>
      <div className="md:w-11/12 w-full   text-center  h-screen">
        <Section titulo={titulo} />
         {/* precargador de la pagina */}

         {loading ? (
        <Loader />
      ) : (
        // Contenido del carrousel

        <div className="mi-carousel m-1 ">
          <CarrouselTatto 
          imagen={foticos   }

          />
        </div>
      )}
   
        <div
          id="contenedor-sombra"
          className="md:m-1  m-1 p-2 block md:flex md:flex-col flex-wrap  justify-center  h-auto rounded-xl "
        >
          <div className="contenedor-seccion-intro   block md:grid  md:grid-cols-2 md:gap-1 md:h-screen h-auto p-4">
            <div className=" md:flex md:items-center   md:flex-col">
              <h1 className="text-5xl font-bold h-32 md:p-5 text-white">
                Como se hace un tatuaje?
              </h1>
              <p className="md:m-5  text-white m-10 text-center lg:text-xl md:text-base text-sm p-1 whitespace-normal">
                En <span className="text-2xl">Cueva Store</span>, nos apasiona
                el arte del tatuaje y vamos a guiarte en el
                emocionante viaje de crear  una obra de
                arte única en la piel. Nuestro objetivo es proporcionar
                información detallada y consejos prácticos para ayudarte a tomar
                decisiones informadas antes, durante y después de tu experiencia
                con el tatuaje.
              </p>
            </div>
            <div className="m-5 img-animate justify-center flex items-center">
              <img width={isMobile ? 290 : 500}  className="p-5" height={100} src={tatto} alt="la imagen de un tatuaje"   />
            </div>
          </div>
        </div>
        <Section2
        itemFoticos={foticos[Nramdom ]} />

        <Footter />
      </div>
    </>
  );
};

export default Index;
