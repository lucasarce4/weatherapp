// eslint-disable-next-line import/no-extraneous-dependencies
import fromUnixTime from 'date-fns/fromUnixTime';

const convertDate = (unixStamp, offset) => {
  const date = fromUnixTime(unixStamp + offset).toUTCString();
  return date;
};

const formatDate = (unixTime, offset) => {
  const dateString = convertDate(unixTime, offset).toString();
  const dayNameString = dateString.slice(0, 3);
  const dayMonthString = dateString.slice(4, 11);
  const yearString = dateString.slice(11, 16);
  const hourString = dateString.slice(16, 22);
  return {
    dayNameString,
    dayMonthString,
    yearString,
    hourString,
  };
};

const windUnit = (unit) => {
  if (unit === 'metric') {
    return 'km/h';
  }
  return 'mph';
};
const windConverter = (unit, windSpeed) => {
  if (unit === 'metric') {
    const wind = windSpeed * 3.6;
    return wind.toFixed(2);
  }
  const wind = windSpeed * 2.2;
  return wind.toFixed(2);
};

const tempUnit = (unit) => {
  if (unit === 'metric') {
    return '°C';
  }
  return '°F';
};
const dayFullNameConverter = (name) => {
  if (name === 'Sun') return 'Sunday';
  if (name === 'Mon') return 'Monday';
  if (name === 'Sat') return 'Saturday';
  if (name === 'Wed') return 'Wednesday';
  if (name === 'Thu') return 'Thursday';
  if (name === 'Fri') return 'Friday';
  return 'Tuesday';
};

const weatherIcons = (code) => {
  if (code === '01d') return `<i class="fas fa-sun yellow-icon"></i>`;
  if (code === '01n') return '<i class="fas fa-moon grey-icon"></i>';
  if (code === '02d') return '<i class="fas fa-cloud-sun grey-icon"></i>';
  if (code === '02n') return '<i class="fas fa-cloud-moon grey-icon"></i>';
  if (code === '03d' || code === '03n' || code === '04d' || code === '04n')
    return '<i class="fas fa-cloud grey-icon"></i>';
  if (code === '09d' || code === '09n' || code === '10d' || code === '10n')
    return '<i class="fas fa-cloud-rain grey-icon"></i>';
  if (code === '11d' || code === '11n')
    return '<i class="fas fa-bolt yellow-icon"></i>';
  if (code === '13d' || code === '13n')
    return '<i class="far fa-snowflake grey-icon"></i>';
  return '<i class="fas fa-smog grey-icon"></i>';
};

export {
  weatherIcons,
  convertDate,
  windUnit,
  tempUnit,
  windConverter,
  formatDate,
  dayFullNameConverter,
};
