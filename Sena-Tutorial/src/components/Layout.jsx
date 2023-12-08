import { motion, useScroll } from "framer-motion";
import { useRef, useState,useEffect } from "react";
import { Outlet, useLocation, Link } from "react-router-dom";
import Footter from "./Footter";

const Layout = () => {
  const location = useLocation();
  const [verMenu,setVerMenu] = useState(false)
  const pn = location.pathname;
  const [isMobile,setIsMobile] = useState(null)


  // verificar el dispositivo ancho y alto
  useEffect(() => {
    const verificarAnchoPantalla = () => {
      const anchoPantalla = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
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


  const handleMenu =()=>{
    setVerMenu(!verMenu)
  }
  console.log(location);

  return (
    // esta es la parte del codigo fija que se usara con navbar en todas las paginas de la web
    // div principal de navegacion
    <div className={ `md:flex flex-wrap ${pn == "/informacion"  ? "bg-galaxy " : "bg-artisttattoTatto" }    bg-cover h-screen   bg-fixed w-screen`}>
      <div className=" h-auto  first-letter: w-screen ">
        <header
          id=""
          className="z-40 w-screen  text-white    h-14 md:flex md:justify-between items-center p-1 md:p-6"
        >
          <div className=" md:p-7 text-2xl">
            <p className="md:block hidden">Logo</p>
            <button onClick={handleMenu} className="md:hidden bg-menu bg-cover w-10 h-10 m-2 block">menu</button>
             
          </div>
          <nav className="translate-x-0    md:block ">
            {/* <ul className="md:text-2xl text-xl md:block md:relative absolute   bg-slate-500  "> */}
            <ul className={`md:text-2xl text-xl md:block ${isMobile && !verMenu ? "Ocultarmenu" : ""}     md:relative absolute  ${verMenu ? "flex  menu   flex-col" : "  flex  flex-col  "}  bg-slate-500  `}>
              <Link
                to={"/"} 
                className={`${pn === "/" ? "text-amber-200" : "text-white"} m-5`}
              >
                Home
              </Link>
              <Link to={"informacion"} className="m-5  ">
                Información
              </Link>
              <Link className="m-5">Contacto</Link>
            </ul>
          </nav>
        </header>

        {/* contenedor de cada una de las páginas */}
        <div className="flex-grow  flex flex-col justify-between">
          <main className="flex-grow  w-full md:flex flex-wrap justify-center m-1  ">
            <Outlet />
          </main>
        
        </div>
      </div>
    </div>
  );
};

export default Layout;