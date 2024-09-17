const canvas = document.getElementById("canvas");
const colorPicker = document.getElementById("color-picker");
const size = document.getElementById("size");
const decreaseBtn = document.getElementById("decrease-size");
const increaseBtn = document.getElementById("increase-size");
const clearBtn = document.getElementById("clear-btn");

const ctx = canvas.getContext("2d");

ctx.lineCap = "round";
let isDrawing = false;
ctx.lineWidth = size.value;
ctx.strokeStyle = colorPicker.value;
ctx.fillStyle = colorPicker.value;

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size.value / 2, 0, Math.PI * 2);
  ctx.fillStyle = colorPicker.value;
  ctx.fill();
}

function startDrawing(e) {
  drawCircle(e.offsetX, e.offsetY);
  ctx.beginPath();
  ctx.moveTo(e.offsetX, e.offsetY);
  isDrawing = true;
}

function draw(e) {
  if (isDrawing == true) {
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
  }
}

function stopDrawing() {
  isDrawing = false;
}

canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", stopDrawing);

decreaseBtn.addEventListener("click", () => {
  if (size.value > 5) {
    size.value = Number(size.value) - 5;
  }
});

increaseBtn.addEventListener("click", () => {
  if (size.value < 55) {
    size.value = Number(size.value) + 5;
    ctx.lineWidth = size.value;
  }
});

colorPicker.addEventListener("change", () => {
  ctx.strokeStyle = colorPicker.value;
  ctx.fillStyle = colorPicker.value;
});

clearBtn.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
