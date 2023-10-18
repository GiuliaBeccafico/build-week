const target = document.getElementById('rating')
const stars = target.querySelectorAll('svg')
const radio = target.querySelectorAll('input[type=radio]')

radio.forEach(el => {
    el.classList.add('hidden')
})

