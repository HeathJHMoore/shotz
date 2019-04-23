import locationsData from '../../helpers/data/locationsData';
import util from '../../helpers/util';

import './locations.scss';

let locations = [];

const shootTimeClass = (shootTime) => {
  let selectedClass = '';
  switch (shootTime) {
    case 'Morning':
      selectedClass = 'bg-warning';
      break;
    case 'Afternoon':
      selectedClass = 'bg-success';
      break;
    case 'Evening':
      selectedClass = 'bg-info';
      break;
    case 'After Dark':
      selectedClass = 'bg-danger';
      break;
    default:
  }
  return selectedClass;
};

const domStringBuilder = (array) => {
  let domString = '';
  array.forEach((location) => {
    domString += `<div class="card col-12 col-sm-8 col-md-6 col-lg-4 col-xl-2 ${shootTimeClass(location.shootTime)}" id="${location.id}" style="width: 18rem;">`;
    domString += `<img class="card-img-top" src="${location.imageUrl}" alt="Card image cap">`;
    domString += '<div class="card-body">';
    domString += `<h4 class="card-title">${location.name}</h4>`;
    domString += `<p class="card-text">${location.address}</p>`;
    domString += '</div>';
    domString += '</div>';
  });
  util.printToDom('locations', domString);
};

const filterByText = (e) => {
  const searchText = e.target.value;
  const searchLocations = locations.filter((x) => {
    const hasName = x.name.includes(searchText);
    const hasAdress = x.address.includes(searchText);
    return hasName || hasAdress;
  });
  domStringBuilder(searchLocations);
};

const initializelocations = () => {
  locationsData.getLocationsData()
    .then((resp) => {
      const movieResults = resp.data.locations;
      locations = movieResults;
      domStringBuilder(locations);
    })
    .catch(err => console.error(err));
};

const newDomBuilder = (e) => {
  const button = e.target.textContent;
  if (button === 'All') {
    domStringBuilder(locations);
  } else {
    const newArray = [];
    locations.forEach((place) => {
      if (button === place.shootTime) {
        newArray.push(place);
      }
    });
    domStringBuilder(newArray);
  }
};

const eventListeners = () => {
  document.getElementById('All').addEventListener('click', newDomBuilder);
  document.getElementById('Morning').addEventListener('click', newDomBuilder);
  document.getElementById('Afternoon').addEventListener('click', newDomBuilder);
  document.getElementById('Evening').addEventListener('click', newDomBuilder);
  document.getElementById('Dark').addEventListener('click', newDomBuilder);
  document.getElementById('searchInput').addEventListener('keyup', filterByText);
};

export default {
  initializelocations,
  eventListeners,
  domStringBuilder,
  locations,
};
