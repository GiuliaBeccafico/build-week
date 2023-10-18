const target = document.getElementById('rating')
const stars = target.querySelectorAll('svg')
const starsPath = target.querySelectorAll('path')
const radio = target.querySelectorAll('input[type=radio]')

radio.forEach(el => {
    el.classList.add('hidden')
})

starsPath.forEach(star => {
    star.addEventListener('mouseover', () => {
        star.classList.toggle('activeStar')
    })
})
