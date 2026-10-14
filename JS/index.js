document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".area-card");
    const botonContinuar = document.querySelector(".btn-continue");

    let areaSeleccionada = null;

    const cardInicial = document.querySelector(".area-card.seleccionada");
    if (cardInicial) {
        areaSeleccionada = cardInicial.querySelector(".area-title").textContent.trim();
    }

    cards.forEach(card => {
        card.addEventListener("click", () => {
            cards.forEach(c => c.classList.remove("seleccionada"));
            card.classList.add("seleccionada");
            areaSeleccionada = card.querySelector(".area-title").textContent.trim();
        });
    });

    botonContinuar.addEventListener("click", () => {
        if (!areaSeleccionada) {
            alert("Por favor, selecciona un área de aprendizaje para continuar.");
            return;
        }

        localStorage.setItem("areaInglesSeleccionada", areaSeleccionada);
        window.location.href = "dashboard.html";
    });
});