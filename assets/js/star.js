const target = document.getElementById('rating')
const stars = target.querySelectorAll('svg')
const starsPath = target.querySelectorAll('path')
const radio = target.querySelectorAll('input[type=radio]')

radio.forEach(el => {
    el.classList.add('hidden')
})

<<<<<<< HEAD
starsPath.forEach(star => {
    star.addEventListener('click', () => {
        star.classList.toggle('activeStar')
    })
})
=======

    for (let i = 0; i <starsPath.length; i++){
        starsPath[i].addEventListener('click', () => {
            for (let j = 0; j <= i; j++){
                
                if (starsPath[j].classList.value == 'emptyStar'){
                    starsPath[j].classList.remove('emptyStar')
                    starsPath[j].classList.add('activeStar')
                } 
                    else if (starsPath[j].classList.value == 'activeStar'){
                    starsPath[j].classList.add('emptyStar')
                    starsPath[j].classList.remove('activeStar')
                }
                console.log(starsPath[j]);
            }
        })
    }

>>>>>>> f86400a (prove star filling)
