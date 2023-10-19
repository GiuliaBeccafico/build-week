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

// gestisce l'evento click del pulsante "Salva commento" e l'evento di input nel campo di commento
salvaButton.addEventListener('click', () => {
    const selectedRating = document.querySelector('input[name="rating"]:checked');
    const comment = commentsBox.value.trim();
    if (!selectedRating) {
        alert('Inserisci la tua valutazione.');
    } else if (comment === '') {
        alert('Inserisci il tuo commento.');
    } else {
        
        data.rating = selectedRating.value;
        data.comment = comment;// Converte l'oggetto data in una stringa JSON e salvala
        
        const jsonData = JSON.stringify(data);// Salva la stringa JSON
        
        Swal.fire('La tua valutazione è stata inviata!');
        commentsBox.value = '';// Pulisci il campo di commento


        
        salvaButton.disabled = true; // Disabilita il pulsante "Salva commento" dopo l'invio
    }
});

commentsBox.addEventListener('input', () => {
    if (commentsBox.value.trim() !== '' && document.querySelector('input[name="rating"]:checked')) {
        salvaButton.disabled = false;
    } else {
        salvaButton.disabled = true;
    }
});
