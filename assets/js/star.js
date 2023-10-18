const target = document.getElementById('rating')
const stars = target.querySelectorAll('.star')
const starPath = target.querySelectorAll('path')
const radio = target.querySelectorAll('input[type=radio]')
const node1 = stars.item(0)


radio.forEach(el => {
    el.classList.add('hidden')
})



for (let i = 0; i < starPath.length; i++){
    starPath[i].index = i
    starPath[i].addEventListener('click', )
}

function starFiller (index) {
    for (let j = 0; j < starPath.length; j++)
    if (j <= index){
        starPath[j].classList.remove('emptyStar')
    } else starPath[j].classList.add('emptyStar')
}