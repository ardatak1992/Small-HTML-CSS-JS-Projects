const openButtons = document.querySelectorAll(".box-header .btn");

openButtons.forEach((openButton) => {
  openButton.addEventListener("click", () => {
    
    openButton.parentElement.parentElement.classList.toggle("open");
  });
});
