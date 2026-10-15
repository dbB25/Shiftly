document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // 1. MÓDULO DE RECUPERACIÓN DE CONTRASEÑA
    // ==========================================
    const formRecuperar = document.getElementById("formRecuperar");
    const correoInput = document.getElementById("correoRecuperacion");
    const mensajeRecuperacion = document.getElementById("mensajeRecuperacion");

    if (formRecuperar) {
        formRecuperar.addEventListener("submit", (evento) => {
            evento.preventDefault();

            const correo = correoInput ? correoInput.value.trim() : "";

            // Validación básica de formato de correo
            if (!correo || !/\S+@\S+\.\S+/.test(correo)) {
                if (mensajeRecuperacion) {
                    mensajeRecuperacion.textContent = "Por favor, ingresa un correo electrónico válido.";
                    mensajeRecuperacion.className = "alert alert-warning text-start d-block";
                }
                return;
            }

            // Muestra mensaje de éxito
            if (mensajeRecuperacion) {
                mensajeRecuperacion.textContent = "¡Enlace enviado! Redirigiendo a la verificación de correo...";
                mensajeRecuperacion.className = "alert alert-success text-start d-block";
            }

            // Redirección a verificacion-correo.html en la misma carpeta
            setTimeout(() => {
                window.location.href = "verificacion-correo.html";
            }, 800);
        });
    }

    // ==========================================
    // 2. MÓDULO DE VERIFICACIÓN DE CORREO
    // ==========================================
    const formVerificacion = document.getElementById("formularioVerificacion");
    const camposCodigo = document.querySelectorAll(".codigo");
    const mensajeVerificacion = document.getElementById("mensajeVerificacion");

    if (formVerificacion) {
        formVerificacion.addEventListener("submit", (evento) => {
            evento.preventDefault();

            if (mensajeVerificacion) {
                mensajeVerificacion.textContent = "¡Código verificado con éxito! Redirigiendo...";
                mensajeVerificacion.className = "alert alert-success text-start d-block";
            }

            setTimeout(() => {
                window.location.href = "recuperar-password.html";
            }, 600);
        });
    }

});