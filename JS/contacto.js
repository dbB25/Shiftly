document.addEventListener("DOMContentLoaded", () => {
    const formContacto = document.getElementById("form-contacto");
    const inputNombre = document.getElementById("nombre");
    const inputCorreo = document.getElementById("correo");
    const inputMensaje = document.getElementById("mensaje");
    const btnEnviar = document.getElementById("btn-enviar");
    const alertContainer = document.getElementById("alert-container");

    function mostrarAlerta(mensajeTexto, tipo) {
        alertContainer.innerHTML = `
            <div class="alert alert-${tipo} alert-dismissible fade show mb-3" role="alert">
                ${mensajeTexto}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `;
    }

    formContacto.addEventListener("submit", (e) => {
        e.preventDefault();

        const texto = inputMensaje.value.trim();

        if (!texto) {
            mostrarAlerta("Por favor, escribe un mensaje antes de enviar.", "warning");
            return;
        }

        btnEnviar.disabled = true;
        btnEnviar.innerHTML = `Enviando... <span class="spinner-border spinner-border-sm ms-1"></span>`;

        setTimeout(() => {
            btnEnviar.disabled = false;
            btnEnviar.innerHTML = `Enviar Mensaje <i class="bi bi-send ms-1"></i>`;
            inputNombre.value = "";
            inputCorreo.value = "";
            inputMensaje.value = "";
            mostrarAlerta("¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.", "success");
        }, 1200);
    });
});