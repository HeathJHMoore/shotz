import locationsData from '../../helpers/data/locationsData';
import util from '../../helpers/util';

import './locations.scss';

let locations = [];

const domStringBuilder = () => {
  let domString = '';
  locations.forEach((movie) => {
    domString += `<h3>${movie.name}</h3>`;
  });
  util.printToDom('locations', domString);
};

const initializelocations = () => {
  locationsData.getLocationsData()
    .then((resp) => {
      const movieResults = resp.data.locations;
      locations = movieResults;
      domStringBuilder();
    })
    .catch(err => console.error(err));
};

export default { initializelocations };
