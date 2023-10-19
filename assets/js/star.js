const target = document.getElementById('rating')
const starPath = document.querySelectorAll('path')
const radio = document.querySelectorAll('input[type=radio]')
log



radio.forEach(el => {
    el.classList.add('hidden')
})


/** funzionante/** */
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
let buttonFeedback = document.querySelector('.footer .blueButton')

buttonFeedback.addEventListener('click', function () {
    Swal.fire({
        title: 'La Build-Week non è per niente stressante.Lo afferma Davide, 30 anni',
        text: 'Scherziamo, dai!! Ne ha 25',
        imageUrl: 'https://i.imgflip.com/2jsesx.jpg',
        imageWidth: 480,
        imageHeight: 414,
        imageAlt: 'Custom image',
      })
})





