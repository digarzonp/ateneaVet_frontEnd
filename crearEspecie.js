//crear un objeto de la clase miESpecie de especie.API
//Llamar al metodo guardarespecie cuando alguien haga click en el boton 

import EspecieAPI from "./EspecieAPI";


const miEspecie=new EspecieAPI();

const miBoton=document.getElementById("btnProcesar");

miBoton.addEventListener('click',
async (event)=>{

    event.preventDefault();
    miBoton.disable=true;
    await miEspecie.guardarEspecie();
}
);