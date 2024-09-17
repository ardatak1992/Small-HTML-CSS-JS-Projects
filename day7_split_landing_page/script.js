const ps = document.querySelector(".ps");
const xbox = document.querySelector(".xbox");

ps.addEventListener("mouseenter", () => document.body.classList.add("hover-left"));
ps.addEventListener("mouseleave", () => document.body.classList.remove("hover-left"));
xbox.addEventListener("mouseenter", () => document.body.classList.add("hover-right"));
xbox.addEventListener("mouseleave", () => document.body.classList.remove("hover-right"));
