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
        <CarrouselTatto />
        
        <div id="contenedor-sombra" className="md:m-5 m-2 p-8 flex flex-col  justify-center  h-screen rounded-xl bg-slate-400">
          <p className="md:m-5 text-white  md:text-xl text-sm p-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            beatae excepturi illum aspernaturillum vel temporibus eius beatae odio debitis
            reprehenderit ut fuga nemo omnis laboriosam animi adipisci quae
            libero tempora veritatis inventore voluptates, quis voluptatum
            quisquam aut. Ab, voluptates! Autem error in sequi reprehenderit
            suscipit nemo nihil amet quod, iste veritatis facilis vel. Atque
            consectetur mollitia laborum, expedita aut ea fuga neque iusto quod
            laboriosam sunt non maxime commodi? Sit iste odio molestias
            repudiandae dicta vero mollitia porro accusantium cumque temporibus
            ipsum facere repellendus, impedit ut sunt dolorum nobis! Reiciendis
            quos laudantium, alias id corrupti tempora nulla modi animi.
          </p>
          <p className="m-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic officiis dolorum modi dolorem fuga architecto cupiditate earum praesentium voluptates iste, laudantium ad explicabo nisi reiciendis. Facilis sint corporis delectus dolorem?
            Debitis similique cupiditate molestiae suscipit qui cum, perferendis rerum odit? Beatae, amet dolores. Sit suscipit porro nobis dolor, assumenda vitae reprehenderit unde ducimus possimus ut? Tenetur iste laborum earum quaerat.
          </p>
        </div>

    

        <Footter />
      </div>
     
    </>
  );
};

export default Index;
