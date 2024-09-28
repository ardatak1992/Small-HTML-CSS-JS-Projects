const likeNum = document.getElementById("like-num");
const imgContainer = document.querySelector(".img-container");
let likes = 0;

function createHeart(x, y) {
  const heart = document.createElement("div");
  heart.className = "heart";
  const icon = document.createElement("i");
  icon.className = "fa-solid fa-heart";
  heart.appendChild(icon);
  heart.style.left = `calc(${x}px - 0.5rem)`;
  heart.style.top = `calc(${y}px - 0.5rem)`;
  return heart;
}

function increaseLikes() {
  likes++;
  likeNum.textContent = likes;
}

imgContainer.addEventListener("dblclick", (e) => {
  e.stopPropagation();
  const xCoor = e.offsetX;
  const yCoor = e.offsetY;
  const heartIcon = createHeart(xCoor, yCoor);
  imgContainer.appendChild(heartIcon);
  increaseLikes();
  setTimeout(() => {
    heartIcon.classList.add("heart-grow");
  }, 30);

  setTimeout(() => {
    heartIcon.remove();
  }, 400);
});
