//alert("Hola Mundo!");

/* Otros Ejemplos:
let mensajeDeBienvenida = 'Bienvenido a la aplicación';
alert(mensajeDeBienvenida);

alert('Bienvenidos al juego del número secreto');
let eleccion = prompt('Elige un número entre 1 y 10')
let numeroSecreto = 4;
if (eleccion == numeroSecreto) {
    alert('Adivinaste');
}


javascript
let contraseniaDelSistema = "contraseniaPrueba!";

let contrasenia = prompt("Ingrese la contraseña del sistema:");

if (contrasenia == contraseniaDelSistema){
    alert("Acceso al sistema garantizado");
}
*/


let numeroSecreto = 6;
let numeroUsuario = prompt("Me indicas un numero por favor: ");

console.log(numeroUsuario);

if (Number(numeroUsuario) === Number(numeroSecreto)) {
    alert('Acertaste el numero');
} else {
    alert('El número no es correcto. Intenta de nuevo!')
}
