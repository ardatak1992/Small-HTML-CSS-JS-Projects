const button = document.getElementById("button");

button.addEventListener("click", function (e) {
  const rect = e.target.getBoundingClientRect();
  const xCoor = e.clientX - rect.x;
  const yCoor = e.clientY - rect.y;

  this.innerHTML = `<span class="circle" style="top: ${yCoor}px; left: ${xCoor}px"></span> Click Me`;
  setTimeout(() => {
    this.innerHTML = "Click Me";
  }, 500);
});
