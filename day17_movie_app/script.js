import { config } from "./config.js";

/*
adult: false
backdrop_path: "/stKGOm8UyhuLPR9sZLjs5AkmncA.jpg"
genre_ids: (4) [16, 10751, 12, 35]
id: 1022789
media_type: "movie"
original_language: "en"
original_title: "Inside Out 2"
overview: "Teenager Riley's mind headquarters is undergoing a sudden demolition to make room for something entirely unexpected: new Emotions! Joy, Sadness, Anger, Fear and Disgust, who’ve long been running a successful operation by all accounts, aren’t sure how to feel when Anxiety shows up. And it looks like she’s not alone."
popularity: 1943.399
poster_path: "/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg"
release_date: "2024-06-11"
title: "Inside Out 2"
video: false
vote_average: 7.688
vote_count: 3136
*/


const TRENDING_URL =
  "https://api.themoviedb.org/3/trending/movie/week?language=en-US";
  const SEARCH_URL = "https://api.themoviedb.org/3/search/movie"

const IMAGE_URL = "https://image.tmdb.org/t/p/w500";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${config.ACCESS_TOKEN}`,
  },
};

const movies = document.getElementById("movies");
const searchBar = document.getElementById("search");

const getTrendingMovies = async () => {
  const response = await fetch(TRENDING_URL, options);
  const data = await response.json();
  return data.results;
};

const getsearchedMovies = async (searchText) => {
  const response = await fetch(SEARCH_URL + `?query=${searchText}&page=1`, options);
  const data = await response.json();
  return data.results;
}


const createMovieContainer = (movie) => {
  const movieContainer = document.createElement("div");
  movieContainer.className = "movie-container";
  
  const poster = document.createElement("img");
  poster.className = "poster"
  poster.src = IMAGE_URL + movie.poster_path;

  const inFoContainer = document.createElement("div");
  inFoContainer.className = "info";
  const title = document.createElement("h2")
  title.className = "name"
  title.innerText = movie.title;

  const point = document.createElement("p")
  point.className = "point"
  point.innerText = movie.vote_average.toFixed(1);
  
  if (movie.vote_average >= 7.5){
    point.style.color = "green"
  } else if(movie.vote_average >= 5.0){
    point.style.color = "yellow"
  } else {
    point.style.color = "red"
  }

  const overview = document.createElement("div");
  overview.className = "overview"
  overview.innerHTML = "<h4>Overview</h4>" + movie.overview

  inFoContainer.appendChild(title)
  inFoContainer.appendChild(point)

  movieContainer.appendChild(poster);
  movieContainer.appendChild(inFoContainer);
  movieContainer.appendChild(overview);

  return movieContainer;
};

const addMoviesToScreen = (moviesArr) => {
  moviesArr.forEach(movie => {
    const movieContainer = createMovieContainer(movie);
    movies.appendChild(movieContainer);
  })
}

addMoviesToScreen(await getTrendingMovies())


searchBar.addEventListener("keydown", async (e) => {
  if (e.key === "Enter") {
    const searchText = searchBar.value;
    const results = await getsearchedMovies(searchText)
    
    movies.innerHTML = "";
    addMoviesToScreen(results);
  }
})
