 JavaScript: interacciones

        document.addEventListener("DOMContentLoaded", function () {

            const formulario =
                document.getElementById("formularioRegistro");

            const nombre =
                document.getElementById("nombre");

            const correo =
                document.getElementById("correo");

            const password =
                document.getElementById("password");

            const botonMostrar =
                document.getElementById("mostrarPassword");

            const iconoPassword =
                document.getElementById("iconoPassword");

            const mensaje =
                document.getElementById("mensajeRegistro");


            // INTERACCIÓN 1:
            // Mostrar u ocultar la contraseña

            botonMostrar.addEventListener("click", function () {

                const mostrar = password.type === "password";

                password.type = mostrar ? "text" : "password";

                iconoPassword.className = mostrar
                    ? "bi bi-eye-slash"
                    : "bi bi-eye";

                botonMostrar.setAttribute(
                    "aria-label",
                    mostrar
                        ? "Ocultar contraseña"
                        : "Mostrar contraseña"
                );

                botonMostrar.setAttribute(
                    "aria-pressed",
                    String(mostrar)
                );
            });


            // Función para mostrar notificaciones

            function mostrarMensaje(texto, tipo) {

                mensaje.textContent = texto;

                mensaje.className = "visible " + tipo;
            }


            // INTERACCIÓN 2:
            // Validación del formulario

            formulario.addEventListener("submit", function (evento) {

                evento.preventDefault();

                if (!formulario.checkValidity()) {

                    formulario.reportValidity();

                    mostrarMensaje(
                        "Revisa los campos. Ingresa un nombre, un correo válido y una contraseña de al menos 8 caracteres.",
                        "mensaje-error"
                    );

                    return;
                }

                if (nombre.value.trim().length < 3) {

                    mostrarMensaje(
                        "Escribe tu nombre completo con al menos 3 caracteres.",
                        "mensaje-error"
                    );

                    nombre.focus();

                    return;
                }

                mostrarMensaje(
                    "Los datos se validaron correctamente. La creación real de la cuenta requiere conectar un servidor.",
                    "mensaje-exito"
                );
            });


            // INTERACCIÓN 3:
            // Actualizar la notificación cuando cambian los datos

            formulario.addEventListener("input", function () {

                mensaje.textContent = "";

                mensaje.className = "";

                mensaje.style.display = "none";
            });

        });


    // Obtener el formulario y sus campos
    const formularioRegistro = document.querySelector("form");
    const nombre = formularioRegistro.querySelector('input[type="text"]');
    const correo = formularioRegistro.querySelector('input[type="email"]');
    const contrasena = formularioRegistro.querySelector('input[type="password"]');

    // Crear un espacio para mostrar mensajes
    const mensajeRegistro = document.createElement("div");
    mensajeRegistro.className = "alert d-none mt-3";
    mensajeRegistro.setAttribute("role", "status");
    mensajeRegistro.setAttribute("aria-live", "polite");

    formularioRegistro.appendChild(mensajeRegistro);

    // Función para mostrar mensajes
    function mostrarMensajeRegistro(texto, tipo) {
        mensajeRegistro.textContent = texto;
        mensajeRegistro.className = "alert alert-" + tipo + " mt-3";
    }

    // Validar los datos al enviar el formulario
    formularioRegistro.addEventListener("submit", function(evento) {
        evento.preventDefault();

        const nombreIngresado = nombre.value.trim();
        const correoIngresado = correo.value.trim();
        const contrasenaIngresada = contrasena.value;

        // Validar nombre
        if (nombreIngresado.length < 2) {
            mostrarMensajeRegistro(
                "Escribe tu nombre completo para continuar.",
                "warning"
            );
            nombre.focus();
            return;
        }

        // Validar correo electrónico
        if (!correo.checkValidity() || correoIngresado === "") {
            mostrarMensajeRegistro(
                "Ingresa una dirección de correo electrónico válida.",
                "danger"
            );
            correo.focus();
            return;
        }

        // Validar contraseña
        if (contrasenaIngresada.length < 8) {
            mostrarMensajeRegistro(
                "La contraseña debe tener al menos 8 caracteres.",
                "warning"
            );
            contrasena.focus();
            return;
        }

        // Mostrar confirmación de demostración
        mostrarMensajeRegistro(
            "¡Validación exitosa! Tu formulario está completo. " +
            "Recuerda que la creación real de la cuenta requiere conectarse a un servidor.",
            "success"
        );
    });

    // Limpiar el mensaje cuando se modifiquen los campos
    formularioRegistro.addEventListener("input", function() {
        mensajeRegistro.textContent = "";
        mensajeRegistro.className = "alert d-none mt-3";
    });
