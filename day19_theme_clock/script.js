const darkBtn = document.getElementById("dark-mode");
const secondHand = document.getElementById("second");
const minuteHand = document.getElementById("minute");
const hourHand = document.getElementById("hour");
const digitalClock = document.querySelector(".digital-clock");
const dateParagrapgh = document.querySelector(".date");

const date = new Date();

const totalCount = {
  seconds: date.getSeconds(),
  minutes: date.getMinutes(),
  hours: date.getHours(),
};

const daysOfTheWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function toggleDarkMode() {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    darkBtn.innerText = "Light mode";
  } else {
    darkBtn.innerText = "Dark mode";
  }
}

function calculateHandPositions(seconds, minutes, hours) {
  secondHand.style.transform = `rotateZ(${-90 + seconds * 6}deg)`;
  minuteHand.style.transform = `rotateZ(${-90 + minutes * 6}deg)`;
  hourHand.style.transform = `rotateZ(${-90 + hours * 30 + minutes * 0.5}deg)`;
}

function writeDate(day, month) {
  return `${daysOfTheWeek[day].toUpperCase()}, ${months[month]
    .slice(0, 3)
    .toUpperCase()}`;
}

setInterval(() => {
  const date = new Date();
  totalCount.seconds++;
  if (totalCount.seconds % 60 === 0) {
    totalCount.minutes++;
  }
  if (totalCount.minutes % 60 === 0) {
    totalCount.hours++;
  }
  console.log(date.getSeconds());
  calculateHandPositions(
    totalCount.seconds,
    totalCount.minutes,
    totalCount.hours
  );

  digitalClock.innerText = `${date.getHours() - 12}:${
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
  } ${date.getHours() > 12 ? "PM" : "AM"}`;
  dateParagrapgh.innerHTML = `${writeDate(
    date.getDay(),
    date.getMonth()
  )} <span class="day">${date.getDate()}</span>`;
}, 1000);

darkBtn.addEventListener("click", toggleDarkMode);
