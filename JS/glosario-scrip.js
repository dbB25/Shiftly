// 1. Alternar visibilidad de la lista de vocabulario en la tarjeta
function toggleVocab(button) {
    const cardBody = button.closest('.card-body');
    const vocabList = cardBody.querySelector('.vocab-list');
    
    button.classList.toggle('active');
    vocabList.classList.toggle('d-none');
}

// 2. Revelar / Ocultar traducción individual
function toggleTranslation(button) {
    const translationText = button.nextElementSibling;
    
    if (translationText.classList.contains('d-none')) {
        translationText.classList.remove('d-none');
        button.innerText = 'Ocultar traducción';
    } else {
        translationText.classList.add('d-none');
        button.innerText = 'Revelar traducción';
    }
}

// 3. Pronunciación de voz interactiva (Text-to-Speech)
function speakText(text, lang = 'en-US') {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel(); // Detener pronunciaciones previas
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = lang;
        utterance.rate = 0.9; // Velocidad ligeramente pausada para aprendizaje
        window.speechSynthesis.speak(utterance);
    } else {
        alert('Tu navegador no soporta reproducción de voz interactiva.');
    }
}

// 4. Filtrar por botones de sector técnico
function filterBySector(sector, button) {
    // Actualizar botones activos
    document.querySelectorAll('.btn-filter').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const cards = document.querySelectorAll('.sector-card-wrapper');
    let visibleCount = 0;

    cards.forEach(card => {
        const cardSector = card.getAttribute('data-sector');
        if (sector === 'all' || cardSector === sector) {
            card.classList.remove('d-none');
            visibleCount++;
        } else {
            card.classList.add('d-none');
        }
    });

    toggleNoResults(visibleCount === 0);
}

// 5. Buscador en tiempo real (por concepto o traducción)
function filterGlossary() {
    const query = document.getElementById('searchInput').value.toLowerCase().trim();
    const cards = document.querySelectorAll('.sector-card-wrapper');
    let visibleCards = 0;

    cards.forEach(card => {
        const vocabItems = card.querySelectorAll('.vocab-item');
        let cardMatches = false;

        vocabItems.forEach(item => {
            const termData = item.getAttribute('data-term').toLowerCase();
            if (termData.includes(query)) {
                item.classList.remove('d-none');
                cardMatches = true;
            } else {
                item.classList.add('d-none');
            }
        });

        if (cardMatches || query === '') {
            card.classList.remove('d-none');
            visibleCards++;

            // Abrir automáticamente el vocabulario si se está buscando
            if (query !== '') {
                const accordionBtn = card.querySelector('.btn-purple-accordion');
                const vocabList = card.querySelector('.vocab-list');
                accordionBtn.classList.add('active');
                vocabList.classList.remove('d-none');
            }
        } else {
            card.classList.add('d-none');
        }
    });

    toggleNoResults(visibleCards === 0);
}

// Mostrar u ocultar mensaje de "No resultados"
function toggleNoResults(show) {
    const noResults = document.getElementById('noResults');
    if (show) {
        noResults.classList.remove('d-none');
    } else {
        noResults.classList.add('d-none');
    }
}