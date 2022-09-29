// Web de juegos
// Funciones de posible uso en el proyecto final

let i = 0;
let id;
let nombre;
let usuario;
let mail;
let contraseña;
const arrayJugadores = [];
let idUsuario;


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
// function inicio (){

         
//          i++;
       
//          //Indicamos que cada jugador cargado es un elemento en un array
//          console.log(arrayJugadores[i]);

//          for (const jugador of arrayJugadores){
//             if (jugador.id == i) {
//                let puntajeJugador = parseInt(arrayJugadores[i].puntos);
//                let puntosGanados = parseInt(prompt ("Ingese el puntaje obtenido"));
//                arrayJugadores[i].puntos = sumarPuntos(puntajeJugador, puntosGanados);
//                alert(`Su nuevo puntaje es ${arrayJugadores[i].puntos}`);
//                console.log(arrayJugadores[i].puntos);
//                //console.log (`este es el for const; ${jugador} =  en el casillero del array: ${i}`);
//               // console.log(`El nombre del jugador ${i} es ${arrayJugadores[i].nombre}`);
//             }
//          }//fin for recorriendo array
      
// }


// function listarPuntajes() {
   
//    let contenedor = document.getElementById("section_puntos").innerHTML;
//    let arrayPuntajes = arrayJugadores;
   
   
//    console.log(`array jugadores ${arrayJugadores[0].nombre} ${arrayJugadores[0].nombre} >>> ${arrayJugadores[1].nombre}`);
   
//    arrayPuntajes.sort();

//    console.log(`array Puntajes ${arrayPuntajes[0]} >>> ${arrayPuntajes[1]}`);

//    for (const jugador of arrayJugadores) {
//       let divInfoJugador = document.createElement("div");

//       divInfoJugador.innerHTML = `
//       <h2>${(jugador.apodo)} ........ ${jugador.puntos}</h2>`;
   

//    }

// }

function abrirRegistro(){
   document.getElementById("form_registro").style.display="block";


}


function cerrarRegistro(){
   document.getElementById("form_registro").style.display="none";
}

//FUNCIONES BTN INICIO 

function abrirInicio(){
   document.getElementById("form_inicio").style.display="block";
}


function cerrarInicio(){
   document.getElementById("form_inicio").style.display="none";
}

//Validar entrada usuario
function validarInicio(usuarioIngresado, contraseñaIngresada) {
   alert(`ENTRASTE A LA VALIDACION DE INICIO CAM ${usuarioIngresado, contraseñaIngresada}`);

   const usuarioCorrecto = arrayJugadores.filter((e) => e.usuario == usuarioIngresado);
   idUsuario = usuarioCorrecto[0].id;
   console.log(idUsuario);
   console.log(usuarioCorrecto[0].contraseña);

   if (usuarioCorrecto[0].contraseña == contraseñaIngresada) {
      alert(`BIENVENIDX ${usuarioCorrecto[0].nombre}`);
   } else{
      alert(`no entra`);
   }


   // for (const jugador of arrayJugadores){
   //    alert(`jugador del const ${jugador.usuario} y la contrasea: ${jugador.contraseña}`);
   //    alert(`jugador ingresado ${jugador.usuario} y la contrasea: ${jugador.contraseña}`);


   // }//fin for recorriendo array

}

btnEntrar = document.getElementById("btn_entrar");
btnEntrar.addEventListener("click", ()=> {
   let usuarioIngresado = document.getElementById("usuarioInicio").value;
   let contraseñaIngresada = document.getElementById("contraseñaInicio").value;
   console.log(usuarioIngresado, contraseñaIngresada);

   validarInicio(usuarioIngresado, contraseñaIngresada);
   document.getElementById("form_registro").reset();

});



function random(min, max) {
   return Math.floor((Math.random() * (max - min + 1)) + min);
}


// ARRANCA CONEXION CON HTML>>>>

btnOk = document.getElementById("btn_ok");
btnOk.addEventListener("click", ()=> {
   registroJugador();  
   document.getElementById("form_registro").reset();
   listarPuntajes();
});


function alertJugarDeNuevo() {
   Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
}


let mostarPuntos = document.getElementById("puntos");

let puntosMayorMenor;
function abrirMayorMenor(){
   document.getElementById("juego_mayorMenor").style.display="block";
   puntosMayorMenor = 0;
   mostarPuntos.innerHTML = puntosMayorMenor; 
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
      mostarPuntos.innerText = puntosMayorMenor;
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
      alert(`FIN DEL JUEGO. El numero que seguia era ${numeroComparado}. Puntaje obtenido ${puntosMayorMenor}`);
      arrayJugadores[idUsuario].puntos = puntosMayorMenor;
      console.log(arrayJugadores[idUsuario].puntos);
      cerrarMayorMenor();
      }
});

btnMayor = document.getElementById("mayor");
btnMayor.addEventListener("click", ()=> {
   if (numeroComparado > numeroRandom){
      //suma puntos
      puntosMayorMenor++;
      mostarPuntos.innerText = puntosMayorMenor;
      console.log(`Nuevo puntaje es ${puntosMayorMenor}`);

      //cambia el numero que se muestra por el adivinado
      numeroRandom = numeroComparado;
      h1NumeroRandom.innerHTML = numeroComparado;
      console.log(`Nuevo num random mostrado es ${numeroRandom}`);


      //se genera un nuevo numero para comparar
      numeroComparado = random(1,10);
      console.log(`Nuevo num comparado es ${numeroComparado}`);

    } else{
      alert(`FIN DEL JUEGO. El numero que seguia era ${numeroComparado}. Puntaje obtenido ${puntosMayorMenor}`);
      arrayJugadores[idUsuario].puntos = puntosMayorMenor;
      console.log(arrayJugadores[idUsuario].puntos);
      cerrarMayorMenor();
      }
 });
