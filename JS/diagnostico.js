document.addEventListener('DOMContentLoaded', () => {
    iniciarDiagnostico();
    iniciarResultado();
    iniciarRecomendaciones();
});

const nivelesDiagnostico = [
    { nivel: 'A1', nombre: 'Principiante', descripcion: 'Estás comenzando. Puedes comprender y usar expresiones muy básicas en situaciones cotidianas.', recomendacion: 'Empieza por vocabulario esencial, frases frecuentes y estructuras básicas del inglés.' },
    { nivel: 'A2', nombre: 'Básico', descripcion: 'Puedes comunicarte en tareas sencillas y comprender expresiones frecuentes sobre temas familiares.', recomendacion: 'Refuerza vocabulario cotidiano, comprensión lectora y conversaciones breves.' },
    { nivel: 'B1', nombre: 'Intermedio', descripcion: 'Tienes conocimientos que te permiten comprender y utilizar expresiones frecuentes en situaciones cotidianas.', recomendacion: 'Continúa practicando vocabulario, comprensión y comunicación para fortalecer tu dominio del inglés.' },
    { nivel: 'B2', nombre: 'Intermedio alto', descripcion: 'Puedes comprender ideas principales y comunicarte con soltura en una variedad de situaciones.', recomendacion: 'Practica textos más complejos, expresiones naturales y conversaciones sobre temas variados.' },
    { nivel: 'C1', nombre: 'Avanzado', descripcion: 'Demuestras un dominio avanzado y puedes comprender contenidos exigentes con fluidez.', recomendacion: 'Perfecciona matices, vocabulario especializado y comunicación precisa en contextos profesionales.' }
];
/* Diagnóstico */
function iniciarDiagnostico() {
    const formulario = document.getElementById('diagnostico-form');
    if (!formulario) return;

    const preguntas = [
        { texto: 'Choose the correct option:', opciones: ['She are a student.', 'She is a student.', 'She am a student.', 'She be a student.'], correcta: 1 },
        { texto: 'Complete the sentence: They ___ football every weekend.', opciones: ['plays', 'playing', 'play', 'played'], correcta: 2 },
        { texto: 'Choose the correct past tense: We ___ to the museum yesterday.', opciones: ['go', 'gone', 'went', 'going'], correcta: 2 },
        { texto: 'Complete the sentence: If I had more time, I ___ another language.', opciones: ['learn', 'will learn', 'would learn', 'would have learn'], correcta: 2 },
        { texto: 'Choose the sentence with the closest meaning to “The meeting was postponed”.', opciones: ['The meeting was cancelled forever.', 'The meeting was moved to a later time.', 'The meeting started early.', 'The meeting was longer than expected.'], correcta: 1 }
    ];
    const respuestas = Array(preguntas.length).fill(null);
    let indice = 0;
    let intentoEnvio = false;
    const tarjeta = document.querySelector('.pregunta-card');
    const numero = document.getElementById('pregunta-numero');
    const texto = document.getElementById('pregunta-texto');
    const botones = [...document.querySelectorAll('.opcion-respuesta')];
    const anterior = document.getElementById('anterior');
    const siguiente = document.getElementById('siguiente');
    const error = document.getElementById('mensaje-error');
    const progresoTexto = document.getElementById('progreso-texto');
    const barra = document.getElementById('barra-progreso');
    const retroalimentacion = document.getElementById('retroalimentacion');

    function renderizarPregunta() {
        const pregunta = preguntas[indice];
        numero.textContent = `Pregunta ${indice + 1}`;
        texto.textContent = pregunta.texto;
        progresoTexto.textContent = `${indice + 1} de ${preguntas.length}`;
        const porcentaje = ((indice + 1) / preguntas.length) * 100;
        barra.style.width = `${porcentaje}%`;
        barra.setAttribute('aria-valuenow', String(porcentaje));
        botones.forEach((boton, opcion) => {
            const seleccionado = respuestas[indice] === opcion;
            boton.textContent = pregunta.opciones[opcion];
            boton.classList.toggle('seleccionada', seleccionado);
            boton.classList.toggle('is-valid', seleccionado);
            boton.classList.toggle('is-invalid', intentoEnvio && respuestas[indice] === null);
            boton.setAttribute('aria-pressed', String(seleccionado));
            boton.setAttribute('aria-invalid', String(intentoEnvio && respuestas[indice] === null));
        });
        anterior.disabled = indice === 0;
        siguiente.textContent = indice === preguntas.length - 1 ? 'Ver resultado →' : 'Siguiente →';
        error.textContent = '';
        error.classList.remove('d-block');
        retroalimentacion.className = 'mt-3';
        if (respuestas[indice] === null) {
            retroalimentacion.textContent = '';
        } else if (respuestas[indice] === pregunta.correcta) {
            retroalimentacion.classList.add('text-success');
            retroalimentacion.textContent = '¡Correcto! Puedes continuar.';
        } else {
            retroalimentacion.classList.add('text-danger');
            retroalimentacion.textContent = `No es correcta. La respuesta correcta es: ${pregunta.opciones[pregunta.correcta]}`;
        }
    }

    botones.forEach((boton) => boton.addEventListener('click', () => {
        respuestas[indice] = Number(boton.dataset.option);
        intentoEnvio = false;
        renderizarPregunta();
    }));
    anterior.addEventListener('click', () => {
        if (indice > 0) {
            indice -= 1;
            renderizarPregunta();
        }
    });
    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault();
        if (respuestas[indice] === null) {
            intentoEnvio = true;
            renderizarPregunta();
            error.textContent = 'Selecciona una respuesta para continuar.';
            error.classList.add('d-block');
            return;
        }
        if (indice < preguntas.length - 1) {
            indice += 1;
            renderizarPregunta();
            tarjeta.scrollIntoView({ behavior: 'smooth', block: 'center' });
            return;
        }
        const aciertos = respuestas.reduce((total, respuesta, posicion) => total + (respuesta === preguntas[posicion].correcta ? 1 : 0), 0);
        const revision = preguntas.map((pregunta, posicion) => ({
            pregunta: pregunta.texto,
            respuestaElegida: pregunta.opciones[respuestas[posicion]],
            respuestaCorrecta: pregunta.opciones[pregunta.correcta],
            correcta: respuestas[posicion] === pregunta.correcta
        }));
        const resultado = { ...nivelesDiagnostico[Math.min(aciertos, nivelesDiagnostico.length - 1)], aciertos, total: preguntas.length, revision };
        try {
            localStorage.setItem('shiftlyDiagnosticoResultado', JSON.stringify(resultado));
        } catch (_) {

        }
        window.location.href = `resultado.html?aciertos=${aciertos}`;
    });
    renderizarPregunta();
}

/* recomendaciones */
function iniciarRecomendaciones() {
    const buscador = document.getElementById('buscar-modulo');
    if (!buscador) return;

    function cambiarEstado(estado) {
        const estados = ['active', 'completed', 'empty'];
        estados.forEach((nombre) => {
            document.getElementById(`card-${nombre}-state`).classList.toggle('d-none', nombre !== estado);
            const boton = document.getElementById(`btn-state-${nombre}`);
            boton.classList.toggle('active', nombre === estado);
            boton.setAttribute('aria-pressed', String(nombre === estado));
        });
        const mensajes = {
            active: 'Se muestra tu recomendación activa.',
            completed: 'Se muestran tus rutas completadas.',
            empty: 'Se muestran las opciones para elegir una ruta.'
        };
        document.getElementById('mensaje-notificacion').textContent = mensajes[estado] || 'Vista actualizada.';
        bootstrap.Toast.getOrCreateInstance(document.getElementById('notificacion-estado')).show();
    }

    let resultado = null;
    try {
        resultado = JSON.parse(localStorage.getItem('shiftlyDiagnosticoResultado') || 'null');
    } catch (_) {

    }
    if (!resultado) {
        const parametroAciertos = new URLSearchParams(window.location.search).get('aciertos');
        const aciertos = parametroAciertos === null ? NaN : Number(parametroAciertos);
        if (Number.isInteger(aciertos) && aciertos >= 0 && aciertos <= 5) {
            const indiceNivel = Math.min(aciertos, nivelesDiagnostico.length - 1);
            resultado = { nivel: nivelesDiagnostico[indiceNivel].nivel, nombre: nivelesDiagnostico[indiceNivel].nombre };
        }
    }
    if (resultado && resultado.nivel) {
        const etiquetaNivel = document.querySelector('#card-active-state .badge.bg-brand-accent.bg-opacity-50');
        if (etiquetaNivel) etiquetaNivel.textContent = resultado.nombre || resultado.nivel;
        const textoRazon = document.querySelector('#card-active-state .rounded-3.bg-white.bg-opacity-50 .mt-1');
        if (textoRazon) textoRazon.textContent = `Tu diagnóstico indica un nivel ${resultado.nivel} (${resultado.nombre}). Esta lección te ayudará a seguir avanzando desde tu nivel actual.`;
    }
    const botonComenzar = document.querySelector('#card-active-state a[href="#start-lesson"]');
    if (botonComenzar) botonComenzar.href = 'rutaDeAprendizaje.html';

    ['active', 'completed', 'empty'].forEach((estado) => {
        const boton = document.getElementById(`btn-state-${estado}`);
        boton.setAttribute('aria-controls', `card-${estado}-state`);
        boton.addEventListener('click', () => cambiarEstado(estado));
    });

    const modulos = [...document.querySelectorAll('.module-item')];
    buscador.addEventListener('input', () => {
        const consulta = buscador.value.trim().toLocaleLowerCase('es');
        let visibles = 0;
        modulos.forEach((modulo) => {
            const coincide = modulo.dataset.search.toLocaleLowerCase('es').includes(consulta);
            modulo.classList.toggle('d-none', !coincide);
            if (coincide) visibles += 1;
        });
        document.getElementById('sin-resultados-modulo').classList.toggle('d-none', visibles > 0);
    });
}

/* resultados */
function iniciarResultado() {
    const nivelElemento = document.getElementById('nivel-resultado');
    if (!nivelElemento) return;

    let resultado = null;
    try {
        resultado = JSON.parse(localStorage.getItem('shiftlyDiagnosticoResultado') || 'null');
    } catch (_) {

    }
    const parametroAciertos = new URLSearchParams(window.location.search).get('aciertos');
    const aciertosUrl = parametroAciertos === null ? NaN : Number(parametroAciertos);
    if (!resultado && Number.isInteger(aciertosUrl) && aciertosUrl >= 0 && aciertosUrl <= 5) {
        resultado = { ...nivelesDiagnostico[Math.min(aciertosUrl, nivelesDiagnostico.length - 1)], aciertos: aciertosUrl, total: 5 };
    }
    if (resultado && nivelesDiagnostico.some((nivel) => nivel.nivel === resultado.nivel)) {
        nivelElemento.textContent = resultado.nivel;
        document.getElementById('nombre-nivel').textContent = resultado.nombre;
        document.getElementById('descripcion-nivel').textContent = resultado.descripcion;
        document.getElementById('texto-recomendacion').textContent = resultado.recomendacion;
    }

    const listaRevision = document.getElementById('lista-revision');
    if (resultado && Array.isArray(resultado.revision)) {
        document.getElementById('resumen-revision').textContent = `${resultado.aciertos} de ${resultado.total} respuestas correctas.`;
        resultado.revision.forEach((item, indice) => {
            const bloque = document.createElement('div');
            bloque.className = 'border rounded p-3';
            const titulo = document.createElement('strong');
            titulo.textContent = `Pregunta ${indice + 1}: ${item.pregunta}`;
            const estado = document.createElement('p');
            estado.className = item.correcta ? 'text-success mb-0 mt-2' : 'text-danger mb-0 mt-2';
            estado.textContent = item.correcta ? `Correcta: ${item.respuestaCorrecta}` : `Tu respuesta: ${item.respuestaElegida}. Correcta: ${item.respuestaCorrecta}`;
            bloque.append(titulo, estado);
            listaRevision.appendChild(bloque);
        });
    } else {
        listaRevision.textContent = 'Completa el diagnóstico para consultar el repaso personalizado de tus respuestas.';
    }

    document.querySelector('.resultado-botones .btn-outline-secondary').addEventListener('click', () => {
        try {
            localStorage.removeItem('shiftlyDiagnosticoResultado');
        } catch (_) {

        }
    });
    const botonContinuar = document.querySelector('.resultado-botones .btn-primary');
    botonContinuar.href = resultado && Number.isInteger(resultado.aciertos)
        ? `recomendaciones.html?aciertos=${resultado.aciertos}`
        : 'recomendaciones.html';
}
