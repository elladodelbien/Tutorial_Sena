import { useState } from "react";

const InformacionSection = () => {
  const [fondo, setFondo] = useState( "bg-parallaxTres");
  // const Cafo = () => {

  //   return setFondo("parallaxDos")
    
  // };

  return (
    <>
      <div
        className={`${fondo} TemaTres bg-cover w-56 h-72`}
      ></div>
      {/* contenedor de los botones */}
      <div className="flex flex-col " >
        <input
          value="Cambiar Tema Uno"
          className="bg-indigo-500 m-5 w-32 h-10 p-2 rounded-lg"
          type="submit"
          onClick={()=> setFondo("bg-parallaxDos")}
        />
        <input
          value="Cambiar Tema DOS"
          className="bg-indigo-500 m-5 w-40 h-10 p-2 rounded-lg"
          type="submit"
          onClick={()=> setFondo("bg-parallax")}
        />
        <input
          value="Cambiar Tema Tres"
          className=  " bg-indigo-500  transition-opacity m-5 w-40 h-10 p-2 rounded-lg"
          type="submit"

        />
      </div>
    </>
  );
};

export default InformacionSection;
