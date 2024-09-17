const choiceContainer = document.querySelector(".choice-container");

function createChoiceContainers(arr) {
  choiceContainer.innerHTML = "";
  arr.forEach((item) => {
    const container = document.createElement("div");
    container.className = "choice";
    container.innerText = item;
    choiceContainer.appendChild(container);
  });
}

document.getElementById("choice-text").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const choices = document.querySelectorAll(".choice");
    let index = 0;

    const change = setInterval(() => {
      console.log(choices[index]);
      choices.forEach((choice) => choice.classList.remove("active"));
      choices[index % choices.length].classList.add("active");
      index++;
      if (index >= choices.length * 3 + Math.random() * choices.length) {
        clearInterval(change);
      }
    }, 30);
    document.getElementById("choice-text").value = "";
  } else {
    const inputString = e.target.value;
    let choicesArr = inputString.split(",");
    choicesArr = choicesArr.map((choice) => choice.trim());
    createChoiceContainers(choicesArr);
  }
});

document.getElementById("choice-text").addEventListener("keydown", (e) => {});
