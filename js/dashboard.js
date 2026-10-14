const inputNombre = document.getElementById('nombreUsuario');
const inputCorreo = document.getElementById('correoUsuario');
const formularioPerfil = document.getElementById('formPerfil');
const toastElemento = document.getElementById('toastNotificacion');

const toastBootstrap = new bootstrap.Toast(toastElemento);

function validarNombre() {
    const valor = inputNombre.value.trim();
    if (valor.length >= 3) {
        inputNombre.classList.remove('is-invalid');
        inputNombre.classList.add('is-valid');
    } else {
        inputNombre.classList.remove('is-valid');
        inputNombre.classList.add('is-invalid');
    }
}

function validarCorreo() {
    const valor = inputCorreo.value.trim();
    const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (patronCorreo.test(valor)) {
        inputCorreo.classList.remove('is-invalid');
        inputCorreo.classList.add('is-valid');
    } else {
        inputCorreo.classList.remove('is-valid');
        inputCorreo.classList.add('is-invalid');
    }
}

function manejarEnvioFormulario(evento) {
    evento.preventDefault();

    validarNombre();
    validarCorreo();

    const esNombreValido = inputNombre.classList.contains('is-valid');
    const esCorreoValido = inputCorreo.classList.contains('is-valid');

    if (esNombreValido && esCorreoValido) {
        toastBootstrap.show();
    }
}

inputNombre.addEventListener('input', validarNombre);
inputNombre.addEventListener('blur', validarNombre);

inputCorreo.addEventListener('input', validarCorreo);
inputCorreo.addEventListener('blur', validarCorreo);

formularioPerfil.addEventListener('submit', manejarEnvioFormulario);