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

for (let i = 0; i < starPath.length; i++){
    starPath[i].index = i
    starPath[i].addEventListener('mouseover', () => {
        for (let j = 0; j < starPath.length; j++)
        if (j <= starPath[i].index){
            starPath[j].classList.remove('emptyStar')
        } else starPath[j].classList.add('emptyStar')
    })
}

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
const stars = document.querySelectorAll(".star");
const rating = {
  value: 0,
};

stars.forEach((star) => {
  star.addEventListener("mouseover", (event) => {
    const hoveredStarIndex = parseInt(event.target.getAttribute("data-index"));
    updateStars(hoveredStarIndex);
  });

  star.addEventListener("click", (event) => {
    const clickedStarIndex = parseInt(event.target.getAttribute("data-index"));
    rating.value = clickedStarIndex + 1;
    updateStars(clickedStarIndex);
  });
});

function updateStars(hoveredStarIndex) {
  stars.forEach((star, index) => {
    if (index <= hoveredStarIndex) {
      star.src = "assets/img/star.svg";
    } else {
      star.src = "assets/img/emptyStar.svg";
    }
  });
}