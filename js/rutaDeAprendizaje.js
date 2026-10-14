// JUSTIFICACIÓN DE SELECTORES:
// Usamos getElementById para acceder rápidamente al input de búsqueda y la barra.
// Usamos querySelectorAll para seleccionar todas las tarjetas que se filtran en tiempo real.
const buscador = document.getElementById('buscadorLecciones');
const tarjetas = document.querySelectorAll('.tarjeta-modulo');
const contenedor = document.getElementById('contenedorTarjetas');
const barraProgreso = document.getElementById('barraProgreso');
const textoProgreso = document.getElementById('textoProgreso');

let leccionesCompletadas = 0;
const totalLecciones = tarjetas.length;

function filtrarLecciones() {
    const textoBusqueda = buscador.value.toLowerCase().trim();

    tarjetas.forEach(function(tarjeta) {
        const titulo = tarjeta.getAttribute('data-titulo').toLowerCase();
        if (titulo.includes(textoBusqueda)) {
            tarjeta.classList.remove('d-none');
        } else {
            tarjeta.classList.add('d-none');
        }
    });
}

function actualizarProgreso() {
    const porcentaje = Math.round((leccionesCompletadas / totalLecciones) * 100);
    barraProgreso.style.width = porcentaje + '%';
    textoProgreso.textContent = porcentaje + '%';
}

function manejarDelegacionLecciones(evento) {
    if (evento.target.classList.contains('btn-completar')) {
        const boton = evento.target;
        
        if (!boton.classList.contains('active')) {
            boton.classList.add('active', 'btn-success');
            boton.classList.remove('btn-outline-primary');
            boton.textContent = 'Completada ✓';
            leccionesCompletadas++;
        } else {
            boton.classList.remove('active', 'btn-success');
            boton.classList.add('btn-outline-primary');
            boton.textContent = 'Marcar como Completada';
            leccionesCompletadas--;
        }

        actualizarProgreso();
    }
}

buscador.addEventListener('input', filtrarLecciones);
buscador.addEventListener('keyup', filtrarLecciones);
contenedor.addEventListener('click', manejarDelegacionLecciones);