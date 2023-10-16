const target = document.getElementById('rating')
const stars = target.querySelectorAll('.star')

console.dir(target, stars)
for (let star of stars){
    star.addEventListener('mouseover', function (){
    star.style.fill = '#00FFFF'
    })
}