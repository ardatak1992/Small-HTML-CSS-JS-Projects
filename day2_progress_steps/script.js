const prevBtn = document.getElementById("prev-button");
const nextBtn = document.getElementById("next-button");
const stepNums = document.querySelectorAll(".step-num");
const bar = document.getElementById("bar");

let currentNum = 1;

nextBtn.addEventListener("click", () => {
  currentNum++;

  update();
  if (currentNum > 4) {
    currentNum = 4;
  } 
});

prevBtn.addEventListener("click", () => {
  currentNum--;
  update();
  if (currentNum < 1) {
    currentNum = 1;
  } 
});

function update() {
  stepNums.forEach((stepNum, index) => {
    if (index + 1 <= currentNum) {
      stepNum.classList.add("active");
    } else {
      stepNum.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");

  bar.style.width = ((actives.length - 1) / (stepNums.length - 1)) * 100 + "%";

  if (currentNum === 1) {
    prevBtn.disabled = true;
  } else if (currentNum === stepNums.length) {
    nextBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
    nextBtn.disabled = false;
  }
}
