const joke = document.getElementById("joke");
const jokeBtn = document.getElementById("joke-btn");

const getJoke = async () => {
  const response = await fetch("https://icanhazdadjoke.com", {
    headers: {
      Accept: "application/json",
    },
  });
  const result = await response.json();

  joke.innerText = result.joke;
}

jokeBtn.addEventListener("click", getJoke);
document.addEventListener("DOMContentLoaded", getJoke);
