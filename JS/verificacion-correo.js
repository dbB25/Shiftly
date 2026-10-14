document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("formularioVerificacion");
    const campos = document.querySelectorAll(".codigo");
    const mensaje = document.getElementById("mensajeVerificacion");
    const botonReenviar = document.getElementById("reenviarCodigo");
    const barra = document.getElementById("barraProgreso");
    const textoProgreso = document.getElementById("textoProgreso");

    // Si los elementos no existen en la página actual, detiene la ejecución
    if (!formulario || !campos.length) return;

    // Mostrar mensajes dinámicos
    function mostrarMensaje(texto, tipo) {
        if (!mensaje) return;
        mensaje.textContent = texto;
        mensaje.className = "alert alert-" + tipo + " text-start d-block";
    }

    // Actualizar la barra de progreso
    function actualizarProgreso() {
        if (!barra || !textoProgreso) return;

        const completados = Array.from(campos)
            .filter(campo => campo.value.trim() !== "")
            .length;

        const porcentaje = Math.round((completados / campos.length) * 100);

        barra.style.width = porcentaje + "%";
        barra.setAttribute("aria-valuenow", porcentaje);
        textoProgreso.textContent = porcentaje + "%";
    }

    // Navegación interactiva y restricción a números entre campos
    campos.forEach((campo, indice) => {

        campo.addEventListener("input", () => {
            campo.value = campo.value.replace(/\D/g, "").slice(-1);

            if (campo.value && indice < campos.length - 1) {
                campos[indice + 1].focus();
            }

            if (mensaje) mensaje.className = "alert d-none text-start";
            actualizarProgreso();
        });

        // Controles mediante teclado
        campo.addEventListener("keydown", evento => {
            if (evento.key === "Backspace" && !campo.value && indice > 0) {
                campos[indice - 1].focus();
            }

            if (evento.key === "ArrowLeft" && indice > 0) {
                campos[indice - 1].focus();
            }

            if (evento.key === "ArrowRight" && indice < campos.length - 1) {
                campos[indice + 1].focus();
            }
        });

        // Soporte para pegar el código de 4 dígitos
        campo.addEventListener("paste", evento => {
            evento.preventDefault();

            const codigoPegado = evento.clipboardData
                .getData("text")
                .replace(/\D/g, "")
                .slice(0, campos.length);

            codigoPegado.split("").forEach((digito, posicion) => {
                if (campos[posicion]) {
                    campos[posicion].value = digito;
                }
            });

            const siguienteVacio = Array.from(campos).findIndex(c => !c.value);
            const indiceEnfoque = siguienteVacio === -1 ? campos.length - 1 : siguienteVacio;

            campos[indiceEnfoque].focus();

            if (mensaje) mensaje.className = "alert d-none text-start";
            actualizarProgreso();
        });

    });

    // Validar el formulario y redirigir a recuperar-password.html
    formulario.addEventListener("submit", function (evento) {
        evento.preventDefault();

        const codigo = Array.from(campos)
            .map(campo => campo.value.trim())
            .join("");

        if (!/^\d{4}$/.test(codigo)) {
            mostrarMensaje(
                "Ingresa los cuatro dígitos del código.",
                "warning"
            );
            return;
        }

        mostrarMensaje(
            "¡Código verificado correctamente! Redirigiendo...",
            "success"
        );

        // Redirecciona a la interfaz de recuperación de contraseña tras 1 segundo
        setTimeout(() => {
            window.location.href = "recuperar-password.html";
        }, 1000);
    });

    // Simular el reenvío de código
    if (botonReenviar) {
        botonReenviar.addEventListener("click", (evento) => {
            evento.preventDefault();
            mostrarMensaje(
                "Se ha enviado un nuevo código de 4 dígitos a tu correo.",
                "info"
            );
        });
    }

    // Inicializar estado del progreso al cargar la página
    actualizarProgreso();
});