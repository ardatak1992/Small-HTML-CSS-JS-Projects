const emailLabel = document.getElementById("email-label");
const passwordLabel = document.getElementById("password-label");
const email = document.getElementById("email");
const password = document.getElementById("password");

const addSpanToLabel = (label) => {
  const text = label.innerText;
  label.innerHTML = "";
  for (let i = 0; i < text.length; i++) {
    label.innerHTML += `<span>${text[i]}</span>`;
  }
};

const addAnimation = (label, translatePx) => {
  const labelSpans = label.querySelectorAll(`span`);
  
  labelSpans.forEach((letter, i) => {
    letter.style.transitionDelay = `${0.1 * i}s`
    letter.style.transform = `translateY(${translatePx}px)`;
  });
};

addSpanToLabel(emailLabel);
addSpanToLabel(passwordLabel);

email.addEventListener("focus", () => {
  addAnimation(emailLabel, -30);
});
email.addEventListener("focusout", () => {
  addAnimation(emailLabel, 0);
});

password.addEventListener("focus", () => {
  addAnimation(passwordLabel, -30);
});
password.addEventListener("focusout", () => {
  addAnimation(passwordLabel, 0);
});

console.log(emailLabel.innerHTML);
