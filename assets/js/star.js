const target = document.getElementById('rating')
const starPath = target.querySelectorAll('path')
const radio = target.querySelectorAll('input[type=radio]')



radio.forEach(el => {
    el.classList.add('hidden')
})


/*********** funzionante */
for (let i = 0; i < starPath.length; i++){
    starPath[i].index = i
    starPath[i].addEventListener('click', () => {
        for (let j = 0; j < starPath.length; j++)
        if (j <= starPath[i].index){
            starPath[j].classList.remove('emptyStar')
        } else starPath[j].classList.add('emptyStar')
    })
}


window.onload = function() {
    const saveButton = document.querySelector(".right button");
    const commentsBox = document.getElementById("commentsBox");
    const stars = document.querySelectorAll('input[type="radio"]');
    saveButton.addEventListener("click", function() {
        let isRatingSelected = false;
        let ratingValue = 0;
        stars.forEach(function(star) {
            if (star.checked) {
                isRatingSelected = true;
                ratingValue = star.value;
            }
        });
        if (isRatingSelected && commentsBox.value) {
            window.alert("Il tuo testo è stato salvato");
        } else {
            window.alert("Inserisci la tua valutazione");
        }
    });
};




// for (let i = 0; i < starPath.length; i++){
//     starPath[i].index = i
//     starPath[i].addEventListener('click', starFiller)
// }

// function starFiller (){
//     for (let j = 0; j < this.length; j++)
//         console.log(this.index, this.classList.value());
//         if (j <= this.index){
//             this.classList.remove('emptyStar')
//         } else this.classList.add('emptyStar')
// }
