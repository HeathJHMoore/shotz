import util from '../../helpers/util';
import movieStuff from '../movies/movies';
import locationStuff from '../locations/locations';

const closeMovie = () => {
  movieStuff.domStringBuilder();
  locationStuff.domStringBuilder(locationStuff.locationsGetter());
  document.getElementById('filters').style.visibility = 'visible';
};

const movieLocationsBuilder = (locations) => {
  const locationObjects = [];
  locationStuff.locationsGetter().forEach((place) => {
    if (locations.indexOf(place.id) !== -1) {
      locationObjects.push(place);
    }
  });
  locationStuff.domStringBuilder(locationObjects);
};

const singleMovieBuilder = (movieToPrint) => {
  document.getElementById('filters').style.visibility = 'hidden';
  movieStuff.movieInfoGetter().forEach((film) => {
    if (film.id === movieToPrint) {
      let domString = '';
      domString += `<div class="card col-12 col-sm-6 col-md-6 col-lg-4 movie-card" id="${film.id}card">`;
      domString += '<div class="card-body text-center">';
      domString += `<h2 class="card-title" style="border-bottom: solid 3px black;">${film.name}</h2>`;
      domString += `<h4>Genre: ${film.genre}</h4>`;
      domString += `<p class="card-text">Summary: ${film.description}</p>`;
      domString += `<p class= "card-text" style="font-weight: bold; border: solid 1px black; background-color: black; color:white;">Release Date: ${film.releaseDate}</p>`;
      domString += `<p class= "card-text"> Locations: ${film.locations.length}</p>`;
      domString += '<button class="btn btn-primary" id="close">Close</button>';
      domString += '</div>';
      domString += '</div>';
      util.printToDom('movies', domString);
      document.getElementById('close').addEventListener('click', closeMovie);
      const locationsToPrint = film.locations;
      movieLocationsBuilder(locationsToPrint);
    }
  });
};


const singleMovieEvent = (e) => {
  const listOfMovies = movieStuff.movieListGetter();
  if (listOfMovies.indexOf(e.target.id) !== -1) {
    singleMovieBuilder(e.target.id);
  }
};

const movieButtonEvents = () => {
  document.addEventListener('click', singleMovieEvent);
};

export default { movieButtonEvents };
