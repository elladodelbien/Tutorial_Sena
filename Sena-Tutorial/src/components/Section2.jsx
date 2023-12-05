import { useState } from "react";
import "../App.css";

const Section2 = ({ itemFoticos }) => {
  const [lista, setLista] = useState(false);
  const [lista1, setLista1] = useState(false);

 const  toggleLista = (seteo) => {
  seteo((prev)=> !prev) }
     
    
      
 
    
   

  return (
    <div className="contenedor-seccion-intro md:grid block md:grid-cols-2 p-9 m-10 h-auto">
      <div className="   text-white">
        <img
          className="w-100h-96"
          src={itemFoticos}
          alt="La imagen obtenida en pexels"
        />
      </div>
      <div className="text-white m-4  text-4xl">
        <h2>El stencil</h2>
        <div className="stepBystepStencil  ">
          <ul className="text-white">
            <li>
              <button
                value={lista}
                onClick={()=> toggleLista(setLista)}
                className="bg-white w-full m-2 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
              >
                paso 1
              </button>
              <p className={`text-2xl ${lista ? "hidden" : "block"}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto, exercitationem dicta. Odio pariatur aliquam nemo
              </p>
            </li>
            <li>
              <button
                value={lista1}
                onClick={()=> toggleLista(setLista1)}
                className="bg-white w-full m-2 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
              >
                paso 2
              </button>
              <p className={`text-2xl ${lista1 ? "hidden" : "block"}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto, exercitationem dicta. Odio pariatur aliquam nemo
              </p>
            </li>
            <li>paso 2</li>
            <li>paso 3</li>
            <li>paso 4</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Section2;
