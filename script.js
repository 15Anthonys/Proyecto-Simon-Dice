const starsContainer = document.getElementById('stars-container');
const numStars = 100;
var nombreJugador = "";
let sonidoazul = new Audio();
let secuencia = [];
let contadorsegundos = 1000;
let ronda = 1;
let secuenciaUsuario = [];
let indiceSecuencia = 0;

for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    star.classList.add('stars');
    star.style.top = `${Math.random() * 100}vh`;
    star.style.left = `${Math.random() * 100}vw`;
    star.style.setProperty('--direction-x', Math.random() * 2 - 1);
    star.style.setProperty('--direction-y', Math.random() * 2 - 1);
    starsContainer.appendChild(star);
}

function hideElements() {
    const userInput = document.getElementById('user-input').value;
    const alertMessage = document.getElementById('alert-message');

    if (userInput.trim() === "") {
        alertMessage.style.display = 'block';
        alertMessage.textContent = 'Por favor, ingrese su nombre.';
    } else {
        alertMessage.style.display = 'none';
        document.getElementById('instruction-text').style.display = 'none';
        document.getElementById('input-wrapper').style.display = 'none';
        document.getElementById('boton-instrucciones').style.display = 'none';
        document.getElementById('botones').style.display = 'block';
        document.getElementById('boton-volveringame').style.display = 'block';
        document.getElementById('contenedor-puntaje').style.display = 'block';
        iniciarJuego();
        nombreJugador = userInput;
        console.log(nombreJugador);
        localStorage.setItem('nombreJugador', nombreJugador);
    }
}

document.getElementById('submit-button').addEventListener('click', hideElements);

function hideElementes3() {
    document.getElementById('instruction-text').style.display = 'none';
    document.getElementById('input-wrapper').style.display = 'none';
    document.getElementById('boton-instrucciones').style.display = 'none';
    document.getElementById('instrucciones').style.display = 'block';
    document.getElementById('boton-volver').style.display = 'block'; 
    document.getElementById('alert-message').style.display = 'none';
    
}

function RegresarElementes() {
    document.getElementById('instruction-text').style.display = 'block';
    document.getElementById('input-wrapper').style.display = 'block';
    document.getElementById('boton-instrucciones').style.display = 'block';
    document.getElementById('instrucciones').style.display = 'none';
    document.getElementById('boton-volver').style.display = 'none'
}

function RegresarElementes2(){
    document.getElementById('instruction-text').style.display = 'block';
    document.getElementById('input-wrapper').style.display = 'block';
    document.getElementById('boton-instrucciones').style.display = 'block';
    document.getElementById('botones').style.display = 'none';
    document.getElementById('boton-volveringame').style.display = 'none';
    document.getElementById('alert-message').style.display = 'none';
    document.getElementById('contenedor-puntaje').style.display = 'none';

}

function desabilitarColoresBotones(){
    document.getElementById('boton-amarillo').disabled = true;
    document.getElementById('boton-azul').disabled = true;
    document.getElementById('boton-verde').disabled = true;
    document.getElementById('boton-rojo').disabled = true;
}

function habilitarColoresBotones(){
    document.getElementById('boton-amarillo').disabled = false;
    document.getElementById('boton-azul').disabled = false;
    document.getElementById('boton-verde').disabled = false;
    document.getElementById('boton-rojo').disabled = false;
}

function activarBrilloBoton(boton) {
    boton.classList.add('brillo');
    setTimeout(() => {
        boton.classList.remove('brillo');
    }, 300);
}

function agregarColorSecuencia() {
    const colores = ['boton-rojo', 'boton-verde', 'boton-azul', 'boton-amarillo'];
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    secuencia.push(colorAleatorio);
}

function generarSecuencia(longitud) {
    const colores = ['boton-rojo', 'boton-verde', 'boton-azul', 'boton-amarillo'];
    const nuevaSecuencia = [];
    for (let i = 0; i < longitud; i++) {
        const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
        nuevaSecuencia.push(colorAleatorio);
    }
    return nuevaSecuencia;
}

function reproducirSecuencia(secuencia) {
    let i = 0;
    desabilitarColoresBotones();
    const intervalo = setInterval(() => {
        if (i < secuencia.length) {
            const boton = document.getElementById(secuencia[i]);
            activarBrilloBoton(boton);
            i++;
        } else {
            clearInterval(intervalo);
            habilitarColoresBotones();
        }
    }, 1000);
}

function iniciarJuego() {
    ronda = 1;
    secuencia = [];
    secuenciaUsuario = [];
    indiceSecuencia = 0;
    simonDicesecuencia();
}

function manejarClickBoton(color) {
    const boton = document.getElementById(color);
    activarBrilloBoton(boton);
    secuenciaUsuario.push(color);

    if (secuenciaUsuario[indiceSecuencia] === secuencia[indiceSecuencia]) {
        indiceSecuencia++;
        if (indiceSecuencia === secuencia.length) {
            secuenciaUsuario = [];
            indiceSecuencia = 0;
            setTimeout(simonDicesecuencia, 1000);
        }
    } else {
        alert('¡Te has equivocado! El juego ha terminado. Presiona Aceptar para Reiniciar el juego.');
        iniciarJuego();
    }
}

function simonDicesecuencia(){
    agregarColorSecuencia();
    reproducirSecuencia(secuencia);
}

window.onload = function() {
    const nombreGuardado = localStorage.getItem('nombreJugador');
    if (nombreGuardado) {
        document.getElementById('user-input').value = nombreGuardado;
    }
};




document.getElementById('boton-instrucciones').addEventListener('click', hideElementes3);
document.getElementById('boton-volver').addEventListener('click', RegresarElementes);
document.getElementById('boton-volveringame').addEventListener('click', RegresarElementes2);

document.getElementById('boton-rojo').addEventListener('click', () => activarBrilloBoton(document.getElementById('boton-rojo')));
document.getElementById('boton-verde').addEventListener('click', () => activarBrilloBoton(document.getElementById('boton-verde')));
document.getElementById('boton-azul').addEventListener('click', () => activarBrilloBoton(document.getElementById('boton-azul')));
document.getElementById('boton-amarillo').addEventListener('click', () => activarBrilloBoton(document.getElementById('boton-amarillo')));

document.getElementById('boton-rojo').addEventListener('click', () => manejarClickBoton('boton-rojo'));
document.getElementById('boton-verde').addEventListener('click', () => manejarClickBoton('boton-verde'));
document.getElementById('boton-azul').addEventListener('click', () => manejarClickBoton('boton-azul'));
document.getElementById('boton-amarillo').addEventListener('click', () => manejarClickBoton('boton-amarillo'));
