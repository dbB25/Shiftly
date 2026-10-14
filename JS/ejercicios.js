
document.addEventListener("DOMContentLoaded", () => {
    const ejercicios = [...document.querySelectorAll(".exercise")];
    const icono = document.getElementById("typeIcon");
    const nombre = document.getElementById("typeName");
    const contador = document.getElementById("counter");
    const barra = document.querySelector(".progress-bar");
    const progreso = document.querySelector(".progress");
    const textoProgreso = document.querySelector(".progress-copy");
    const siguiente = document.getElementById("nextExercise");
    const consejo = document.getElementById("tip");

    const consejos = [
        'Después de "I" usamos el verbo en su forma base.',
        'Usamos "every morning" para expresar una rutina.',
        'Con "they" usamos el verbo "go".',
        "Relaciona cada palabra con su significado en español."
    ];

    let actual = 0;
    const completados = new Set();
    let opcionElegida = "";
    let primeraPareja = null;
    let palabras = [];

    // Mostrar mensajes de respuesta
    function mensaje(id, texto, tipo = "") {
        const elemento = document.getElementById(id);

        if (!elemento) return;

        elemento.textContent = texto;
        elemento.className = ("feedback " + tipo).trim();
    }

    // Actualizar la barra de progreso
    function actualizarProgreso() {
        const porcentaje = Math.round(
            (completados.size / ejercicios.length) * 100
        );

        barra.style.width = porcentaje + "%";
        progreso.setAttribute("aria-valuenow", porcentaje);

        textoProgreso.textContent =
            `${completados.size} de ${ejercicios.length} ejercicios completados`;
    }

    // Marcar un ejercicio como completado
    function completar(numero) {
        completados.add(numero);
        actualizarProgreso();
    }

    // Mostrar el ejercicio actual
    function mostrarEjercicio() {
        ejercicios.forEach((ejercicio, indice) => {
            ejercicio.hidden = indice !== actual;
        });

        icono.textContent = ejercicios[actual].dataset.icon;
        nombre.textContent = ejercicios[actual].dataset.type;
        contador.textContent =
            `Ejercicio ${actual + 1} de ${ejercicios.length}`;

        consejo.textContent = consejos[actual];

        siguiente.textContent =
            actual === ejercicios.length - 1
                ? "Ver resultado →"
                : "Siguiente ejercicio →";
    }

    // Avanzar al siguiente ejercicio
    function avanzar() {
        if (actual < ejercicios.length - 1) {
            actual++;
            mostrarEjercicio();
        } else {
            ejercicios.forEach(ejercicio => {
                ejercicio.hidden = true;
            });

            icono.textContent = "🎉";
            nombre.textContent = "Práctica finalizada";
            contador.textContent = "¡Buen trabajo!";
            consejo.textContent =
                `Completaste ${completados.size} de ${ejercicios.length} ejercicios.`;

            siguiente.textContent = "Volver al inicio";
            siguiente.dataset.restart = "true";
        }
    }

    siguiente.addEventListener("click", () => {
        if (siguiente.dataset.restart === "true") {
            reiniciarTodo();
        } else {
            avanzar();
        }
    });

    document.querySelectorAll("[data-next]").forEach(boton => {
        boton.addEventListener("click", avanzar);
    });

    // EJERCICIO 1: completar la frase
    document.getElementById("checkFill").addEventListener("click", () => {
        const respuesta = document
            .getElementById("fillInput")
            .value.trim()
            .toLowerCase();

        if (respuesta === "drink") {
            mensaje(
                "fillFeedback",
                '¡Correcto! "I drink coffee every morning."',
                "success"
            );

            completar(0);
        } else {
            mensaje(
                "fillFeedback",
                respuesta
                    ? "Inténtalo de nuevo. ¿Qué verbo usamos para tomar café?"
                    : "Escribe una respuesta antes de comprobar.",
                "error"
            );
        }
    });

    document.getElementById("fillInput").addEventListener("keydown", evento => {
        if (evento.key === "Enter") {
            document.getElementById("checkFill").click();
        }
    });

    // EJERCICIO 2: ordenar palabras
    const espacios = [...document.querySelectorAll(".blank")];
    const banco = document.getElementById("wordBank");
    const comprobarOrden = document.getElementById("checkDrag");

    function dibujarPalabras() {
        espacios.forEach((espacio, indice) => {
            espacio.textContent = palabras[indice] || "_____";
        });

        banco.querySelectorAll(".word").forEach(boton => {
            boton.disabled = palabras.includes(boton.dataset.word);
        });

        comprobarOrden.disabled =
            palabras.filter(Boolean).length !== espacios.length;
    }

    banco.querySelectorAll(".word").forEach(boton => {
        boton.addEventListener("click", () => {
            if (boton.disabled) return;

            const indice = palabras.findIndex(palabra => !palabra);

            if (indice === -1) return;

            palabras[indice] = boton.dataset.word;

            dibujarPalabras();
            mensaje("dragFeedback", "");
        });
    });

    espacios.forEach((espacio, indice) => {
        espacio.addEventListener("click", () => {
            palabras[indice] = null;
            dibujarPalabras();
        });
    });

    comprobarOrden.addEventListener("click", () => {
        if (palabras.join(" ") === "does every morning") {
            mensaje(
                "dragFeedback",
                '¡Muy bien! "She does yoga every morning."',
                "success"
            );

            completar(1);
        } else {
            mensaje(
                "dragFeedback",
                "Casi. Ordena las palabras así: does · every · morning.",
                "error"
            );
        }
    });

    document.getElementById("resetDrag").addEventListener("click", () => {
        palabras = [];
        dibujarPalabras();
        mensaje("dragFeedback", "");
    });

    // EJERCICIO 3: opción múltiple
    document.querySelectorAll(".option").forEach(boton => {
        boton.addEventListener("click", () => {
            opcionElegida = boton.dataset.answer;

            document.querySelectorAll(".option").forEach(opcion => {
                opcion.classList.remove("selected", "correct", "incorrect");
            });

            boton.classList.add("selected");
            mensaje("choiceFeedback", "");
        });
    });

    document.getElementById("checkChoice").addEventListener("click", () => {
        if (!opcionElegida) {
            mensaje(
                "choiceFeedback",
                "Selecciona una opción primero.",
                "error"
            );
            return;
        }

        if (opcionElegida === "go") {
            document
                .querySelector('[data-answer="go"]')
                .classList.add("correct");

            mensaje(
                "choiceFeedback",
                '¡Correcto! "They go to work by bus."',
                "success"
            );

            completar(2);
        } else {
            const seleccionada = document.querySelector(
                `[data-answer="${opcionElegida}"]`
            );

            seleccionada.classList.add("incorrect");

            mensaje(
                "choiceFeedback",
                'No exactamente. Con "they" usamos "go".',
                "error"
            );
        }
    });

    // EJERCICIO 4: emparejar palabras
    document.querySelectorAll(".match-item").forEach(boton => {
        boton.addEventListener("click", () => {
            if (boton.classList.contains("matched")) return;

            if (!primeraPareja) {
                primeraPareja = boton;
                boton.classList.add("selected");
                return;
            }

            if (primeraPareja === boton) {
                boton.classList.remove("selected");
                primeraPareja = null;
                return;
            }

            const correcta =
                primeraPareja.dataset.side !== boton.dataset.side &&
                primeraPareja.dataset.pair === boton.dataset.pair;

            if (correcta) {
                primeraPareja.classList.remove("selected");
                primeraPareja.classList.add("matched");
                boton.classList.add("matched");

                const todas = [...document.querySelectorAll(".match-item")]
                    .every(item => item.classList.contains("matched"));

                mensaje(
                    "matchFeedback",
                    todas
                        ? "¡Perfecto! Encontraste todas las parejas."
                        : "¡Pareja correcta!",
                    "success"
                );

                if (todas) completar(3);
            } else {
                primeraPareja.classList.remove("selected");

                mensaje(
                    "matchFeedback",
                    "Esas palabras no forman pareja. Prueba otra vez.",
                    "error"
                );
            }

            primeraPareja = null;
        });
    });

    document.getElementById("finishMatch").addEventListener("click", () => {
        const todas = [...document.querySelectorAll(".match-item")]
            .every(item => item.classList.contains("matched"));

        if (todas) {
            completar(3);

            mensaje(
                "matchFeedback",
                "¡Terminaste la práctica con éxito!",
                "success"
            );
        } else {
            mensaje(
                "matchFeedback",
                "Empareja todas las palabras antes de terminar.",
                "error"
            );
        }
    });

    // Reiniciar todos los ejercicios
    function reiniciarTodo() {
        actual = 0;
        completados.clear();
        opcionElegida = "";
        primeraPareja = null;
        palabras = [];

        document.getElementById("fillInput").value = "";

        [
            "fillFeedback",
            "dragFeedback",
            "choiceFeedback",
            "matchFeedback"
        ].forEach(id => mensaje(id, ""));

        document.querySelectorAll(".option").forEach(opcion => {
            opcion.classList.remove("selected", "correct", "incorrect");
        });

        document.querySelectorAll(".match-item").forEach(item => {
            item.classList.remove("selected", "matched");
        });

        siguiente.dataset.restart = "false";

        dibujarPalabras();
        actualizarProgreso();
        mostrarEjercicio();
    }

    // Inicializar la interfaz
    dibujarPalabras();
    actualizarProgreso();
    mostrarEjercicio();
});
