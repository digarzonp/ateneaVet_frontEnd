
//1. obtener los datos del formulario 
//2 conectarnos a la ruta de la API
//3. MOstrar los mensajes correspondientes 
//4. exportar la clase

class EspecieAPI{
    
    //Metódo guardarespecie()
    
    async guardarEspecie(){

        //paso 1: obtener los datos del formulario 
        //TO DO:validar datos
        const fnombre=document.getElementById("nombre").value;
        const fclasificacion=document.getElementById("clasificacion").value;
        const fesperanza_vida=document.getElementById("espernza_vida").value;
        const fpeso_promedio=document.getElementById("peso_promedio").value;

        //crear un json con esos datos con una estructura de cuatro variables correspondientes a las tomadas del formulario
        const datos={
            nombre:fnombre,
            clasificacion:fclasificacion,
            esperanza_vida:fesperanza_vida,
            peso_promedio:fpeso_promedio
        };

        //TO DO:Falta gestionar errores  

        //paso 2: conectarnos a la ruta de la API , utilizando la funcion fech con dos argumentos, la ruta a la que me quiero conectar, un objeto json 
        //diferentes parametros de la funcion

        await fetch(
            "http://localhost:3000/crear_especie",
            {
                method: "POST", 
                body:JSON.stringify(datos),  //CONVERTIR NUESTRO OBJETO JSON EN UNA CADENA
                headers:{
                    "Content-Type":"application/json"
                }                        //encabezados que nos diran las caracteristicad de la peticion
            }

        );

        console.log("El registro se insertó correctamente")


    }


}
// convertir esta clase en un modelo 
export default EspecieAPI;  //para que pueda ser usadon en otros archivos de mi programa 