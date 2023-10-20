const target = document.getElementById('rating')
const starPath = target.querySelectorAll('path')
const radio = target.querySelectorAll('input[type=radio]')
const salvaButton = document.getElementById('salvaButton');
const commentsBox = document.getElementById('commentsBox');
const ratingContainer = document.getElementById('rating');
const moreInfoButton = document.getElementById('moreInfo')


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
     
        data.rating = selectedRating.value;
        data.comment = comment;// Converte l'oggetto data in una stringa JSON e salvala
        
        const jsonData = JSON.stringify(data);// Salva la stringa JSON
        
        Swal.fire('La tua valutazione è stata inviata!');
        commentsBox.value = '';// Pulisci il campo di commento
        resetStelle();
        salvaButton.classList.add('hidden')
        moreInfoButton.classList.remove('hidden')

    }
);

function resetStelle() {
    // Deseleziona tutte le stelle
    starPath.forEach(star => {
        star.classList.add('emptyStar');
    });
}

commentsBox.addEventListener('input', () => {
    if (commentsBox.value.trim() !== '' && document.querySelector('input[name="rating"]:checked')) {
        salvaButton.disabled = false;
        Swal.fire('Leave us a Feedback!')

    } else {
        salvaButton.disabled = true;
    }
    console.log(commentsBox);
});
