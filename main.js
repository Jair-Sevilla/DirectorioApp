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
      const contenedor = document.getElementById("contenedor");

      //nombre.innerText = data[0].name; //name no existe proviene desde la API
      //innerHTML inserta html directo/ innerText es texto normal
      //street.innerHTML= `<h1>${data[0].address.street}</h1>`

      //Aqui vamos a facilitarnos la vida con forEach
      //forEach es un metodo de arreglos que ejecuta una funcion por cada elemento que esta en el arreglo
      data.forEach((usuario, index)=>
        //+= es como añadir 
  //-------------------------------Grid cards-----------------------------------------------------------------------------------------
        contenedor.innerHTML+=`
        <div class="card" style="width: 25rem;">
  <img src="https://cdn-icons-png.flaticon.com/512/7816/7816916.png" class="card-img-top" alt="usuario">
  <div class="card-body">
      <p class="card-text"><b>Informacion de: </b></p>
    <h3 class="card-title">${usuario.name}</h3>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"><b>Nombre de Usuario: </b>${usuario.username}</li>
    <li class="list-group-item"><b>Correo Electronico: </b>${usuario.email}</li>
    <li class="list-group-item"><b>Telefono: </b>${usuario.phone}</li>
    <li class="list-group-item"><b>Sitio Web: </b>${usuario.website}</li>
    <li class="list-group-item">
  <b>Direccion : </b><br>
  <b>Calle: </b>${usuario.address.street}<br>
  <b>Suite: </b>${usuario.address.suite}<br>
  <b>Ciudad: </b>${usuario.address.city}<br>
  <b>Codigo Postal: </b>${usuario.address.zipcode}
</li>
  </ul>
</div>
        `);
  //-------------------------------Grid cards-----------------------------------------------------------------------------------------
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