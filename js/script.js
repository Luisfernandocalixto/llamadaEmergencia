//Agrega a la pantalla el valor del botón de la calculadora
function agregar(valor) {
    document.getElementById('pantalla').value += valor;
}

// Borrar datos en la pantalla
function borrar() {
    document.getElementById('pantalla').value = '';
}

//Poder eliminar el ultimo caracter de la cadena
// slice para eliminar desde el primer posicion y eliminar => -1
function eliminar() {
    const cadena = document.getElementById('pantalla').value;
    const resultado = cadena.slice(0, - 1);
    document.getElementById('pantalla').value = resultado;

}

// Para mostrar las llamadas correspondientes
let modal = document.getElementById('ventanaModal'); // Referenciar modal => id="ventanaModal"
let cerrarModal = document.getElementById('cerrarModal'); // Referenciar boton => id="cerrarModal"
let teclado = document.getElementById('teclado'); // Referenciar teclado númerico => id="teclado"
let marcando = document.getElementById('marcando'); // Referenciar pantalla de llamando => id="marcando"
let numero = document.getElementById('numero') // Referenciar numero => id="numero"
let destinatario = document.getElementById('destinatario') // Referenciar destinatario => id="destinatario"

function llamar() {
    let valorPantalla = document.getElementById('pantalla').value;

    if (valorPantalla == 911) {
        numero.textContent = valorPantalla;
        destinatario.textContent = 'Emergencias';
        teclado.style.display = 'none';
        marcando.style.display = 'inline';

    }
    else if (valorPantalla == 5556581111) {
        numero.textContent = valorPantalla;
        destinatario.textContent = 'Bomberos (CDMX)';
        teclado.style.display = 'none';
        marcando.style.display = 'inline';

    }
    else if (valorPantalla == 5589572692) {
        numero.textContent = valorPantalla;
        destinatario.textContent = 'Locatel';
        teclado.style.display = 'none';
        marcando.style.display = 'inline';

    }
    else if (valorPantalla == 5510849000) {
        numero.textContent = valorPantalla;
        destinatario.textContent = 'Cruz Roja Mexicana';
        teclado.style.display = 'none';
        marcando.style.display = 'inline';

    }
    else if (valorPantalla == 5551280000) {
        numero.textContent = valorPantalla;
        destinatario.textContent = 'Protección Civil';
        teclado.style.display = 'none';
        marcando.style.display = 'inline';

    }
    else if (valorPantalla == '071') {
        numero.textContent = valorPantalla;
        destinatario.textContent = 'CFE';
        teclado.style.display = 'none';
        marcando.style.display = 'inline';

    }
    else if (valorPantalla == '088') {
        numero.textContent = valorPantalla;
        destinatario.textContent = 'Policía Federal';
        teclado.style.display = 'none';
        marcando.style.display = 'inline';

    }
    else if (valorPantalla == '089') {
        numero.textContent = valorPantalla;
        destinatario.textContent = 'Denuncia Anónima (CDMX)';
        teclado.style.display = 'none';
        marcando.style.display = 'inline';

    }
    else if (valorPantalla == '074') {
        numero.textContent = valorPantalla;
        destinatario.textContent = 'Capufe';
        teclado.style.display = 'none';
        marcando.style.display = 'inline';

    }
    else if (valorPantalla == '078') {
        numero.textContent = valorPantalla;
        destinatario.textContent = 'Ángeles Verdes';
        teclado.style.display = 'none';
        marcando.style.display = 'inline';

    }
    else if (valorPantalla == 80046236346) {
        numero.textContent = valorPantalla;
        destinatario.textContent = 'Incendios Forestales';
        teclado.style.display = 'none';
        marcando.style.display = 'inline';

    }


    else {
        document.getElementById('pantalla').value = '';
        modal.style.display = 'block';
    }
}

cerrarModal.addEventListener('click', () => {
    modal.style.display = "none";
})

window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
})


function mostrarHora() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();

    let format = "AM";

    if (hh == 0) {
        hh = 12;
    }
    if (hh > 12) {
        hh -= 12;
        format = "PM";
    }

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;

    let tiempo = hh + ":" + mm + " " + format;

    let mostrar = document.querySelector('#reloj');
    mostrar.textContent = tiempo;

}

setInterval(mostrarHora, 1000);