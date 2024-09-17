const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  console.log(window.scrollY, window.innerHeight);
  if (window.scrollY > window.innerHeight / 3) {
    header.classList.add("white");
    header.classList.remove("black");
    
  } else {
    header.classList.add("black");
    header.classList.remove("white");
  }
});
