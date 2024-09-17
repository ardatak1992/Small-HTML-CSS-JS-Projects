function changeKey(e) {
  document.getElementById("key").innerText = e.key === " " ? "SPACE" : e.key;
  document.getElementById("key-code").innerText = e.keyCode;
  document.getElementById("code").innerText = e.code;
}

document.addEventListener("keydown", (e) => {
  document.getElementById("start").classList.add("hidden");
  document.querySelector(".keys").classList.remove("hidden");
  changeKey(e);
});
