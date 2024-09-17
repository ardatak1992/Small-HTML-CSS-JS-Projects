const textInput = document.getElementById("text-input");
const btn = document.getElementById("btn");
const container = document.querySelector(".container")

let isOpen = false;
btn.addEventListener("click", () => {
  container.classList.toggle("active")
  isOpen = !isOpen;
  if (isOpen) {
    textInput.focus()
  }
})
