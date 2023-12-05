import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { Outlet, useLocation, Link } from "react-router-dom";
import Footter from "./Footter";

const Layout = () => {
  const location = useLocation();
  const pn = location.pathname;
  console.log(location);

  return (
    // esta es la parte del codigo fija que se usara con navbar en todas las paginas de la web
    // div principal de navegacion
    <div className="md:flex flex-wrap bg-artisttattoTatto  bg-cover h-screen   bg-fixed w-screen  ">
      <div className=" h-auto  first-letter: w-screen ">
        <header
          id=""
          className="z-40 w-screen  text-white   h-14 md:flex md:justify-between items-center p-6"
        >
          <div className=" p-7 text-4xl">
            <p>Logo</p>
          </div>
          <nav className="hidden md:block ">
            <ul className="text-2xl">
              <Link
                to={"/"}
                className={`${pn === "/" ? "text-red-500" : "text-white"}`}
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

        {/* contenedor de cada una de las paginas */}
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
