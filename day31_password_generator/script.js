const form = document.getElementById("password-form");
const copyBtn = document.getElementById("copy-clipboard");

const characters = "abcdefghijklmnopqrstuvwxyz";
const symbols = "+-/*?%&";

function getCharacterTypeAmounts(optionsArray) {
  let passLength = Number(document.getElementById("length").value);
  const optionArrayLength = optionsArray.length - 1;
  let totalOptions = optionArrayLength;
  let characterAmounts = {};

  for (let i = 1; i <= optionArrayLength; i++) {
    const maxCharacterAmount = passLength - totalOptions + 1;
    const characterAmount = Math.ceil(
      Math.random() * (maxCharacterAmount - 1) + 1
    );

    if (i === optionArrayLength) {
      characterAmounts[`${optionsArray[i][0]}`] = passLength;
    } else {
      characterAmounts[`${optionsArray[i][0]}`] = characterAmount;
    }

    if (characterAmounts.numbers === -0) {
      console.log("ada");
    }

    passLength -= characterAmount;
    totalOptions--;
  }

  return characterAmounts;
}

function shufflePassword(password) {
  let a = password.split("");
  let n = password.length;

  for (var i = n - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
  }
  return a.join("");
}

function generatePassword(optionsArray) {
  let password = "";

  const characterAmounts = getCharacterTypeAmounts(optionsArray);
  optionsArray.forEach((option) => {
    if (option[0] === "lowercase") {
      for (let i = 0; i < characterAmounts.lowercase; i++) {
        password += characters[Math.floor(Math.random() * characters.length)];
      }
    } else if (option[0] === "uppercase") {
      for (let i = 0; i < characterAmounts.uppercase; i++) {
        password +=
          characters[
            Math.floor(Math.random() * characters.length)
          ].toUpperCase();
      }
    } else if (option[0] === "numbers") {
      for (let i = 0; i < characterAmounts.numbers; i++) {
        password += Math.floor(Math.random() * 10);
      }
    } else if (option[0] === "symbols") {
      for (let i = 0; i < characterAmounts.symbols; i++) {
        password += symbols[Math.floor(Math.random() * symbols.length)];
      }
    }
  });

  document.getElementById("password").value = shufflePassword(password);
}


function copyText(){
  const passwordInput = document.getElementById("password");

  navigator.clipboard.writeText(passwordInput.value);

  document.querySelector(".tooltip").innerText = "Copied to clipboard";

}


form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  const inputElements = [...data.entries()];
  generatePassword(inputElements);
});


copyBtn.addEventListener("click", copyText);
copyBtn.addEventListener("mouseleave", () => {
  setTimeout(() => document.querySelector(".tooltip").innerText = "Copy to clipboard", 300);
})
