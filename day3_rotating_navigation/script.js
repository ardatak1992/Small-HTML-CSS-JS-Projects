const buttonBg = document.getElementById("button-bg");
const articleContainer = document.getElementById("article-container");
const menuItems = document.querySelectorAll(".menu-item");

let menuOpen = false;

buttonBg.addEventListener("click", () => {
  if (!menuOpen) {
    buttonBg.style = "transform: rotateZ(180deg);";
    openMenu();
    menuOpen = true;
  } else {
    buttonBg.style = "transform: rotateZ(0deg);";
    closeMenu();
    menuOpen = false;
  }
});

function openMenu() {
  articleContainer.style.transform = "rotateZ(-20deg)";
  menuItems.forEach((menuItem, index) => {
    menuItem.style.transform = `translateX(${10 + index * 30}px)`;
  });
}

function closeMenu() {
  articleContainer.style.transform = "rotateZ(0deg)";
  menuItems.forEach((menuItem, index) => {
    menuItem.style.transform = `translateX(-400px)`;
  });
}
