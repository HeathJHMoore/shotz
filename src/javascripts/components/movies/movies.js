import moviesData from '../../helpers/data/moviesData';
import util from '../../helpers/util';

import './movies.scss';

let movies = [];
let movieList = [];

const domStringBuilder = () => {
  let domString = '';
  movieList = [];
  movies.forEach((movie) => {
    domString += `<div class="card col-12 col-sm-6 col-md-6 col-lg-4 movie-card" id="${movie.id}card">`;
    domString += '<div class="card-body text-center">';
    domString += `<h2 class="card-title" style="border-bottom: solid 3px black;">${movie.name}</h2>`;
    // domString += `<h4>Genre: ${movie.genre}</h4>`;
    // domString += `<p class="card-text">Summary: ${movie.description}</p>`;
    domString += `<p class= "card-text" style="font-weight: bold; border: solid 1px black; background-color: black; color:white;">Release Date: ${movie.releaseDate}</p>`;
    // domString += `<p class= "card-text"> Locations: ${movie.locations.length}</p>`;
    domString += `<button class="btn btn-primary" id="${movie.id}">See more info</button>`;
    domString += '</div>';
    domString += '</div>';
    movieList.push(movie.id);
  });
  util.printToDom('movies', domString);
};

const initializeMovies = () => {
  moviesData.getMoviesData()
    .then((resp) => {
      const movieResults = resp.data.movies;
      movies = movieResults;
      domStringBuilder();
    })
    .catch(err => console.error(err));
};

const movieInfoGetter = () => {
  const newMovies = movies;
  return newMovies;
};

const movieListGetter = () => {
  const newMovieList = movieList;
  return newMovieList;
};

export default {
  initializeMovies,
  movieInfoGetter,
  movieListGetter,
  domStringBuilder,
};
