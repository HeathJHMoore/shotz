import locationsData from '../../helpers/data/locationsData';
import util from '../../helpers/util';

import './locations.scss';

let locations = [];

const domStringBuilder = () => {
  let domString = '';
  locations.forEach((location) => {
    domString += `<div class="card col-12 col-sm-8 col-md-6 col-lg-4 col-xl-2" id="${location.id}" style="width: 18rem;">`;
    domString += `<img class="card-img-top" src="${location.imageUrl}" alt="Card image cap">`;
    domString += '<div class="card-body">';
    domString += `<h4 class="card-title">${location.name}</h4>`;
    domString += `<p class="card-text">${location.address}</p>`;
    domString += '</div>';
    domString += '</div>';
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
