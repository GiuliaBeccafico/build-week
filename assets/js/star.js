const target = document.getElementById('rating')
const starPath = target.querySelectorAll('path')
const radio = target.querySelectorAll('input[type=radio]')
const salvaButton = document.getElementById('salvaButton');
const commentsBox = document.getElementById('commentsBox');



radio.forEach(el => {
    el.classList.add('hidden')
})


/*********** funzionante */
for (let i = 0; i < starPath.length; i++) {
    starPath[i].index = i
    starPath[i].addEventListener('click', () => {
        starFiller(i, starPath)
    })
    starPath[i].addEventListener('mouseover', () => {
        starFiller(i, starPath)
    })
}



function starFiller(index, arr) {
    for (let j = 0; j < arr.length; j++)
        if (j <= arr[index].index) {
            arr[j].classList.remove('emptyStar')
        } else arr[j].classList.add('emptyStar')
}

/********** Salvataggio valori nel bottone a sinistra */

// Definisci un oggetto per salvare i dati
let data = {
    rating: null,
    comment: ""
};

// Gestisci l'evento click del pulsante "Salva commento" e l'evento di input nel campo di commento
salvaButton.addEventListener('click', () => {
    const selectedRating = document.querySelector('input[name="rating"]:checked');
    const comment = commentsBox.value.trim();
    if (!selectedRating) {
        alert('Inserisci la tua valutazione.');
    } else if (comment === '') {
        alert('Inserisci il tuo commento.');
    } else {
        // Salva i dati nel tuo sistema o esegui altre azioni necessarie
        data.rating = selectedRating.value;
        data.comment = comment;
        // Converti l'oggetto data in una stringa JSON e salvala nel compartimento
        const jsonData = JSON.stringify(data);
        // Salva la stringa JSON nel compartimento o esegui altre azioni necessarie
        Swal.fire('La tua valutazione è stata inviata!');
        commentsBox.value = '';// Pulisci il campo di commento

        // Pulisci la selezione delle stelle
        const stars = document.querySelectorAll('input[name="rating"]');
        stars.forEach(star => {
            star.checked = false;
        });

        // Disabilita il pulsante "Salva commento" dopo l'invio
        salvaButton.disabled = true;
    }
});

commentsBox.addEventListener('input', () => {
    if (commentsBox.value.trim() !== '' && document.querySelector('input[name="rating"]:checked')) {
        salvaButton.disabled = false;
    } else {
        salvaButton.disabled = true;
    }
});
