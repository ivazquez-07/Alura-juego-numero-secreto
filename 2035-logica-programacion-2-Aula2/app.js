let intentos = 0;
let numeroLimite = 10;
let numeroSecreto = generarNumeroSecreto(numeroLimite);

document.getElementById('valorUsuario').max = numeroLimite;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {   // El triple igual asegura que no solo sea el mismo valor sino el tipo de dato (int, string, etc)
        console.log('Acertaste el número!');
        alert('Acertaste el número!');
    } else {
        alert(`Tu número es ${numeroDeUsuario} y ... ¡No acertaste!`);
    }
    return;
}

function reiniciarJuego() {
    alert("Presion F5 para empezar de nuevo");
    return;
}

function generarNumeroSecreto(numeroLimite) {
    return Math.floor(Math.random()*numeroLimite)+1;
}

asignarTextoElemento('h1','Juego del Número Secreto');
asignarTextoElemento('p',`Indica un número del 1 al ${numeroLimite}`);

