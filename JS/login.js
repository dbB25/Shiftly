// JUSTIFICACIÓN DE SELECTORES:
// Usamos getElementById por rendimiento para obtener elementos únicos del formulario.
// Usamos querySelector para instanciar el componente Toast de Bootstrap por su ID.
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

        const formulario = document.getElementById("formularioLogin");
        const correo = document.getElementById("email");
        const password = document.getElementById("password");
        const botonMostrar = document.getElementById("mostrarPassword");
        const iconoPassword = document.getElementById("iconoPassword");
        const mensaje = document.getElementById("mensajeLogin");

        // Mostrar u ocultar la contraseña
        botonMostrar.addEventListener("click", function () {
            const mostrar = password.type === "password";

            password.type = mostrar ? "text" : "password";
            iconoPassword.className = mostrar
                ? "bi bi-eye-slash"
                : "bi bi-eye";

            botonMostrar.setAttribute(
                "aria-label",
                mostrar ? "Ocultar contraseña" : "Mostrar contraseña"
            );

            botonMostrar.setAttribute("aria-pressed", String(mostrar));
        });

        // Mostrar mensajes en pantalla
        function mostrarMensaje(texto, tipo) {
            mensaje.textContent = texto;
            mensaje.className = "alert mt-3 alert-" + tipo;
        }

        // Validar el formulario
        formulario.addEventListener("submit", function (evento) {
            evento.preventDefault();

            if (!formulario.checkValidity()) {
                formulario.reportValidity();
                return;
            }

            mostrarMensaje(
                "Los campos se completaron correctamente. La autenticación todavía necesita conectarse al servidor.",
                "info"
            );
        });
        
    // Validación en tiempo real de los campos
    [correo, password].forEach(function (campo) {

        
campo.addEventListener("blur", function () {
    if (campo.value.trim() === "") {
        campo.classList.remove("is-valid", "is-invalid");
        return;
    }

    if (campo.checkValidity()) {
        campo.classList.add("is-valid");
        campo.classList.remove("is-invalid");
    } else {
        campo.classList.add("is-invalid");
        campo.classList.remove("is-valid");
    }
});

            // Limpiar el mensaje anterior al modificar los datos
            mensaje.textContent = "";
            mensaje.className = "alert d-none mt-3";
        });

        campo.addEventListener("blur", function () {
    if (campo.value.trim() !== "") {
        campo.classList.toggle("is-valid", campo.validity.valid);
        campo.classList.toggle("is-invalid", !campo.validity.valid);
    } else {
        campo.classList.remove("is-valid", "is-invalid");
    }
});

        
