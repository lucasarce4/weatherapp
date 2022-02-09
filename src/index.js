import fetchAPI from './getAPI';

const getTemperatureUnit = () => {
  if (document.querySelector('#tempSwitch').checked) {
    return 'imperial';
  }
  return 'metric';
};

fetchAPI('rosario', getTemperatureUnit());

const input = document.querySelector('#city-search');
input.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') fetchAPI(input.value, getTemperatureUnit());
});

document.querySelector('#search-button').addEventListener('click', () => {
  fetchAPI(input.value, getTemperatureUnit());
});

const days = document.querySelectorAll('.day');

for (let i = 0; i < days.length; i += 1) {
  days[i].textContent = i;
}

document.querySelector('#tempSwitch').addEventListener('click', () => {
  const name = document.querySelector('#city-name').textContent;
  fetchAPI(name, getTemperatureUnit());
});
