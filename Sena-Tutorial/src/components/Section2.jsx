import { useState, useEffect} from "react";
import "../App.css";
import { Popover } from "react-tiny-popover";
import Draggable from "react-draggable";
 

const Section2 = ({ itemFoticos }) => {
  const [lista, setLista] = useState(true);
  const [lista1, setLista1] = useState(true);
  const [lista2, setLista2] = useState(true);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [isPopoverOpenDos, setIsPopoverOpenDos] = useState(false);
  const [isMobile,setIsMobile] = useState(null)
  // Esta constante es para realizar ciertos efectos en pantalla dependiendo del dispositivo

 
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
  console.log( isMobile)


  const toggleLista = (seteo) => {
    seteo((prev) => !prev);
  };

  return (
    <div className="contenedor-seccion-intro md:grid block md:grid-cols-2 p-2 m-4  h-auto">
      <div className=" md:m-5 p-5  text-white">
        <img
          className=  "w-full h-96 object-cover" 
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
                onClick={() => toggleLista(setLista)}
                className="bg-white w-full m-2   hover:bg-gray-400 transition-all delay-150 text-gray-800 font-semibold py-2 px-4 border border-gray-400  rounded shadow"
              >
                paso 1
              </button>
              <div className={`text-xl ${lista ? "hidden" : "block"} w-full m-2 bg-slate-500 p-2`} >
                <p  >
                  El primer paso es fundamental, y es escoger el diseño ya que
                  como todo buen comienzo de un proyecto grande es necesario
                  contar con un plan, una guia que traze el camino para la correcta
                  elaboracion en este caso del tatuaje.
                </p>
                {/*/////////////////////////// inicio modal con video iframe /////////////////////////// */}

                <Popover
                  isOpen={isPopoverOpen}
                  positions={[  "top"]} // if you'd like, you can limit the positions
                  padding={10} // adjust padding here!
                  // transform={{ top: 0, left: 0 }}
                  reposition={false} // prevents automatic readjustment of content position that keeps your popover content within its parent's bounds
                  onClickOutside={() => setIsPopoverOpen(false)} // handle click events outside of the popover/target here!
                  content={(
                    { position, nudgedLeft, nudgedTop } // you can also provide a render function that injects some useful stuff!
                  ) => (
                    <Draggable>
                      <div className="text-white flex flex-col text-xl  justify-between w-auto h-autorounded-lg p-7 bg-stone-500">
                        <p className="p-3">
                          Mira este video donde se eplica como colocar un stencil!!!:
                          
                          <br />  
                        </p>
                      
                        <iframe
                          width="676"
                          // height="383"
                          // width={}
                          height="383"
                          src="https://www.youtube.com/embed/WH14jNeUi80"
                          title="🔥8. ASI SE HACE UN TRANSFER para tatuar - A mano- Aprendiendo a tatuar - tattoo - tutorial"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowfullscreen
                        ></iframe>
                          <p className="text-sm">
                          Puedes arrastrar este elemento
                        </p>
                        {/* boton cerrar popover aunque la libreria permite cerrar tambien al dar click fuera */}
                          <div className="w-full pt-5 flex justify-center">
                          <button
                          onClick={() => setIsPopoverOpen(false)}
                          className="bg-indigo-700 md:text-xl rounded-md  hover:bg-indigo-600 md:w-32 h-auto  p-2"
                        >
                          cerrar
                        </button>
                          </div>
                    
                      </div>
                    </Draggable>
                  )}
                >
                  <button
                    className="bg-blue-600  transition-all  hover:scale-105  hover:bg-indigo-400 rounded-md w-1/3 h-5/6"
                    onClick={() => setIsPopoverOpen(!isPopoverOpen)}
                  >
                    Mira este video practico!!
                  </button>
                </Popover>
                {/* fin del modal iframe */}
              </div>
            </li>


            {/* inicio del segundo elemento de la lista */}
            <li  >
              <button
                value={lista1}
                onClick={() => toggleLista(setLista1)}
                className="bg-white w-full m-2 hover:bg-gray-400 transition-all delay-150 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
              >
                paso 2
              </button>
              {/* inicio del segundo modal */}
             <Draggable>
              <div   className={`text-2xl ${lista1 ? "hidden" : "block"} w-full m-2 transition ease-in-out delay-150 hover:scale-105 h-auto rounded-lg p-3 bg-slate-500`} >
          
              <p className={`text-xl ${lista1 ? "hidden" : "block"}`}>
                Una vez colocado el stencil y <br />teniendo a tu cliente en una posicion comoda es hora de poner manos a la obra !! <br /> ---LITERAL---
              </p>
              <div className="iframe-dos w-full  flex justify-center ">
                <iframe
                className=""
                src="https://www.youtube.com/embed/WH14jNeUi80" 
                frameborder="0"
                width= {isMobile ? "200" : "470"}
                height= {isMobile ? "200" : "250"}>    
                allowfullscreen 

                </iframe>
                
              </div>
              {/* popover dos */}
              
              </div>    
              </Draggable>
            

                 
             
            </li>
            <li>
            <button
                value={lista2}
                onClick={() => toggleLista(setLista2)}
                className="bg-white w-full m-2 hover:bg-gray-400 transition-all delay-150 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
              >
                paso 3
              </button>

            </li>
          
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Section2;
