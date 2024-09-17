const slides = document.querySelectorAll(".slide");
const left = document.getElementById("left");
const right = document.getElementById("right");

let activeIndex = 0;

function changeSlide(direction) {
  slides[activeIndex].classList.remove("active");

  if (direction === "right") {
    activeIndex = activeIndex + 1 === slides.length ? 0 : activeIndex + 1;
  } else if (direction === "left") {
    activeIndex = activeIndex - 1 === -1 ? slides.length - 1 : activeIndex - 1;
    console.log(activeIndex);
  }

  slides[activeIndex].classList.add("active");
  document.body.style.backgroundImage =
    slides[activeIndex].style.backgroundImage;
}

right.addEventListener("click", () => changeSlide("right"));
left.addEventListener("click", () => changeSlide("left"));
