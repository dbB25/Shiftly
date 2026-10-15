// Variable para almacenar el área seleccionada (por defecto Programación)
let selectedAreaName = "Programación";

// Función para seleccionar tarjeta de área
function selectArea(element, areaName) {
    document.querySelectorAll('.area-card').forEach(card => card.classList.remove('seleccionada'));
    element.classList.add('seleccionada');
    selectedAreaName = areaName;
    document.getElementById('selected-area-label').innerText = areaName;
}

// Función para redirigir al flujo de diagnóstico del dashboard
function confirmAreaSelection() {
    localStorage.setItem('selectedArea', selectedAreaName);
    // Navegación hacia la carpeta /dashboard/
    window.location.href = '../dashboard/diagnostico.html';
}

// Función de filtrado de miembros del equipo
function filterTeam(role) {
    const cards = document.querySelectorAll('.team-card');
    const buttons = document.querySelectorAll('.btn-filter');

    buttons.forEach(btn => btn.classList.remove('active'));
    if (document.getElementById(`filter-${role}`)) {
        document.getElementById(`filter-${role}`).classList.add('active');
    }

    cards.forEach(card => {
        if (role === 'all' || card.getAttribute('data-role') === role) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Vista previa de imagen subida para foto de perfil
function previewImage(event, containerId) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const container = document.getElementById(containerId);
            container.innerHTML = `<img src="${e.target.result}" alt="Foto de perfil" style="width: 100%; height: 100%; object-fit: cover;">`;
        }
        reader.readAsDataURL(file);
    }
}