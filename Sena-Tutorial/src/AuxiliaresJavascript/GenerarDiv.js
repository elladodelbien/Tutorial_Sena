import React, { useState } from "react";

 

export function generarDivsAleatorios(cantidad) {
    // for (let i = 0; i < cantidad; i++) {
    //   // Crea un nuevo div
    //   const nuevoDiv = document.createElement('div');

    //   // Asigna una clase para aplicar estilos (opcional)
    //   nuevoDiv.className = 'random-div';

    //   // Genera posiciones aleatorias en el rango de 0 a 90vw para left y 0 a 90vh para top
    //   const left = Math.random() * 95 + 'vw';
    //   const top = Math.random() * 90 + 'vh';

    //   // Aplica posición aleatoria
    //   nuevoDiv.style.left = left;
    //   nuevoDiv.style.top = top;

    //   // Agrega el nuevo div al cuerpo del documento
    //   document.body.appendChild(nuevoDiv);
    // }



    // .container
    // - for (i = 1; i <= 50; i++)
    // .circle-container
    //   .circle
    const containerInformation = document.getElementById("container-information")

    for (let i = 1; i <= cantidad; i++) {
        const nuevoDiv = document.createElement('div');
        const HijoDiv = document.createElement('div');

        nuevoDiv.classList.add('circle-container');
        HijoDiv.classList.add('circle');

        containerInformation.appendChild(nuevoDiv)
        nuevoDiv.appendChild(HijoDiv)

    }
    document.body.style.overflowY = 'hidden';
    document.body.style.overflowX = 'hidden';
}

 