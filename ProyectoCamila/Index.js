
// Web de juegos
// Funciones de posible uso en el proyecto final

let nombre;
let apodo;
let mail;
let edad;
let puntosJugador;

//Registro de datos de jugador
function registroJugador() {
nombre = prompt("Nombre:");
apodo = prompt ("Como quisiera ser llamadx?");
mail = prompt("Mail");
edad = parseInt(prompt ("Edad"));
alert (`Bienvenidx ${apodo}! Su registro se ha completado con exito!`);
}

//cargar puntos ganados
function sumarPuntos(puntajeJugador, puntosGanados){
   puntajeJugador = parseInt(puntajeJugador); //En un futuro la validacion viene ya de los puntos enviados
   puntosGanados = parseInt (puntosGanados);
   let nuevoPuntaje = puntajeJugador + puntosGanados;
   return nuevoPuntaje;
}

//Validacion e inicio 
function inicio (){

   cantJugadores = parseInt(prompt ("Bienvenidx! Cuantxs jugadorxs participaran del torneo?"));
   if (cantJugadores > 0){
         for (let jugadores = 0; jugadores < cantJugadores; jugadores++) {
         alert (`Jugador ${jugadores+1}, ingrese sus datos`);
         registroJugador();
         } 
         alert (`Se ingresaron lxs ${cantJugadores} jugadorxs! QUE COMIENCE EL JUEGO!`); 

   } else{
      alert ("Debe ingresar al menos un jugador!");
      inicio();
   }
}

//inicio();

// Cuando finaliza una partida, cada jugador suma sus puntos (se va hacer de manera automatica en un futuro)
let puntosGanados = prompt("Cuantos puntos sumo en la partida?");
//imaginando que ya tenia 30 puntos ganados previamente
puntosJugador = sumarPuntos (30, puntosGanados);
parseInt(puntosJugador);
alert (`Su puntaje actual es: ${puntosJugador}`);
   

