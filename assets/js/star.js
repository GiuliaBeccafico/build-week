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

// Gestisci l'evento click del pulsante "Salva commento"
salvaButton.addEventListener('click', () => {
    const selectedRating = document.querySelector('input[name="rating"]:checked');
    const comment = commentsBox.value.trim();
    if (!selectedRating) {
        alert('Inserisci la tua valutazione.');
    } else if (comment === '') {
        alert('Inserisci il tuo commento.');
    } else {
        // Salva i dati nel tuo sistema o esegui altre azioni necessarie
        Swal.fire('La tua valutazione è stata inviata!');
    }
});

// Abilita/disabilita il pulsante "Salva commento" in base allo stato del commento
commentsBox.addEventListener('input', () => {
    if (commentsBox.value.trim() !== '' && document.querySelector('input[name="rating"]:checked')) {
        salvaButton.disabled = false;
    } else {
        salvaButton.disabled = true;
    }
});