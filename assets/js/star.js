const target = document.getElementById('rating')
const stars = target.querySelectorAll('.star')

for (let star of stars){
    star.addEventListener('mouseover', function (){
        star.classList.toggle('star')
    })
   
}

