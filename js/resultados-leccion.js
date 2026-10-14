// JUSTIFICACIÓN DE SELECTORES:
// Usamos getElementById para modificar el contador y el contenido del modal.
// Usamos querySelector para seleccionar el elemento modal antes de instanciarlo.
const contadorPuntaje = document.getElementById('contadorPuntaje');
const modalElemento = document.getElementById('modalDetalles');
const modalTitulo = document.getElementById('modalTitulo');
const modalAciertos = document.getElementById('modalAciertos');
const modalTiempo = document.getElementById('modalTiempo');

const modalBootstrap = new bootstrap.Modal(modalElemento);

function animarPuntaje() {
    let valorActual = 0;
    const meta = 85;

    const intervalo = setInterval(function() {
        if (valorActual >= meta) {
            clearInterval(intervalo);
        } else {
            valorActual++;
            contadorPuntaje.textContent = valorActual + ' / 100';
        }
    }, 20);
}

function manejarClickDetalles(evento) {
    if (evento.target.classList.contains('btn-detalle')) {
        const boton = evento.target;
        
        const modulo = boton.getAttribute('data-modulo');
        const aciertos = boton.getAttribute('data-aciertos');
        const tiempo = boton.getAttribute('data-tiempo');

        modalTitulo.textContent = modulo;
        modalAciertos.textContent = aciertos;
        modalTiempo.textContent = tiempo;

        modalBootstrap.show();
    }
}

document.addEventListener('DOMContentLoaded', animarPuntaje);
document.addEventListener('click', manejarClickDetalles);