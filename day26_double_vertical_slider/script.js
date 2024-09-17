const downBtn = document.getElementById("down");
const upBtn = document.getElementById("up");
const leftSide = document.querySelector(".left-side");
const rightSide = document.querySelector(".right-side");

let slide = 0;
console.log(window.innerWidth);

function translateSlides() {
  if (slide < 0) {
    slide = 3;
  } else if (slide > 3) {
    slide = 0;
  }

  if (window.innerWidth > 700) {
    leftSide.style.transform = `translateX(0) translateY( ${
      0 + slide * 100
    }vh)`;
    rightSide.style.transform = `translateY( ${0 - slide * 100}vh)`;
  } else {
    leftSide.style.transform = `translateX( ${0 + slide * 100}vw)`;
    rightSide.style.transform = `translateX( ${0 - slide * 100}vw)`;
  }
}

downBtn.addEventListener("click", () => {
  slide++;
  translateSlides();
});

upBtn.addEventListener("click", () => {
  slide--;
  translateSlides();
});

window.addEventListener("resize", (e) => {
  leftSide.style.transition = "none";
  rightSide.style.transition = "none";
  translateSlides();
  setTimeout(() => {
    leftSide.style.transition = "transform 0.5s ease-in-out";
    rightSide.style.transition = "transform 0.5s ease-in-out";
  },50)
  console.log("gega")
});
