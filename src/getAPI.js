import weatherUpdate from './changeDOM';

async function getFullReport(lat, lon, unit, name) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&units=${unit}&APPID=439d3065b45670e79420d63e6aa69939`,
      { mode: 'cors' }
    );
    const fullInfo = await response.json();
    console.log(fullInfo);
    weatherUpdate(fullInfo, unit, name);
  } catch (err) {
    console.log(err);
  }
}

async function fetchAPI(city, unit) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=439d3065b45670e79420d63e6aa69939`,
      { mode: 'cors' }
    );
    if (response.ok) {
      document.querySelector('.error').classList.remove('show');
      const weatherInfo = await response.json();
      getFullReport(
        weatherInfo.coord.lat,
        weatherInfo.coord.lon,
        unit,
        weatherInfo.name
      );
      console.log(weatherInfo);
    } else {
      document.querySelector('.error').classList.add('show');
    }
  } catch (err) {
    console.log(err);
  }
}

export default fetchAPI;
