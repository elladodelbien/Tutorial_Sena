import React, { useState } from "react";
import InformacionSection from "../components/InformacionSection";
import { Popover } from "react-tiny-popover";
import Draggable from 'react-draggable';
 
const Informacion = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(true);

  return (
    <>
      <InformacionSection />
      <Popover
        isOpen={isPopoverOpen}
        positions={["top", "left"]} // if you'd like, you can limit the positions
        padding={10} // adjust padding here!
        transform={{ top: 100, left: 400 }}
        reposition={false} // prevents automatic readjustment of content position that keeps your popover content within its parent's bounds
        onClickOutside={() => setIsPopoverOpen(false)} // handle click events outside of the popover/target here!
        content={(
          { position, nudgedLeft, nudgedTop } // you can also provide a render function that injects some useful stuff!
        ) => (
          <Draggable>
          <div className="text-white flex flex-col justify-between w-auto h-autorounded-lg p-5 bg-stone-600">
            <div>
              Hi! I'm popover content. Here's my current position: Lorem ipsum dolor,<br /> sit   
            </div>
            <iframe width="676" height="383" src="https://www.youtube.com/embed/WH14jNeUi80" title="🔥8. ASI SE HACE UN TRANSFER para tatuar - A mano- Aprendiendo a tatuar - tattoo - tutorial" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              
            <button onClick={() => setIsPopoverOpen(false)} className="bg-indigo-800 hover:bg-indigo-600 w-32 h-14  p-5">cerrar</button>
          </div>
          </Draggable>
        )}
      >
        <div className="bg-blue-800 w-60 h-28" onClick={() => setIsPopoverOpen(!isPopoverOpen)}>Click me!</div>
      </Popover>
      ;
    </>
  );
};

export default Informacion;
