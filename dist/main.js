/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/fromUnixTime/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/fromUnixTime/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ fromUnixTime)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name fromUnixTime
 * @category Timestamp Helpers
 * @summary Create a date from a Unix timestamp.
 *
 * @description
 * Create a date from a Unix timestamp (in seconds). Decimal values will be discarded.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Number} unixTime - the given Unix timestamp (in seconds)
 * @returns {Date} the date
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Create the date 29 February 2012 11:45:05:
 * const result = fromUnixTime(1330515905)
 * //=> Wed Feb 29 2012 11:45:05
 */

function fromUnixTime(dirtyUnixTime) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var unixTime = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyUnixTime);
  return (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(unixTime * 1000);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/changeDOM.js":
/*!**************************!*\
  !*** ./src/changeDOM.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ "./src/utilities.js");


const weeklyWeather = (weather, temperatureUnit) => {
  const template = document.querySelector('#daysTemplate').content;
  const days = document.querySelectorAll('.dayContainer');
  // lenght property returns undefined but fixed lenght its 8
  for (let i = 1; i < 8; i += 1) {
    days[i - 1].textContent = '';
    const dateObject = _utilities__WEBPACK_IMPORTED_MODULE_0__.formatDate(
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
    day.querySelector('.dayName').textContent = `${_utilities__WEBPACK_IMPORTED_MODULE_0__.dayFullNameConverter(
      dateObject.dayNameString
    )}`;
    day.querySelector('.icon').innerHTML = _utilities__WEBPACK_IMPORTED_MODULE_0__.weatherIcons(
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
    const hourObject = _utilities__WEBPACK_IMPORTED_MODULE_0__.formatDate(
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

    hour.querySelector('.icon').innerHTML = _utilities__WEBPACK_IMPORTED_MODULE_0__.weatherIcons(
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
  const temperatureUnit = _utilities__WEBPACK_IMPORTED_MODULE_0__.tempUnit(unit);
  const windSpeed = _utilities__WEBPACK_IMPORTED_MODULE_0__.windConverter(unit, weather.current.wind_speed);
  const windSpeedUnit = _utilities__WEBPACK_IMPORTED_MODULE_0__.windUnit(unit);
  const dateObject = _utilities__WEBPACK_IMPORTED_MODULE_0__.formatDate(
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
  document.querySelector('#mainIcon').innerHTML = _utilities__WEBPACK_IMPORTED_MODULE_0__.weatherIcons(
    weather.daily[0].weather[0].icon
  );
  document.querySelector('#dayName').textContent = _utilities__WEBPACK_IMPORTED_MODULE_0__.dayFullNameConverter(
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weatherUpdate);


/***/ }),

/***/ "./src/getAPI.js":
/*!***********************!*\
  !*** ./src/getAPI.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _changeDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./changeDOM */ "./src/changeDOM.js");


async function getFullReport(lat, lon, unit, name) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&units=${unit}&APPID=439d3065b45670e79420d63e6aa69939`,
      { mode: 'cors' }
    );
    const fullInfo = await response.json();
    console.log(fullInfo);
    (0,_changeDOM__WEBPACK_IMPORTED_MODULE_0__["default"])(fullInfo, unit, name);
  } catch (err) {
    console.log(err);
  }
}

async function fetchAPI(city, unit) {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=439d3065b45670e79420d63e6aa69939`,
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchAPI);


/***/ }),

/***/ "./src/utilities.js":
/*!**************************!*\
  !*** ./src/utilities.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "weatherIcons": () => (/* binding */ weatherIcons),
/* harmony export */   "convertDate": () => (/* binding */ convertDate),
/* harmony export */   "windUnit": () => (/* binding */ windUnit),
/* harmony export */   "tempUnit": () => (/* binding */ tempUnit),
/* harmony export */   "windConverter": () => (/* binding */ windConverter),
/* harmony export */   "formatDate": () => (/* binding */ formatDate),
/* harmony export */   "dayFullNameConverter": () => (/* binding */ dayFullNameConverter)
/* harmony export */ });
/* harmony import */ var date_fns_fromUnixTime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns/fromUnixTime */ "./node_modules/date-fns/esm/fromUnixTime/index.js");
// eslint-disable-next-line import/no-extraneous-dependencies


const convertDate = (unixStamp, offset) => {
  const date = (0,date_fns_fromUnixTime__WEBPACK_IMPORTED_MODULE_0__["default"])(unixStamp + offset).toUTCString();
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




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getAPI */ "./src/getAPI.js");


const getTemperatureUnit = () => {
  if (document.querySelector('#tempSwitch').checked) {
    return 'imperial';
  }
  return 'metric';
};

(0,_getAPI__WEBPACK_IMPORTED_MODULE_0__["default"])('rosario', getTemperatureUnit());

const input = document.querySelector('#city-search');
input.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') (0,_getAPI__WEBPACK_IMPORTED_MODULE_0__["default"])(input.value, getTemperatureUnit());
});

document.querySelector('#search-button').addEventListener('click', () => {
  (0,_getAPI__WEBPACK_IMPORTED_MODULE_0__["default"])(input.value, getTemperatureUnit());
});

const days = document.querySelectorAll('.day');

for (let i = 0; i < days.length; i += 1) {
  days[i].textContent = i;
}

document.querySelector('#tempSwitch').addEventListener('click', () => {
  const name = document.querySelector('#city-name').textContent;
  (0,_getAPI__WEBPACK_IMPORTED_MODULE_0__["default"])(name, getTemperatureUnit());
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDSmU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWndDO0FBQ1c7QUFDTTtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsYUFBYSxNQUFNO0FBQ25CLFlBQVksV0FBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZixFQUFFLHNFQUFZO0FBQ2QsaUJBQWlCLG1FQUFTO0FBQzFCLFNBQVMsNERBQU07QUFDZjs7Ozs7Ozs7Ozs7Ozs7O0FDN0J5RDtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixhQUFhLE1BQU07QUFDbkIsWUFBWSxXQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZixFQUFFLHNFQUFZO0FBQ2QseURBQXlEOztBQUV6RDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLHdLQUF3Szs7QUFFeEs7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ25EcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixPQUFPO0FBQ3pCO0FBQ0EsdUJBQXVCLGtEQUFnQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRDtBQUMxRDtBQUNBLE9BQU8sRUFBRSxnQkFBZ0I7QUFDekIseURBQXlEO0FBQ3pEO0FBQ0EsT0FBTyxFQUFFLGdCQUFnQjtBQUN6QixtREFBbUQsNERBQTBCO0FBQzdFO0FBQ0EsTUFBTTtBQUNOLDJDQUEyQyxvREFBa0I7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLE9BQU87QUFDekI7QUFDQSx1QkFBdUIsa0RBQWdCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQSxPQUFPLEVBQUUsZ0JBQWdCO0FBQ3pCO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQSxPQUFPLEVBQUUsZ0JBQWdCO0FBQ3pCO0FBQ0EsNENBQTRDLG9EQUFrQjtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1RkFBdUYsY0FBYztBQUNyRztBQUNBO0FBQ0Esb0ZBQW9GLGNBQWM7QUFDbEc7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGdEQUFjO0FBQ3hDLG9CQUFvQixxREFBbUI7QUFDdkMsd0JBQXdCLGdEQUFjO0FBQ3RDLHFCQUFxQixrREFBZ0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQ7QUFDMUQ7QUFDQSxLQUFLLEVBQUUsZ0JBQWdCO0FBQ3ZCLHdEQUF3RDtBQUN4RDtBQUNBLEtBQUssRUFBRSxnQkFBZ0I7QUFDdkI7QUFDQTtBQUNBLHFCQUFxQix5QkFBeUI7QUFDOUMsd0RBQXdEO0FBQ3hEO0FBQ0EsS0FBSyxFQUFFLGNBQWM7QUFDckI7QUFDQTtBQUNBLHFCQUFxQixzQkFBc0I7QUFDM0Msa0RBQWtELG9EQUFrQjtBQUNwRTtBQUNBO0FBQ0EsbURBQW1ELDREQUEwQjtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDBCQUEwQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1RkFBdUYsS0FBSztBQUM1RjtBQUNBO0FBQ0Esb0ZBQW9GLEtBQUs7QUFDekYsQ0FBQztBQUNEO0FBQ0EsaUVBQWUsYUFBYSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDbElXO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZELElBQUksT0FBTyxJQUFJLGlDQUFpQyxLQUFLO0FBQ2xILFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNEQUFhO0FBQ2pCLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCxLQUFLO0FBQy9ELFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxRQUFRLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Q3hCO0FBQ2lEO0FBQ2pEO0FBQ0E7QUFDQSxlQUFlLGlFQUFZO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBU0U7Ozs7Ozs7VUM3RUY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05nQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsbURBQVE7QUFDakMsQ0FBQztBQUNEO0FBQ0E7QUFDQSxFQUFFLG1EQUFRO0FBQ1YsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsbURBQVE7QUFDVixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZnJvbVVuaXhUaW1lL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2NoYW5nZURPTS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2dldEFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL3V0aWxpdGllcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cblxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGZyb21Vbml4VGltZVxuICogQGNhdGVnb3J5IFRpbWVzdGFtcCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDcmVhdGUgYSBkYXRlIGZyb20gYSBVbml4IHRpbWVzdGFtcC5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENyZWF0ZSBhIGRhdGUgZnJvbSBhIFVuaXggdGltZXN0YW1wIChpbiBzZWNvbmRzKS4gRGVjaW1hbCB2YWx1ZXMgd2lsbCBiZSBkaXNjYXJkZWQuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gdW5peFRpbWUgLSB0aGUgZ2l2ZW4gVW5peCB0aW1lc3RhbXAgKGluIHNlY29uZHMpXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIGRhdGVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDcmVhdGUgdGhlIGRhdGUgMjkgRmVicnVhcnkgMjAxMiAxMTo0NTowNTpcbiAqIGNvbnN0IHJlc3VsdCA9IGZyb21Vbml4VGltZSgxMzMwNTE1OTA1KVxuICogLy89PiBXZWQgRmViIDI5IDIwMTIgMTE6NDU6MDVcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmcm9tVW5peFRpbWUoZGlydHlVbml4VGltZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIHVuaXhUaW1lID0gdG9JbnRlZ2VyKGRpcnR5VW5peFRpbWUpO1xuICByZXR1cm4gdG9EYXRlKHVuaXhUaW1lICogMTAwMCk7XG59IiwiaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgYXJndW1lbnQgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0LmlvL2ZqdWxlXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi91dGlsaXRpZXMnO1xyXG5cclxuY29uc3Qgd2Vla2x5V2VhdGhlciA9ICh3ZWF0aGVyLCB0ZW1wZXJhdHVyZVVuaXQpID0+IHtcclxuICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYXlzVGVtcGxhdGUnKS5jb250ZW50O1xyXG4gIGNvbnN0IGRheXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGF5Q29udGFpbmVyJyk7XHJcbiAgLy8gbGVuZ2h0IHByb3BlcnR5IHJldHVybnMgdW5kZWZpbmVkIGJ1dCBmaXhlZCBsZW5naHQgaXRzIDhcclxuICBmb3IgKGxldCBpID0gMTsgaSA8IDg7IGkgKz0gMSkge1xyXG4gICAgZGF5c1tpIC0gMV0udGV4dENvbnRlbnQgPSAnJztcclxuICAgIGNvbnN0IGRhdGVPYmplY3QgPSB1dGlscy5mb3JtYXREYXRlKFxyXG4gICAgICB3ZWF0aGVyLmRhaWx5W2ldLmR0LFxyXG4gICAgICB3ZWF0aGVyLnRpbWV6b25lX29mZnNldFxyXG4gICAgKTtcclxuICAgIGNvbnN0IGRheSA9IGRvY3VtZW50LmltcG9ydE5vZGUodGVtcGxhdGUsIHRydWUpO1xyXG4gICAgZGF5LnF1ZXJ5U2VsZWN0b3IoJy5taW4tdGVtcCcpLnRleHRDb250ZW50ID0gYCBNaW4uICR7TWF0aC5yb3VuZChcclxuICAgICAgd2VhdGhlci5kYWlseVtpXS50ZW1wLm1pblxyXG4gICAgKX0gJHt0ZW1wZXJhdHVyZVVuaXR9YDtcclxuICAgIGRheS5xdWVyeVNlbGVjdG9yKCcubWF4LXRlbXAnKS50ZXh0Q29udGVudCA9IGBNYXguICR7TWF0aC5yb3VuZChcclxuICAgICAgd2VhdGhlci5kYWlseVtpXS50ZW1wLm1heFxyXG4gICAgKX0gJHt0ZW1wZXJhdHVyZVVuaXR9YDtcclxuICAgIGRheS5xdWVyeVNlbGVjdG9yKCcuZGF5TmFtZScpLnRleHRDb250ZW50ID0gYCR7dXRpbHMuZGF5RnVsbE5hbWVDb252ZXJ0ZXIoXHJcbiAgICAgIGRhdGVPYmplY3QuZGF5TmFtZVN0cmluZ1xyXG4gICAgKX1gO1xyXG4gICAgZGF5LnF1ZXJ5U2VsZWN0b3IoJy5pY29uJykuaW5uZXJIVE1MID0gdXRpbHMud2VhdGhlckljb25zKFxyXG4gICAgICB3ZWF0aGVyLmRhaWx5W2ldLndlYXRoZXJbMF0uaWNvblxyXG4gICAgKTtcclxuICAgIGRheXNbaSAtIDFdLmFwcGVuZENoaWxkKGRheSk7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgaG91cmx5V2VhdGhlciA9ICh3ZWF0aGVyLCB0ZW1wZXJhdHVyZVVuaXQpID0+IHtcclxuICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNob3Vyc1RlbXBsYXRlJykuY29udGVudDtcclxuICBjb25zdCBob3VycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ob3VyQ29udGFpbmVyJyk7XHJcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCA4OyBpICs9IDEpIHtcclxuICAgIGhvdXJzW2kgLSAxXS50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgY29uc3QgaG91ck9iamVjdCA9IHV0aWxzLmZvcm1hdERhdGUoXHJcbiAgICAgIHdlYXRoZXIuaG91cmx5W2ldLmR0LFxyXG4gICAgICB3ZWF0aGVyLnRpbWV6b25lX29mZnNldFxyXG4gICAgKTtcclxuICAgIGNvbnN0IGhvdXIgPSBkb2N1bWVudC5pbXBvcnROb2RlKHRlbXBsYXRlLCB0cnVlKTtcclxuICAgIGhvdXIucXVlcnlTZWxlY3RvcignLmhvdXInKS50ZXh0Q29udGVudCA9IGhvdXJPYmplY3QuaG91clN0cmluZztcclxuICAgIGhvdXIucXVlcnlTZWxlY3RvcignLnRlbXAnKS50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoXHJcbiAgICAgIHdlYXRoZXIuaG91cmx5W2ldLnRlbXBcclxuICAgICl9ICR7dGVtcGVyYXR1cmVVbml0fWA7XHJcbiAgICBob3VyLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICcuZmVlbHNfbGlrZSdcclxuICAgICkuaW5uZXJIVE1MID0gYDxzbWFsbD5GZWVscyBsaWtlIDwvc21hbGw+JHtNYXRoLnJvdW5kKFxyXG4gICAgICB3ZWF0aGVyLmhvdXJseVtpXS5mZWVsc19saWtlXHJcbiAgICApfSAke3RlbXBlcmF0dXJlVW5pdH1gO1xyXG5cclxuICAgIGhvdXIucXVlcnlTZWxlY3RvcignLmljb24nKS5pbm5lckhUTUwgPSB1dGlscy53ZWF0aGVySWNvbnMoXHJcbiAgICAgIHdlYXRoZXIuaG91cmx5WzBdLndlYXRoZXJbMF0uaWNvblxyXG4gICAgKTtcclxuICAgIGhvdXJzW2kgLSAxXS5hcHBlbmRDaGlsZChob3VyKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBmb3JtYXRCYWNrZ3JvdW5kVXJsID0gKG5hbWUpID0+IHtcclxuICBjb25zdCBjdXJyZW50U2NyZWVuU2l6ZSA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gIGNvbnN0IG5hbWVOb1NwYWNlcyA9IG5hbWUucmVwbGFjZSgvXFxzL2csICcnKTtcclxuICBjb25zdCB1cHBlckNhc2VOYW1lID1cclxuICAgIG5hbWVOb1NwYWNlcy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIG5hbWVOb1NwYWNlcy5zbGljZSgxKTtcclxuICBpZiAoY3VycmVudFNjcmVlblNpemUgPiA4MDApIHtcclxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybChodHRwczovL3NvdXJjZS51bnNwbGFzaC5jb20vMTYwMHg5MDAvPyR7dXBwZXJDYXNlTmFtZX0pYDtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKGh0dHBzOi8vc291cmNlLnVuc3BsYXNoLmNvbS80MDB4ODAwLz8ke3VwcGVyQ2FzZU5hbWV9KWA7XHJcbn07XHJcblxyXG5jb25zdCB3ZWF0aGVyVXBkYXRlID0gKHdlYXRoZXIsIHVuaXQsIG5hbWUpID0+IHtcclxuICBjb25zdCB0ZW1wZXJhdHVyZVVuaXQgPSB1dGlscy50ZW1wVW5pdCh1bml0KTtcclxuICBjb25zdCB3aW5kU3BlZWQgPSB1dGlscy53aW5kQ29udmVydGVyKHVuaXQsIHdlYXRoZXIuY3VycmVudC53aW5kX3NwZWVkKTtcclxuICBjb25zdCB3aW5kU3BlZWRVbml0ID0gdXRpbHMud2luZFVuaXQodW5pdCk7XHJcbiAgY29uc3QgZGF0ZU9iamVjdCA9IHV0aWxzLmZvcm1hdERhdGUoXHJcbiAgICB3ZWF0aGVyLmN1cnJlbnQuZHQsXHJcbiAgICB3ZWF0aGVyLnRpbWV6b25lX29mZnNldFxyXG4gICk7XHJcbiAgd2Vla2x5V2VhdGhlcih3ZWF0aGVyLCB0ZW1wZXJhdHVyZVVuaXQpO1xyXG4gIGhvdXJseVdlYXRoZXIod2VhdGhlciwgdGVtcGVyYXR1cmVVbml0KTtcclxuICBmb3JtYXRCYWNrZ3JvdW5kVXJsKG5hbWUpO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaXR5LW5hbWUnKS50ZXh0Q29udGVudCA9IG5hbWU7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJykudGV4dENvbnRlbnQgPVxyXG4gICAgd2VhdGhlci5jdXJyZW50LndlYXRoZXJbMF0uZGVzY3JpcHRpb24uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgK1xyXG4gICAgd2VhdGhlci5jdXJyZW50LndlYXRoZXJbMF0uZGVzY3JpcHRpb24uc2xpY2UoMSk7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1cnJlbnRUZW1wJykudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKFxyXG4gICAgd2VhdGhlci5jdXJyZW50LnRlbXBcclxuICApfSAke3RlbXBlcmF0dXJlVW5pdH1gO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmZWVsc0xpa2UnKS50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoXHJcbiAgICB3ZWF0aGVyLmN1cnJlbnQuZmVlbHNfbGlrZVxyXG4gICl9ICR7dGVtcGVyYXR1cmVVbml0fWA7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICcjaHVtaWRpdHknXHJcbiAgKS50ZXh0Q29udGVudCA9IGAke3dlYXRoZXIuY3VycmVudC5odW1pZGl0eX0lYDtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2luZFNwZWVkJykudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKFxyXG4gICAgd2luZFNwZWVkXHJcbiAgKX0gJHt3aW5kU3BlZWRVbml0fWA7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICcjY2hhbmNlT2ZSYWluJ1xyXG4gICkudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyLmRhaWx5WzBdLnBvcH0gJWA7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW5JY29uJykuaW5uZXJIVE1MID0gdXRpbHMud2VhdGhlckljb25zKFxyXG4gICAgd2VhdGhlci5kYWlseVswXS53ZWF0aGVyWzBdLmljb25cclxuICApO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYXlOYW1lJykudGV4dENvbnRlbnQgPSB1dGlscy5kYXlGdWxsTmFtZUNvbnZlcnRlcihcclxuICAgIGRhdGVPYmplY3QuZGF5TmFtZVN0cmluZ1xyXG4gICk7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpbWUnKS50ZXh0Q29udGVudCA9IGRhdGVPYmplY3QuaG91clN0cmluZztcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgJyNkYXlBbmRNb250aCdcclxuICApLnRleHRDb250ZW50ID0gYCR7ZGF0ZU9iamVjdC5kYXlNb250aFN0cmluZ31gO1xyXG59O1xyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvdXJseUJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWVrQ29udGFpbmVyJykuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob3Vyc0NvbnRhaW5lcicpLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcclxufSk7XHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGFpbHlCdXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG91cnNDb250YWluZXInKS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlZWtDb250YWluZXInKS5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XHJcbn0pO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcclxuICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NpdHktbmFtZScpLnRleHRDb250ZW50O1xyXG4gIGNvbnN0IGN1cnJlbnRTaXplID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgaWYgKGN1cnJlbnRTaXplID4gODAwKSB7XHJcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tLzE2MDB4OTAwLz8ke25hbWV9KWA7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybChodHRwczovL3NvdXJjZS51bnNwbGFzaC5jb20vNDAweDgwMC8/JHtuYW1lfSlgO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdlYXRoZXJVcGRhdGU7XHJcbiIsImltcG9ydCB3ZWF0aGVyVXBkYXRlIGZyb20gJy4vY2hhbmdlRE9NJztcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldEZ1bGxSZXBvcnQobGF0LCBsb24sIHVuaXQsIG5hbWUpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9vbmVjYWxsP2xhdD0ke2xhdH0mbG9uPSR7bG9ufSZleGNsdWRlPW1pbnV0ZWx5LGFsZXJ0cyZ1bml0cz0ke3VuaXR9JkFQUElEPTQzOWQzMDY1YjQ1NjcwZTc5NDIwZDYzZTZhYTY5OTM5YCxcclxuICAgICAgeyBtb2RlOiAnY29ycycgfVxyXG4gICAgKTtcclxuICAgIGNvbnN0IGZ1bGxJbmZvID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgY29uc29sZS5sb2coZnVsbEluZm8pO1xyXG4gICAgd2VhdGhlclVwZGF0ZShmdWxsSW5mbywgdW5pdCwgbmFtZSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hBUEkoY2l0eSwgdW5pdCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mQVBQSUQ9NDM5ZDMwNjViNDU2NzBlNzk0MjBkNjNlNmFhNjk5MzlgLFxyXG4gICAgICB7IG1vZGU6ICdjb3JzJyB9XHJcbiAgICApO1xyXG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lcnJvcicpLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcclxuICAgICAgY29uc3Qgd2VhdGhlckluZm8gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIGdldEZ1bGxSZXBvcnQoXHJcbiAgICAgICAgd2VhdGhlckluZm8uY29vcmQubGF0LFxyXG4gICAgICAgIHdlYXRoZXJJbmZvLmNvb3JkLmxvbixcclxuICAgICAgICB1bml0LFxyXG4gICAgICAgIHdlYXRoZXJJbmZvLm5hbWVcclxuICAgICAgKTtcclxuICAgICAgY29uc29sZS5sb2cod2VhdGhlckluZm8pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yJykuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5sb2coZXJyKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZldGNoQVBJO1xyXG4iLCIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzXHJcbmltcG9ydCBmcm9tVW5peFRpbWUgZnJvbSAnZGF0ZS1mbnMvZnJvbVVuaXhUaW1lJztcclxuXHJcbmNvbnN0IGNvbnZlcnREYXRlID0gKHVuaXhTdGFtcCwgb2Zmc2V0KSA9PiB7XHJcbiAgY29uc3QgZGF0ZSA9IGZyb21Vbml4VGltZSh1bml4U3RhbXAgKyBvZmZzZXQpLnRvVVRDU3RyaW5nKCk7XHJcbiAgcmV0dXJuIGRhdGU7XHJcbn07XHJcblxyXG5jb25zdCBmb3JtYXREYXRlID0gKHVuaXhUaW1lLCBvZmZzZXQpID0+IHtcclxuICBjb25zdCBkYXRlU3RyaW5nID0gY29udmVydERhdGUodW5peFRpbWUsIG9mZnNldCkudG9TdHJpbmcoKTtcclxuICBjb25zdCBkYXlOYW1lU3RyaW5nID0gZGF0ZVN0cmluZy5zbGljZSgwLCAzKTtcclxuICBjb25zdCBkYXlNb250aFN0cmluZyA9IGRhdGVTdHJpbmcuc2xpY2UoNCwgMTEpO1xyXG4gIGNvbnN0IHllYXJTdHJpbmcgPSBkYXRlU3RyaW5nLnNsaWNlKDExLCAxNik7XHJcbiAgY29uc3QgaG91clN0cmluZyA9IGRhdGVTdHJpbmcuc2xpY2UoMTYsIDIyKTtcclxuICByZXR1cm4ge1xyXG4gICAgZGF5TmFtZVN0cmluZyxcclxuICAgIGRheU1vbnRoU3RyaW5nLFxyXG4gICAgeWVhclN0cmluZyxcclxuICAgIGhvdXJTdHJpbmcsXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IHdpbmRVbml0ID0gKHVuaXQpID0+IHtcclxuICBpZiAodW5pdCA9PT0gJ21ldHJpYycpIHtcclxuICAgIHJldHVybiAna20vaCc7XHJcbiAgfVxyXG4gIHJldHVybiAnbXBoJztcclxufTtcclxuY29uc3Qgd2luZENvbnZlcnRlciA9ICh1bml0LCB3aW5kU3BlZWQpID0+IHtcclxuICBpZiAodW5pdCA9PT0gJ21ldHJpYycpIHtcclxuICAgIGNvbnN0IHdpbmQgPSB3aW5kU3BlZWQgKiAzLjY7XHJcbiAgICByZXR1cm4gd2luZC50b0ZpeGVkKDIpO1xyXG4gIH1cclxuICBjb25zdCB3aW5kID0gd2luZFNwZWVkICogMi4yO1xyXG4gIHJldHVybiB3aW5kLnRvRml4ZWQoMik7XHJcbn07XHJcblxyXG5jb25zdCB0ZW1wVW5pdCA9ICh1bml0KSA9PiB7XHJcbiAgaWYgKHVuaXQgPT09ICdtZXRyaWMnKSB7XHJcbiAgICByZXR1cm4gJ8KwQyc7XHJcbiAgfVxyXG4gIHJldHVybiAnwrBGJztcclxufTtcclxuY29uc3QgZGF5RnVsbE5hbWVDb252ZXJ0ZXIgPSAobmFtZSkgPT4ge1xyXG4gIGlmIChuYW1lID09PSAnU3VuJykgcmV0dXJuICdTdW5kYXknO1xyXG4gIGlmIChuYW1lID09PSAnTW9uJykgcmV0dXJuICdNb25kYXknO1xyXG4gIGlmIChuYW1lID09PSAnU2F0JykgcmV0dXJuICdTYXR1cmRheSc7XHJcbiAgaWYgKG5hbWUgPT09ICdXZWQnKSByZXR1cm4gJ1dlZG5lc2RheSc7XHJcbiAgaWYgKG5hbWUgPT09ICdUaHUnKSByZXR1cm4gJ1RodXJzZGF5JztcclxuICBpZiAobmFtZSA9PT0gJ0ZyaScpIHJldHVybiAnRnJpZGF5JztcclxuICByZXR1cm4gJ1R1ZXNkYXknO1xyXG59O1xyXG5cclxuY29uc3Qgd2VhdGhlckljb25zID0gKGNvZGUpID0+IHtcclxuICBpZiAoY29kZSA9PT0gJzAxZCcpIHJldHVybiBgPGkgY2xhc3M9XCJmYXMgZmEtc3VuIHllbGxvdy1pY29uXCI+PC9pPmA7XHJcbiAgaWYgKGNvZGUgPT09ICcwMW4nKSByZXR1cm4gJzxpIGNsYXNzPVwiZmFzIGZhLW1vb24gZ3JleS1pY29uXCI+PC9pPic7XHJcbiAgaWYgKGNvZGUgPT09ICcwMmQnKSByZXR1cm4gJzxpIGNsYXNzPVwiZmFzIGZhLWNsb3VkLXN1biBncmV5LWljb25cIj48L2k+JztcclxuICBpZiAoY29kZSA9PT0gJzAybicpIHJldHVybiAnPGkgY2xhc3M9XCJmYXMgZmEtY2xvdWQtbW9vbiBncmV5LWljb25cIj48L2k+JztcclxuICBpZiAoY29kZSA9PT0gJzAzZCcgfHwgY29kZSA9PT0gJzAzbicgfHwgY29kZSA9PT0gJzA0ZCcgfHwgY29kZSA9PT0gJzA0bicpXHJcbiAgICByZXR1cm4gJzxpIGNsYXNzPVwiZmFzIGZhLWNsb3VkIGdyZXktaWNvblwiPjwvaT4nO1xyXG4gIGlmIChjb2RlID09PSAnMDlkJyB8fCBjb2RlID09PSAnMDluJyB8fCBjb2RlID09PSAnMTBkJyB8fCBjb2RlID09PSAnMTBuJylcclxuICAgIHJldHVybiAnPGkgY2xhc3M9XCJmYXMgZmEtY2xvdWQtcmFpbiBncmV5LWljb25cIj48L2k+JztcclxuICBpZiAoY29kZSA9PT0gJzExZCcgfHwgY29kZSA9PT0gJzExbicpXHJcbiAgICByZXR1cm4gJzxpIGNsYXNzPVwiZmFzIGZhLWJvbHQgeWVsbG93LWljb25cIj48L2k+JztcclxuICBpZiAoY29kZSA9PT0gJzEzZCcgfHwgY29kZSA9PT0gJzEzbicpXHJcbiAgICByZXR1cm4gJzxpIGNsYXNzPVwiZmFyIGZhLXNub3dmbGFrZSBncmV5LWljb25cIj48L2k+JztcclxuICByZXR1cm4gJzxpIGNsYXNzPVwiZmFzIGZhLXNtb2cgZ3JleS1pY29uXCI+PC9pPic7XHJcbn07XHJcblxyXG5leHBvcnQge1xyXG4gIHdlYXRoZXJJY29ucyxcclxuICBjb252ZXJ0RGF0ZSxcclxuICB3aW5kVW5pdCxcclxuICB0ZW1wVW5pdCxcclxuICB3aW5kQ29udmVydGVyLFxyXG4gIGZvcm1hdERhdGUsXHJcbiAgZGF5RnVsbE5hbWVDb252ZXJ0ZXIsXHJcbn07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGZldGNoQVBJIGZyb20gJy4vZ2V0QVBJJztcclxuXHJcbmNvbnN0IGdldFRlbXBlcmF0dXJlVW5pdCA9ICgpID0+IHtcclxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RlbXBTd2l0Y2gnKS5jaGVja2VkKSB7XHJcbiAgICByZXR1cm4gJ2ltcGVyaWFsJztcclxuICB9XHJcbiAgcmV0dXJuICdtZXRyaWMnO1xyXG59O1xyXG5cclxuZmV0Y2hBUEkoJ3Jvc2FyaW8nLCBnZXRUZW1wZXJhdHVyZVVuaXQoKSk7XHJcblxyXG5jb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaXR5LXNlYXJjaCcpO1xyXG5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB7XHJcbiAgaWYgKGUua2V5ID09PSAnRW50ZXInKSBmZXRjaEFQSShpbnB1dC52YWx1ZSwgZ2V0VGVtcGVyYXR1cmVVbml0KCkpO1xyXG59KTtcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gtYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgZmV0Y2hBUEkoaW5wdXQudmFsdWUsIGdldFRlbXBlcmF0dXJlVW5pdCgpKTtcclxufSk7XHJcblxyXG5jb25zdCBkYXlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRheScpO1xyXG5cclxuZm9yIChsZXQgaSA9IDA7IGkgPCBkYXlzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgZGF5c1tpXS50ZXh0Q29udGVudCA9IGk7XHJcbn1cclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZW1wU3dpdGNoJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaXR5LW5hbWUnKS50ZXh0Q29udGVudDtcclxuICBmZXRjaEFQSShuYW1lLCBnZXRUZW1wZXJhdHVyZVVuaXQoKSk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=