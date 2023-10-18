const stars = document.querySelectorAll("img.star");
const divStars = document.getElementById("stars");
let rating = 0;

stars.forEach((star) => {
  star.addEventListener("mouseover", (event) => {
    const hoveredStarIndex = parseInt(event.target.getAttribute("data-index"));
    if (hoveredStarIndex > rating - 1) {
      updateStars(hoveredStarIndex);
    }
  });

  star.addEventListener("click", (event) => {
    const clickedStarIndex = parseInt(event.target.getAttribute("data-index"));
    rating = clickedStarIndex + 1;
    updateStars(clickedStarIndex);
  });
});

divStars.addEventListener("mouseout", function() {
    updateStars(rating - 1);
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