const stars = document.querySelectorAll(".star");
const rating = {
  value: 0,
};

stars.forEach((star) => {
  star.addEventListener("mouseover", (event) => {
    const hoveredStarIndex = parseInt(event.target.getAttribute("data-index"));
    updateStars(hoveredStarIndex);
  });

  star.addEventListener("click", (event) => {
    const clickedStarIndex = parseInt(event.target.getAttribute("data-index"));
    rating.value = clickedStarIndex + 1;
    updateStars(clickedStarIndex);
  });
});

function updateStars(hoveredStarIndex) {
  stars.forEach((star, index) => {
    if (index <= hoveredStarIndex) {
      star.src = "../assets/img/star.svg";
    } else {
      star.src = "../assets/img/emptyStar.svg";
    }
  });
}

