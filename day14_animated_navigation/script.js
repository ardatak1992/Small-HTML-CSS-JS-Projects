const navbar = document.getElementById("nav-bar");
const btn = document.getElementById("btn");



btn.addEventListener("click", () => {
  navbar.classList.toggle("open");
})
