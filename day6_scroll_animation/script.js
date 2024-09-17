const contents = document.querySelectorAll(".content");

function changeCoordinate(content, xCoor) {
  const dimentions = content.getBoundingClientRect();
  
  if (
    dimentions.top + dimentions.height * 1.2 <
    document.documentElement.clientHeight
  ) {
    content.classList.add("show");
  } else {
    content.classList.remove("show")
  }
}



window.addEventListener("scroll", () => {
  contents.forEach((content) => changeCoordinate(content, 0));
});
