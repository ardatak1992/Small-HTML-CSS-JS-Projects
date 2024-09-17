const bg = document.querySelector(".bg-image");
const loadingText = document.getElementById("loading-text");

let load = 0;
let blurValue = 30;

let int = setInterval(blurring, 30)

function blurring() {
  load+=2;
  const unload = 100 - load


  if (load > 99) {
    clearInterval(int);
  }

  loadingText.innerText = `${load}%`
  loadingText.style.opacity = unload / 100
  blurValue-= 1;
  if (blurValue >= 0) {
    bg.style.filter = `blur(${blurValue}px)`
    console.log(blurValue)
  }
}

