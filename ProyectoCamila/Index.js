// Web de juegos
// Funciones de posible uso en el proyecto final

let i = 0;
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

   nombre = document.getElementById("nombreRegistro").value;
   usuario = document.getElementById("usuarioRegistro").value;
   mail = document.getElementById("emailRegistro").value;
   contraseña = document.getElementById("contraseñaRegistro").value;

   console.log(nombre);
   console.log(usuario);
   console.log(mail);
   console.log(contraseña);


   arrayJugadores.push(new Jugador (i, nombre, usuario, mail, contraseña, 0));
   console.log(arrayJugadores[i]);

   i++;
   console.log(i);

}

//Validacion e inicio
function inicio (){

         
         i++;
       
         //Indicamos que cada jugador cargado es un elemento en un array
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
      
}


function listarPuntajes() {
   
   let contenedor = document.getElementById("section_puntos").innerHTML;
   let arrayPuntajes = arrayJugadores;
   
   
   console.log(`array jugadores ${arrayJugadores[0].nombre} ${arrayJugadores[0].nombre} >>> ${arrayJugadores[1].nombre}`);
   
   arrayPuntajes.sort();

   console.log(`array Puntajes ${arrayPuntajes[0]} >>> ${arrayPuntajes[1]}`);

   for (const jugador of arrayJugadores) {
      let divInfoJugador = document.createElement("div");

      divInfoJugador.innerHTML = `
      <h2>${(jugador.apodo)} ........ ${jugador.puntos}</h2>`;
   

   }

}

function abrirRegistro(){
   document.getElementById("form_registro").style.display="block";
}


function cerrarRegistro(){
   document.getElementById("form_registro").style.display="none";
}

function random(min, max) {
   return Math.floor((Math.random() * (max - min + 1)) + min);
}


// ARRANCA CONEXION CON HTML>>>>

btnOk = document.getElementById("btn_ok");
btnOk.addEventListener("click", ()=> {
   registroJugador();  
   listarPuntajes();
});

function mayorMenor() {

document.getElementById("numeroRandom").value = `numRandom>>> ${numRandom}`;

let numRandom = random(1,10);
let puntosMayorMenor = 0;
let numeroGanador = random(1,10);

 console.log(`numRandom ${numRandom}`);
 console.log(`numganador ${numeroGanador}`);
 console.log(`puntos ${puntosMayorMenor}`);

btnMayor = document.getElementById("mayor");
btnMayor.addEventListener("click", ()=> {
   if (numRandom > numeroGanador){
      puntos++;
   }
   numRandom = random(1,10);
});

btnMenor = document.getElementById("menor");
btnMenor.addEventListener("click", ()=> {
   if (numRandom < numeroGanador){
      puntos++;
   }
   numRandom = random(1,10);
});

}

mayorMenor();
//inicio();
// listarPuntajes();
