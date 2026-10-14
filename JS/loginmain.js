document.addEventListener("DOMContentLoaded", () => {
    const formLogin = document.getElementById("formularioLogin");
    const inputEmail = document.getElementById("email");
    const inputPassword = document.getElementById("password");
    const mensajeLogin = document.getElementById("mensajeLogin");
    const btnSubmit = document.getElementById("btnSubmitLogin");

    // Mostrar / Ocultar Contraseña
    const btnMostrarPass = document.getElementById("mostrarPassword");
    const iconoPassword = document.getElementById("iconoPassword");

    if (btnMostrarPass && inputPassword && iconoPassword) {
        btnMostrarPass.addEventListener("click", () => {
            const esPassword = inputPassword.type === "password";
            inputPassword.type = esPassword ? "text" : "password";
            iconoPassword.className = esPassword ? "bi bi-eye-slash" : "bi bi-eye";
        });
    }

    // Interceptar el envío del formulario
    if (formLogin) {
        formLogin.addEventListener("submit", async (evento) => {
            // Detener recarga de la página y envío GET por defecto
            evento.preventDefault();
            evento.stopPropagation();

            const correo = inputEmail ? inputEmail.value.trim() : "";
            const password = inputPassword ? inputPassword.value.trim() : "";

            if (!correo || !password) {
                mostrarAlerta("Por favor, llena todos los campos.", "warning");
                return;
            }

            if (btnSubmit) {
                btnSubmit.disabled = true;
                btnSubmit.textContent = "Validando...";
            }

            mostrarAlerta("Conectando con la base de datos...", "info");

            try {
                // Petición a login_process.php en la raíz
                const respuesta = await fetch("../../login_process.php", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        correo: correo,
                        password: password
                    })
                });

                const resultado = await respuesta.json();

                if (resultado.success) {
                    mostrarAlerta(resultado.message || "¡Inicio de sesión exitoso!", "success");

                    setTimeout(() => {
                        window.location.href = "../dashboard/dashboard.html";
                    }, 1000);
                } else {
                    mostrarAlerta(resultado.message || "Credenciales incorrectas.", "danger");
                    if (btnSubmit) {
                        btnSubmit.disabled = false;
                        btnSubmit.textContent = "Iniciar Sesión";
                    }
                }

            } catch (error) {
                console.error("Error al conectar con PHP:", error);
                mostrarAlerta("Error de conexión. Verifica que Apache y MySQL estén activos en XAMPP.", "danger");

                if (btnSubmit) {
                    btnSubmit.disabled = false;
                    btnSubmit.textContent = "Iniciar Sesión";
                }
            }
        });
    }

    function mostrarAlerta(texto, tipo) {
        if (!mensajeLogin) return;
        mensajeLogin.textContent = texto;
        mensajeLogin.className = `alert alert-${tipo} mt-3 d-block`;
    }
});