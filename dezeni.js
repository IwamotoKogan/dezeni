document.addEventListener('DOMContentLoaded', () => {
    const chooseButton = document.getElementById('choose-pattern');
    const patternPopup = document.getElementById('pattern-popup');
    const closePopupButton = document.getElementById('close-popup');
    const patternGrid = document.querySelector('.pattern-grid');
    const selectedImage = document.getElementById('selected-image');
    const selectedPatternTitle = document.getElementById('selected-pattern-title');
    
    // Simulacija učitavanja dezena iz JSON fajla
    fetch('dezeni.json') // Promenite ime fajla na tačan put do vašeg JSON fajla
        .then(response => response.json())
        .then(patternsData => {
            patternsData.forEach(pattern => {
                const patternElement = document.createElement('div');
                patternElement.classList.add('pattern');
                patternElement.innerHTML = `
                    <img src="${pattern.imageUrl}" alt="${pattern.name}">
                    <p>${pattern.name}</p>
                `;
                patternElement.addEventListener('click', () => {
                    // Postavite odabrani dezen ispod
                    selectedImage.src = pattern.imageUrl;
                    selectedPatternTitle.textContent = pattern.name;
                    
                    // Zatvorite pop-up prozor
                    patternPopup.classList.add('hidden');
                });
                patternGrid.appendChild(patternElement);
            });
        });

    // Prikažite pop-up prozor kada se klikne na dugme "Izaberi dezen"
    chooseButton.addEventListener('click', () => {
        patternPopup.classList.remove('hidden');
    });

    // Zatvorite pop-up prozor kada se klikne na dugme "Zatvori"
    closePopupButton.addEventListener('click', () => {
        patternPopup.classList.add('hidden');
    });
});
