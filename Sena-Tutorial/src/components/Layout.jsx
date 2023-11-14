import { Outlet, useLocation, Link } from "react-router-dom";

const Layout = () => {
  return (
    // esta es la parte del codigo fija que se usara con navbar en todas las paginas de la web
    // div principal de navegacion
    <div className="md:flex flex-wrap w-screen bg-slate-500 h-screen md:h-12">
      <nav className="w-screen hidden h-14 md:flex justify-between items-center p-6 text-white bg-blue-900">
        <div>
          <p>Logo</p>
        </div>
        <ul>
          <Link className="m-5">Home</Link>
          <Link className="m-5">Acerca de</Link>
          <Link className="m-5">Contacto</Link>
        </ul>
      </nav>

      {/* contenedor de cada una de las paginas */}
      <main className="overflow-scroll  h-screen w-full md:flex flex-wrap justify-center  bg-gray-400  ">
     
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
