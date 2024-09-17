const counters = document.querySelectorAll(".counter");

let ms = 20;

const counterInterval = setInterval(() => {
  let endInterval = true;
  counters.forEach((counter) => {
    if (Number(counter.innerText) < Number(counter.getAttribute("max-count"))) {
      counter.innerText =
        Number(counter.innerText) +
        Number(counter.getAttribute("max-count")) / ms;
        endInterval = false;
    } 
  });

  if (endInterval) {
    clearInterval(counterInterval);
    console.log("cleared")
  }

}, ms);
