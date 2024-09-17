const audioFiles = document.querySelectorAll("audio");
const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    audioFiles.forEach((audio) => {
      if (audio.getAttribute("name") === btn.innerText) {
        audio.play();
      } else {
        audio.pause();
        audio.currentTime = 0;
      }
    });
  });
});
