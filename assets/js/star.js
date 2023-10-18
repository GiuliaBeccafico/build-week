// TENTATIVO 1
// const target = document.getElementById('rating')
// const stars = target.querySelectorAll('.star')

// for (let star of stars){
//     star.addEventListener('mouseover', function (){
//         star.classList.toggle('star')
//     })

// }

const ratingStars = [...document.getElementsByClassName("star")];
const emptyStars = [...document.getElementsByClassName("emptyStar")];


function executeRating(stars) {
const starClassActive = ratingStars;
const starClassInactive = emptyStars;
const starsLength = stars.length;
let i;
}

stars.map((star) => {
star.onClick = () => {
i = stars.indexOf(star);

if (star.className === starClassInactive) {
for (i; i >= 0; --i) stars[i].className = starClassActive;
} else {
for (i; i < starsLength; ++i) stars[i].className = starClassInactive;
}
};
});

executeRating(ratingStars);
