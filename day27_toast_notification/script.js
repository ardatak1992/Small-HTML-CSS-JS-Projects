const toastContainer = document.querySelector(".toast-container");
const showBtn = document.getElementById("show-btn");
let toasts = toastContainer.querySelectorAll(".toast");
let timeInt;

function createRandomMessage() {
  const messages = [
    "Message 1",
    "Message 2",
    "Message 3",
    "Error",
    "Success",
    "Caution",
  ];

  return messages[Math.floor(Math.random() * messages.length)];
}

function createRandomColor(min, max) {
  return {
    r: Math.round(Math.random() * (max - min) + min),
    g: Math.round(Math.random() * (max - min) + min),
    b: Math.round(Math.random() * (max - min) + min),
  };
}

function createToast() {
  const toast = document.createElement("div");
  toast.className = "toast";
  const { r, g, b } = createRandomColor(0, 170);
  toast.style.color = `rgb(${r}, ${g}, ${b})`;

  const loadingBar = document.createElement("div");
  loadingBar.className = "loading-bar";
  loadingBar.style.width = "100%";
  toast.innerText = createRandomMessage();
  toast.appendChild(loadingBar);
  toast.setAttribute("isMouseOver", "false");
  toast.addEventListener("mouseover", () => {
    toast.setAttribute("isMouseOver", "true");
  });
  toast.addEventListener("mouseout", () => {
    toast.setAttribute("isMouseOver", "false");
  });
  toastContainer.appendChild(toast);
}

function removeToast() {
  toasts = toastContainer.querySelectorAll(".toast");
  toasts[0].remove();
}

function removeToastsAutoMatically() {
  timeInt = setInterval(() => {
    toasts = toastContainer.querySelectorAll(".toast");
    toasts.forEach((toast) => {
      const loadingBar = toast.querySelector(".loading-bar");

      if (toast.getAttribute("isMouseOver") === "false") {
        let loadingBarWidth = Number(
          loadingBar.style.width.slice(0, loadingBar.style.width.length - 1)
        );
        loadingBar.style.width = `${loadingBarWidth - 1}%`;
      }

      if (loadingBar.style.width === "0%") {
        toast.classList.add("remove");
        setTimeout(() => {
          toast.remove();
        }, 400);
      }
    });
    if (toasts.length === 0) {
      clearInterval(timeInt);
    }
  }, 80);
}

showBtn.addEventListener("click", () => {
  createToast();
  clearInterval(timeInt);
  toasts = toastContainer.querySelectorAll(".toast");
  removeToastsAutoMatically();
  if (toasts.length > 6) {
    removeToast();
  }
});
