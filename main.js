console.log ("Hola");
//En java script tenemos las funciones tipo flecha
//Utilizaremos fetch que es un metodo para consumir una API

//Paso 1: Funcion flecha
const consumirApi = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
    //Convertimos la respuesta a tipo json
    .then((response) => response.json())
    //Los datos los vamos a mandar a la consola
    .then((data) => {
      //La data de la API la vamos a llevar al html
      //Paso 1.- Definimos las constantes que vamos a usar y el html que vamos a afectar
      const nombre = document.getElementById("nombre");
      const nombreUsuario = document.getElementById("nombreUsuario");
      const email = document.getElementById("email");
      const phone = document.getElementById("phone");
      const street = document.getElementById("street");
      const contenedor = document.getElementById("contenedor");

      nombre.innerText = data[0].name; //name no existe proviene desde la API
      nombreUsuario.innerText = data[0].username;
      email.innerText = data[0].email;
      phone.innerText = data[0].phone;
      website.innerText = data[0].website; 
      //street.innerText = data [0].address.street;
      //innerHTML inserta html directo/ innerText es texto normal
      street.innerHTML= `<h1>${data[0].address.street}</h1>`

      //Aqui vamos a facilitarnos la vida con forEach
      //forEach es un metodo de arreglos que ejecuta una funcion por cada elemento que esta en el arreglo
      data.forEach((usuario, index)=>
        //+= es como añadir 
        contenedor.innerHTML+=`
        <p>${usuario.name}</p>
        <p>${usuario.username}</p>
        <p>${usuario.email}</p>
        <p>${usuario.phone}</p>
        <p>${usuario.website}</p>
        <p>${usuario.address.street}</p>
        <hr>
    
        `);
         //<p> es parrafo
        //<hr> es un salto de renglon
    })

    //Descubrir que hacer en caso de que no me responda Error 404 not found
    .catch((error) => console.log(error));

    //El DOM (Document Object Model/ Documento Modelo de Objeto)

    //Semana 2: Apartir de esta sesion, vamos a identificar a los elementos del HTML con un "id"

    //Creo una constante y le paso como valor el id del h1 que esta en mi html 
    //con getElementById
    const titulo = document.getElementById("tituloEncabezado");

    //Imprimo la variable titulo pero con el atributo textContent
    console.log(titulo.textContent)

      };

//Objetos= Propiedad: Valor
//--------------------------------------------------------------------------------------------//
 //API 2:
 const segundaAPI = () => { 
  //Enlace de la API -- API Link
  fetch("https://jsonplaceholder.typicode.com/posts")  
  //Convertimos la respuesta a tipo json -- We convert the response to json type
  .then((response) => response.json())
  //Los datos los vamos a mandar a la consola -- We are going to send the data to the console
  .then((data) => console.log(data))
  //Descubrir que hacer en caso de que no me responda -- Find out what to do if he doesn't answer me -- Error 404 not found
  .catch((error) => console.log(error));
};
//--------------------------------------------------------------------------------------------//

consumirApi();  

//segundaAPI(); 