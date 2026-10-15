document.addEventListener("DOMContentLoaded", () => {
    // Referencias a los elementos del DOM
    const formPerfil = document.getElementById("formularioPerfil");
    const inputNombre = document.getElementById("nombre-perfil");
    const inputApellido = document.getElementById("apellido-perfil");
    const inputEmail = document.getElementById("email-perfil");
    const selectArea = document.getElementById("area-perfil");
    
    const encabezadoNombre = document.getElementById("encabezadoNombre");
    const encabezadoSubtitulo = document.getElementById("encabezadoSubtitulo");
    const alertaPerfil = document.getElementById("alertaPerfil");
    
    const btnCancelar = document.getElementById("btnCancelarPerfil");
    const btnGuardar = document.getElementById("btnGuardarPerfil");

    // Guardar copia de valores iniciales para funcionalidad de descartar
    let valoresOriginales = {
        nombre: inputNombre ? inputNombre.value.trim() : "",
        apellido: inputApellido ? inputApellido.value.trim() : "",
        area: selectArea ? selectArea.value : ""
    };

    // 1. Interceptar Guardado de Cambios
    if (formPerfil) {
        formPerfil.addEventListener("submit", (evento) => {
            evento.preventDefault();

            const nuevoNombre = inputNombre.value.trim();
            const nuevoApellido = inputApellido.value.trim();
            const nuevaArea = selectArea.value;

            // Validaciones básicas
            if (!nuevoNombre || !nuevoApellido) {
                mostrarAlerta("Por favor, ingresa tu nombre y apellidos completos.", "danger");
                return;
            }

            if (nuevoNombre.length < 2) {
                mostrarAlerta("El nombre debe tener al menos 2 caracteres.", "warning");
                return;
            }

            // Animación de estado de carga en el botón
            if (btnGuardar) {
                btnGuardar.disabled = true;
                btnGuardar.innerHTML = `<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Guardando...`;
            }

            // Simulación de respuesta del servidor (HTTP Delay)
            setTimeout(() => {
                // Actualizar la interfaz superior dinámicamente
                if (encabezadoNombre) {
                    encabezadoNombre.textContent = `${nuevoNombre}`;
                }
                
                if (encabezadoSubtitulo) {
                    encabezadoSubtitulo.textContent = `${nuevaArea} & Estudiante`;
                }

                // Actualizar los datos originales guardados
                valoresOriginales = {
                    nombre: nuevoNombre,
                    apellido: nuevoApellido,
                    area: nuevaArea
                };

                mostrarAlerta("¡Tu perfil ha sido actualizado correctamente!", "success");

                // Restablecer botón
                if (btnGuardar) {
                    btnGuardar.disabled = false;
                    btnGuardar.innerHTML = `<i class="bi bi-check-lg me-1"></i> Guardar Cambios`;
                }
            }, 800);
        });
    }

    // 2. Funcionalidad del botón Cancelar / Descartar
    if (btnCancelar) {
        btnCancelar.addEventListener("click", () => {
            inputNombre.value = valoresOriginales.nombre;
            inputApellido.value = valoresOriginales.apellido;
            selectArea.value = valoresOriginales.area;

            mostrarAlerta("Se han descartado los cambios no guardados.", "info");
        });
    }

    // Función auxiliar para desplegar alertas dinámicas con diseño
    function mostrarAlerta(mensaje, tipo) {
        if (!alertaPerfil) return;
        
        let icono = "bi-info-circle-fill";
        if (tipo === "success") icono = "bi-check-circle-fill";
        if (tipo === "danger") icono = "bi-exclamation-triangle-fill";
        if (tipo === "warning") icono = "bi-exclamation-circle-fill";

        alertaPerfil.className = `alert alert-${tipo} alert-dismissible fade show mt-3 mb-4 d-flex align-items-center gap-2`;
        alertaPerfil.innerHTML = `
            <i class="bi ${icono} fs-5"></i>
            <div>${mensaje}</div>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        `;
    }
});