// Web de juegos
// Funciones de posible uso en el proyecto final

let i = 0;
let id;
let nombre;
let usuario;
let mail;
let contraseña;
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

let puntosMayorMenor;
function abrirMayorMenor(){
   document.getElementById("juego_mayorMenor").style.display="block";
   puntosMayorMenor = 0;
}

function cerrarMayorMenor(){
   document.getElementById("juego_mayorMenor").style.display="none";
}



let h1NumeroRandom = document.getElementById("numeroRandom");
let numeroRandom = random(1,10);
h1NumeroRandom.innerHTML = numeroRandom;
let numeroComparado = random(1,10);
console.log(`Num random es ${numeroRandom}`);
console.log(`Nuevo num comparado es ${numeroComparado}`);
if (numeroComparado == numeroRandom){
   numeroComparado = random(1,10);
}
console.log(`Los puntos hasta el momento son ${puntosMayorMenor}`);

// BTN MENOR
btnMenor = document.getElementById("menor");
btnMenor.addEventListener("click", ()=> {
   if (numeroComparado < numeroRandom){
      //suma puntos
      puntosMayorMenor++;
      console.log(`Nuevo puntaje es ${puntosMayorMenor}`);

      //cambia el numero que se muestra por el adivinado
      numeroRandom = numeroComparado;
      h1NumeroRandom.innerHTML = numeroComparado;
      console.log(`Nuevo num random mostrado es ${numeroRandom}`);


      //se genera un nuevo numero para comparar
      numeroComparado = random(1,10);
      console.log(`Nuevo num comparado es ${numeroComparado}`);

   }
   else{
      alert(`FIN DEL JUEGO. Puntaje obtenido ${puntosMayorMenor}`);
      cerrarMayorMenor();
      }
});

btnMayor = document.getElementById("mayor");
btnMayor.addEventListener("click", ()=> {
   if (numeroComparado > numeroRandom){
      //suma puntos
      puntosMayorMenor++;
      console.log(`Nuevo puntaje es ${puntosMayorMenor}`);

      //cambia el numero que se muestra por el adivinado
      numeroRandom = numeroComparado;
      h1NumeroRandom.innerHTML = numeroComparado;
      console.log(`Nuevo num random mostrado es ${numeroRandom}`);


      //se genera un nuevo numero para comparar
      numeroComparado = random(1,10);
      console.log(`Nuevo num comparado es ${numeroComparado}`);

   }
   else{
      alert(`FIN DEL JUEGO. Puntaje obtenido ${puntosMayorMenor}`);
      cerrarMayorMenor();
      }
});

function abrirInicio(){
   document.getElementById("form_inicio").style.display="block";
}


function cerrarInicio(){
   document.getElementById("form_inicio").style.display="none";
}


