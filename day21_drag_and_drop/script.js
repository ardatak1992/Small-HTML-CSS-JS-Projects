const image = document.querySelector(".drag-image");
const boxes = document.querySelectorAll(".box");

let dragged;

image.addEventListener("dragstart", (e) => {
  dragged = e.target;

  setTimeout(() => e.target.classList.add("dragging"), 0);
});

image.addEventListener("dragend", (e) => {
  // reset the transparency
  e.target.classList.remove("dragging");
});

/* events fired on the drop targets */
boxes.forEach((box) => {
  box.addEventListener(
    "dragover",
    (e) => {
      e.preventDefault();
    },
    false
  );

  box.addEventListener("dragenter", (event) => {
    if (event.target.classList.contains("box")) {
      event.target.classList.add("hover");
    }
  });

  box.addEventListener("dragleave", (event) => {
    if (event.target.classList.contains("box")) {
      event.target.classList.remove("hover");
    }
  });

  box.addEventListener("drop", (event) => {
    event.preventDefault();
    if (event.target.classList.contains("box")) {
      event.target.classList.remove("hover");
      event.target.appendChild(dragged);
    }
  });
});
