import moviesData from '../../helpers/data/moviesData';
import util from '../../helpers/util';

import './movies.scss';

let movies = [];

const domStringBuilder = () => {
  let domString = '';
  movies.forEach((movie) => {
    domString += `<div class="card col-12 col-sm-6 col-md-6 col-lg-4" id="${movie.id}">`;
    domString += '<div class="card-body text-center">';
    domString += `<h2 class="card-title" style="border-bottom: solid 3px black;">${movie.name}</h2>`;
    domString += `<h4>Genre: ${movie.genre}</h4>`;
    domString += `<p class="card-text">Summary: ${movie.description}</p>`;
    domString += `<p class= "card-text" style="font-weight: bold; border: solid 1px black; background-color: black; color:white;">Release Date: ${movie.releaseDate}</p>`;
    domString += `<p class= "card-text"> Locations: ${movie.locations.length}</p>`;
    domString += '</div>';
    domString += '</div>';
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

export default { initializeMovies };
