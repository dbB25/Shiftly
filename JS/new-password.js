document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // MÓDULO DE CAMBIO DE CONTRASEÑA
    // ==========================================
    const formCambiar = document.getElementById("formCambiarPassword");
    const passActual = document.getElementById("passActual");
    const passNueva = document.getElementById("passNueva");
    const passConfirmar = document.getElementById("passConfirmar");
    const mensajeCambio = document.getElementById("mensajeCambio");

    // Botones para ocultar/mostrar contraseña
    const togglesPass = document.querySelectorAll(".toggle-pass");
    togglesPass.forEach(boton => {
        boton.addEventListener("click", () => {
            const idTarget = boton.getAttribute("data-target");
            const input = document.getElementById(idTarget);
            const icono = boton.querySelector("i");

            if (input && input.type === "password") {
                input.type = "text";
                icono.className = "bi bi-eye-slash";
            } else if (input) {
                input.type = "password";
                icono.className = "bi bi-eye";
            }
        });
    });

    // Evento Submit para Crear Nueva Contraseña
    if (formCambiar) {
        formCambiar.addEventListener("submit", (evento) => {
            evento.preventDefault();

            const valActual = passActual ? passActual.value.trim() : "";
            const valNueva = passNueva ? passNueva.value.trim() : "";
            const valConfirmar = passConfirmar ? passConfirmar.value.trim() : "";

            // Validación de campos vacíos
            if (!valActual || !valNueva || !valConfirmar) {
                if (mensajeCambio) {
                    mensajeCambio.textContent = "Por favor, completa todos los campos de contraseña.";
                    mensajeCambio.className = "alert alert-warning text-start d-block";
                }
                return;
            }

            // Validación de longitud mínima
            if (valNueva.length < 6) {
                if (mensajeCambio) {
                    mensajeCambio.textContent = "La nueva contraseña debe tener al menos 6 caracteres.";
                    mensajeCambio.className = "alert alert-warning text-start d-block";
                }
                return;
            }

            // Validación de coincidencia de contraseñas
            if (valNueva !== valConfirmar) {
                if (mensajeCambio) {
                    mensajeCambio.textContent = "La nueva contraseña y la confirmación no coinciden.";
                    mensajeCambio.className = "alert alert-danger text-start d-block";
                }
                return;
            }

            // Confirmación de éxito
            if (mensajeCambio) {
                mensajeCambio.textContent = "¡Contraseña actualizada con éxito! Redirigiendo al inicio de sesión...";
                mensajeCambio.className = "alert alert-success text-start d-block";
            }

            // Redirección directa hacia login.html en la misma carpeta
            setTimeout(() => {
                window.location.href = "login.html";
            }, 800);
        });
    }

});