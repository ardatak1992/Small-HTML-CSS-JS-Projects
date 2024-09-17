const glasses = document.querySelectorAll(".small");
const water = document.querySelector(".water");
const space = document.querySelector(".space");
const remained = document.getElementById("remained");
const completed = document.getElementById("completed");

function calculateWater() {
  const fullGlasses = document.querySelectorAll(".small.active");
  const fillPercentage = ((fullGlasses.length / glasses.length) * 100).toFixed(
    1
  );
  water.style.height = `${fillPercentage}%`;
  space.style.height = `${100 - fillPercentage}%`;
  completed.innerHTML = fullGlasses.length === 0 ? "" : `${fillPercentage}%`;
  remained.innerHTML = `${2 - fullGlasses.length * 0.25}L`;
}

function higlightCups(index) {
  if (glasses[index].classList.contains("active")) {
    index--;
  }
  for (let i = 0; i < glasses.length; i++) {
    if (i <= index) {
      glasses[i].classList.add("active");
    } else {
      glasses[i].classList.remove("active");
    }
  }
}

glasses.forEach((glass, index) =>
  glass.addEventListener("click", () => {
    higlightCups(index);
    calculateWater();
  })
);
