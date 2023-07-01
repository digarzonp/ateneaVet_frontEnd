//crear un objeto de la clase miESpecie de especie.API
//Llamar al metodo guardarespecie cuando alguien haga click en el boton 

import EspecieAPI from "./EspecieAPI.js";


const miEspecie=new EspecieAPI();

const miBoton=document.getElementById("btnProcesar");

miBoton.addEventListener('click',
async (event)=>{

    event.preventDefault();
    miBoton.disabled=true;
    await miEspecie.guardarEspecie();
}
);