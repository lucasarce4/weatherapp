import * as utils from './utilities';

const weeklyWeather = (weather, temperatureUnit) => {
  const template = document.querySelector('#daysTemplate').content;
  const days = document.querySelectorAll('.dayContainer');
  // lenght property returns undefined but fixed lenght its 8
  for (let i = 1; i < 8; i += 1) {
    days[i - 1].textContent = '';
    const dateObject = utils.formatDate(
      weather.daily[i].dt,
      weather.timezone_offset
    );
    const day = document.importNode(template, true);
    day.querySelector('.min-temp').textContent = ` Min. ${Math.round(
      weather.daily[i].temp.min
    )} ${temperatureUnit}`;
    day.querySelector('.max-temp').textContent = `Max. ${Math.round(
      weather.daily[i].temp.max
    )} ${temperatureUnit}`;
    day.querySelector('.dayName').textContent = `${utils.dayFullNameConverter(
      dateObject.dayNameString
    )}`;
    day.querySelector('.icon').innerHTML = utils.weatherIcons(
      weather.daily[i].weather[0].icon
    );
    days[i - 1].appendChild(day);
  }
};

const hourlyWeather = (weather, temperatureUnit) => {
  const template = document.querySelector('#hoursTemplate').content;
  const hours = document.querySelectorAll('.hourContainer');
  for (let i = 1; i < 8; i += 1) {
    hours[i - 1].textContent = '';
    const hourObject = utils.formatDate(
      weather.hourly[i].dt,
      weather.timezone_offset
    );
    const hour = document.importNode(template, true);
    hour.querySelector('.hour').textContent = hourObject.hourString;
    hour.querySelector('.temp').textContent = `${Math.round(
      weather.hourly[i].temp
    )} ${temperatureUnit}`;
    hour.querySelector(
      '.feels_like'
    ).innerHTML = `<small>Feels like </small>${Math.round(
      weather.hourly[i].feels_like
    )} ${temperatureUnit}`;

    hour.querySelector('.icon').innerHTML = utils.weatherIcons(
      weather.hourly[0].weather[0].icon
    );
    hours[i - 1].appendChild(hour);
  }
};

const formatBackgroundUrl = (name) => {
  const currentScreenSize = window.innerWidth;
  const nameNoSpaces = name.replace(/\s/g, '');
  const upperCaseName =
    nameNoSpaces.charAt(0).toUpperCase() + nameNoSpaces.slice(1);
  if (currentScreenSize > 800) {
    document.body.style.backgroundImage = `url(https://source.unsplash.com/1600x900/?${upperCaseName})`;
    return;
  }
  document.body.style.backgroundImage = `url(https://source.unsplash.com/400x800/?${upperCaseName})`;
};

const weatherUpdate = (weather, unit, name) => {
  const temperatureUnit = utils.tempUnit(unit);
  const windSpeed = utils.windConverter(unit, weather.current.wind_speed);
  const windSpeedUnit = utils.windUnit(unit);
  const dateObject = utils.formatDate(
    weather.current.dt,
    weather.timezone_offset
  );
  weeklyWeather(weather, temperatureUnit);
  hourlyWeather(weather, temperatureUnit);
  formatBackgroundUrl(name);
  document.querySelector('#city-name').textContent = name;
  document.querySelector('#description').textContent =
    weather.current.weather[0].description.charAt(0).toUpperCase() +
    weather.current.weather[0].description.slice(1);
  document.querySelector('#currentTemp').textContent = `${Math.round(
    weather.current.temp
  )} ${temperatureUnit}`;
  document.querySelector('#feelsLike').textContent = `${Math.round(
    weather.current.feels_like
  )} ${temperatureUnit}`;
  document.querySelector(
    '#humidity'
  ).textContent = `${weather.current.humidity}%`;
  document.querySelector('#windSpeed').textContent = `${Math.round(
    windSpeed
  )} ${windSpeedUnit}`;
  document.querySelector(
    '#chanceOfRain'
  ).textContent = `${weather.daily[0].pop} %`;
  document.querySelector('#mainIcon').innerHTML = utils.weatherIcons(
    weather.daily[0].weather[0].icon
  );
  document.querySelector('#dayName').textContent = utils.dayFullNameConverter(
    dateObject.dayNameString
  );
  document.querySelector('#time').textContent = dateObject.hourString;
  document.querySelector(
    '#dayAndMonth'
  ).textContent = `${dateObject.dayMonthString}`;
};

document.querySelector('#hourlyButton').addEventListener('click', () => {
  document.querySelector('.weekContainer').classList.remove('show');
  document.querySelector('.hoursContainer').classList.add('show');
});

document.querySelector('#dailyButton').addEventListener('click', () => {
  document.querySelector('.hoursContainer').classList.remove('show');
  document.querySelector('.weekContainer').classList.add('show');
});

window.addEventListener('resize', () => {
  const name = document.querySelector('#city-name').textContent;
  const currentSize = window.innerWidth;
  if (currentSize > 800) {
    document.body.style.backgroundImage = `url(https://source.unsplash.com/1600x900/?${name})`;
    return;
  }
  document.body.style.backgroundImage = `url(https://source.unsplash.com/400x800/?${name})`;
});

export default weatherUpdate;
