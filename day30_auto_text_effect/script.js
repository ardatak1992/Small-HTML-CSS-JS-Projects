const text = document.getElementById("text");
const speed = document.getElementById("speed");

function writeText(context) {
  for (let i = 0; i < context.length; i++) {
    const firstTime = setTimeout(() => {
      text.textContent = text.textContent + context[i];
      if (i === context.length - 1) {
        setTimeout(() => {
          text.textContent = "";
          clearTimeout(firstTime);
          writeText(context);
        }, 1000);
      }
    }, ((i + 1) * 200) / document.getElementById("speed").value);
  }
}

writeText("We love programming");
