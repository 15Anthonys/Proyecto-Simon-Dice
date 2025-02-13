const starsContainer = document.getElementById('stars-container');
const numStars = 100;
var nombreJugador = "";

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
        nombreJugador = userInput;
        console.log(nombreJugador);
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
}

document.getElementById('boton-instrucciones').addEventListener('click', hideElementes3);
document.getElementById('boton-volver').addEventListener('click', RegresarElementes);
document.getElementById('boton-volveringame').addEventListener('click', RegresarElementes2);