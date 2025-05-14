console.log ("Hola");
//En java script tenemos las funciones tipo flecha
//Utilizaremos fetch que es un metodo para consumir una API

//Paso 1: Funcion flecha
const consumirApi = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
    //Convertimos la respuesta a tipo json
    .then((response) => response.json())
    //Los datos los vamos a mandar a la consola
    .then((data) => console.log(data))
    //Descubrir que hacer en caso de que no me responda Error 404 not found
    .catch((error) => console.log(error));
      };

consumirApi();   
   
//TAREA en ingles hacer todo
//Consumir otra API y mostrar la data en consola como la de arriba