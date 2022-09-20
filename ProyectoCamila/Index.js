// Web de juegos
// Funciones de posible uso en el proyecto final

let id;
let nombre;
let usuario;
let mail;
let contraseña;
let puntos;
const arrayJugadores = [];


function sumarPuntos(puntajeJugador, puntosGanados) {
   let nuevoPuntaje = puntajeJugador + puntosGanados;
   return nuevoPuntaje;
}

// constructor de Jugadores
class Jugador{
   constructor (id, nombre, usuario, mail, contraseña, puntos){
       this.id = id;
       this.nombre = nombre;
       this.usuario = usuario;
       this.mail = mail;
       this.contraseña = contraseña;
       this.puntos = puntos;
   }
}

//Registro de datos de jugador
function registroJugador() {
   let numArray;
   nombre = document.getElementById("nombreRegistro");
   usuario = document.getElementById("usuarioRegistro");
   mail = document.getElementById("mailRegistro");
   edad = document.getElementById("contraseñaRegistro");
   alert (`Bienvenidx ${apodo}! Su registro se ha completado con exito!`);
   
   console.log(nombre);
   console.log(apodo);
   console.log(edad);
   console.log(mail);
}

//Validacion e inicio
function inicio (){

   cantJugadores = parseInt(prompt ("Bienvenidx! Cuantxs jugadorxs participaran del torneo?"));
   if (cantJugadores > 0){
         for (let i = 0; i < cantJugadores; i++) {
         alert (`Jugador ${i+1}, ingrese sus datos`);
         registroJugador();
       
         //Indicamos que cada jugador cargado es un elemento en un array
         arrayJugadores.push(new Jugador (i, nombre, apodo, mail, edad, 0));
         console.log(arrayJugadores[i]);

         for (const jugador of arrayJugadores){
            if (jugador.id == i) {
               let puntajeJugador = parseInt(arrayJugadores[i].puntos);
               let puntosGanados = parseInt(prompt ("Ingese el puntaje obtenido"));
               arrayJugadores[i].puntos = sumarPuntos(puntajeJugador, puntosGanados);
               alert(`Su nuevo puntaje es ${arrayJugadores[i].puntos}`);
               console.log(arrayJugadores[i].puntos);
               //console.log (`este es el for const; ${jugador} =  en el casillero del array: ${i}`);
              // console.log(`El nombre del jugador ${i} es ${arrayJugadores[i].nombre}`);
            }
         }//fin for recorriendo array
      }//fin for de validacion
   } else{
      alert ("Debe ingresar al menos un jugador!");
      inicio();
   }
}


function listarPuntajes() {
   
   let contenedor = document.getElementById("contenedor");

   for (const jugador of arrayJugadores) {
      let divInfoJugador = document.createElement("div");

      divInfoJugador.innerHTML = `
      <h2>${(jugador.apodo)} ........ ${jugador.puntos}</h2>`;

      console.log(divInfoJugador.innerHTML);
      console.log(divInfoJugador);

      contenedor.append(divInfoJugador);

   }

}

function abrirRegistro(){
   document.getElementById("form_registro").style.display="block";
}


function cerrarRegistro(){
   document.getElementById("form_registro").style.display="none";
}

// ARRANCA CONEXION CON HTML>>>>



// inicio();
listarPuntajes();
