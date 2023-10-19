const target = document.getElementById('rating')
const starPath = target.querySelectorAll('path')
const radio = target.querySelectorAll('input[type=radio]')



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