
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
        const fesperanza_vida=parseInt(document.getElementById("esperanza_vida").value);
        const fpeso_promedio=parseFloat(document.getElementById("peso_promedio").value);
        const ffuente=parseInt(document.getElementById("fuente").value);

        //crear un json con esos datos con una estructura de cuatro variables correspondientes a las tomadas del formulario
        const datos={
            nombre:fnombre,
            clasificacion:fclasificacion,
            esperanza_vida:fesperanza_vida,
            peso_promedio:fpeso_promedio,
            fuente:ffuente
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

    // 1. conectarnos a la ruta /listar_especies que nos devuelve el json con los datos 
    //2. recorer el json 
    //2.1 agregar una fila en la tabla por cada objeto retornado en el json


    async listarEspecies(){
        //1. 
        //TO DO :la API no deberia estar sin protección
        let especies= await fetch("http://localhost:3000/listar_especies" );
        especies = await especies.json();

        const miTabla=document.getElementById("tabla_especies");

        //2.
        especies.forEach(
            (especie)=> {
                //2.1
                const fila= miTabla.insertRow();
                fila.insertCell().innerText= especie.id_especie;    
                fila.insertCell().innerText= especie.nombre;
                fila.insertCell().innerText= especie.clasificacion;
                fila.insertCell().innerText= especie.esperanza_vida;
                fila.insertCell().innerText= especie.peso_promedio;
                fila.insertCell().innerText= especie.fuente;                  
        
            }
        );
    }


}
// convertir esta clase en un modelo 
export default EspecieAPI;  //para que pueda ser usadon en otros archivos de mi programa 