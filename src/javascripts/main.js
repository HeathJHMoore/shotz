import 'bootstrap';
import '../styles/main.scss';
import movies from './components/movies/movies';
import locations from './components/locations/locations';
import singleEvent from './components/single-movie/single-movie';

const init = () => {
  movies.initializeMovies();
  locations.initializelocations();
  locations.eventListeners();
  singleEvent.movieButtonEvents();
};

init();
