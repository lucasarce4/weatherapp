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
    (0,_changeDOM__WEBPACK_IMPORTED_MODULE_0__["default"])(fullInfo, unit, name);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTmdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixtREFBUTtBQUNqQyxDQUFDO0FBQ0Q7QUFDQTtBQUNBLEVBQUUsbURBQVE7QUFDVixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGlCQUFpQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxtREFBUTtBQUNWLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9mcm9tVW5peFRpbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvY2hhbmdlRE9NLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvZ2V0QVBJLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvdXRpbGl0aWVzLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuXG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZnJvbVVuaXhUaW1lXG4gKiBAY2F0ZWdvcnkgVGltZXN0YW1wIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENyZWF0ZSBhIGRhdGUgZnJvbSBhIFVuaXggdGltZXN0YW1wLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ3JlYXRlIGEgZGF0ZSBmcm9tIGEgVW5peCB0aW1lc3RhbXAgKGluIHNlY29uZHMpLiBEZWNpbWFsIHZhbHVlcyB3aWxsIGJlIGRpc2NhcmRlZC5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSB1bml4VGltZSAtIHRoZSBnaXZlbiBVbml4IHRpbWVzdGFtcCAoaW4gc2Vjb25kcylcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgZGF0ZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENyZWF0ZSB0aGUgZGF0ZSAyOSBGZWJydWFyeSAyMDEyIDExOjQ1OjA1OlxuICogY29uc3QgcmVzdWx0ID0gZnJvbVVuaXhUaW1lKDEzMzA1MTU5MDUpXG4gKiAvLz0+IFdlZCBGZWIgMjkgMjAxMiAxMTo0NTowNVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZyb21Vbml4VGltZShkaXJ0eVVuaXhUaW1lKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgdW5peFRpbWUgPSB0b0ludGVnZXIoZGlydHlVbml4VGltZSk7XG4gIHJldHVybiB0b0RhdGUodW5peFRpbWUgKiAxMDAwKTtcbn0iLCJpbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IHR5cGVvZiBhcmd1bWVudCA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXQuaW8vZmp1bGVcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuL3V0aWxpdGllcyc7XHJcblxyXG5jb25zdCB3ZWVrbHlXZWF0aGVyID0gKHdlYXRoZXIsIHRlbXBlcmF0dXJlVW5pdCkgPT4ge1xyXG4gIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RheXNUZW1wbGF0ZScpLmNvbnRlbnQ7XHJcbiAgY29uc3QgZGF5cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYXlDb250YWluZXInKTtcclxuICAvLyBsZW5naHQgcHJvcGVydHkgcmV0dXJucyB1bmRlZmluZWQgYnV0IGZpeGVkIGxlbmdodCBpdHMgOFxyXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgODsgaSArPSAxKSB7XHJcbiAgICBkYXlzW2kgLSAxXS50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgY29uc3QgZGF0ZU9iamVjdCA9IHV0aWxzLmZvcm1hdERhdGUoXHJcbiAgICAgIHdlYXRoZXIuZGFpbHlbaV0uZHQsXHJcbiAgICAgIHdlYXRoZXIudGltZXpvbmVfb2Zmc2V0XHJcbiAgICApO1xyXG4gICAgY29uc3QgZGF5ID0gZG9jdW1lbnQuaW1wb3J0Tm9kZSh0ZW1wbGF0ZSwgdHJ1ZSk7XHJcbiAgICBkYXkucXVlcnlTZWxlY3RvcignLm1pbi10ZW1wJykudGV4dENvbnRlbnQgPSBgIE1pbi4gJHtNYXRoLnJvdW5kKFxyXG4gICAgICB3ZWF0aGVyLmRhaWx5W2ldLnRlbXAubWluXHJcbiAgICApfSAke3RlbXBlcmF0dXJlVW5pdH1gO1xyXG4gICAgZGF5LnF1ZXJ5U2VsZWN0b3IoJy5tYXgtdGVtcCcpLnRleHRDb250ZW50ID0gYE1heC4gJHtNYXRoLnJvdW5kKFxyXG4gICAgICB3ZWF0aGVyLmRhaWx5W2ldLnRlbXAubWF4XHJcbiAgICApfSAke3RlbXBlcmF0dXJlVW5pdH1gO1xyXG4gICAgZGF5LnF1ZXJ5U2VsZWN0b3IoJy5kYXlOYW1lJykudGV4dENvbnRlbnQgPSBgJHt1dGlscy5kYXlGdWxsTmFtZUNvbnZlcnRlcihcclxuICAgICAgZGF0ZU9iamVjdC5kYXlOYW1lU3RyaW5nXHJcbiAgICApfWA7XHJcbiAgICBkYXkucXVlcnlTZWxlY3RvcignLmljb24nKS5pbm5lckhUTUwgPSB1dGlscy53ZWF0aGVySWNvbnMoXHJcbiAgICAgIHdlYXRoZXIuZGFpbHlbaV0ud2VhdGhlclswXS5pY29uXHJcbiAgICApO1xyXG4gICAgZGF5c1tpIC0gMV0uYXBwZW5kQ2hpbGQoZGF5KTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBob3VybHlXZWF0aGVyID0gKHdlYXRoZXIsIHRlbXBlcmF0dXJlVW5pdCkgPT4ge1xyXG4gIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvdXJzVGVtcGxhdGUnKS5jb250ZW50O1xyXG4gIGNvbnN0IGhvdXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhvdXJDb250YWluZXInKTtcclxuICBmb3IgKGxldCBpID0gMTsgaSA8IDg7IGkgKz0gMSkge1xyXG4gICAgaG91cnNbaSAtIDFdLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICBjb25zdCBob3VyT2JqZWN0ID0gdXRpbHMuZm9ybWF0RGF0ZShcclxuICAgICAgd2VhdGhlci5ob3VybHlbaV0uZHQsXHJcbiAgICAgIHdlYXRoZXIudGltZXpvbmVfb2Zmc2V0XHJcbiAgICApO1xyXG4gICAgY29uc3QgaG91ciA9IGRvY3VtZW50LmltcG9ydE5vZGUodGVtcGxhdGUsIHRydWUpO1xyXG4gICAgaG91ci5xdWVyeVNlbGVjdG9yKCcuaG91cicpLnRleHRDb250ZW50ID0gaG91ck9iamVjdC5ob3VyU3RyaW5nO1xyXG4gICAgaG91ci5xdWVyeVNlbGVjdG9yKCcudGVtcCcpLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChcclxuICAgICAgd2VhdGhlci5ob3VybHlbaV0udGVtcFxyXG4gICAgKX0gJHt0ZW1wZXJhdHVyZVVuaXR9YDtcclxuICAgIGhvdXIucXVlcnlTZWxlY3RvcihcclxuICAgICAgJy5mZWVsc19saWtlJ1xyXG4gICAgKS5pbm5lckhUTUwgPSBgPHNtYWxsPkZlZWxzIGxpa2UgPC9zbWFsbD4ke01hdGgucm91bmQoXHJcbiAgICAgIHdlYXRoZXIuaG91cmx5W2ldLmZlZWxzX2xpa2VcclxuICAgICl9ICR7dGVtcGVyYXR1cmVVbml0fWA7XHJcblxyXG4gICAgaG91ci5xdWVyeVNlbGVjdG9yKCcuaWNvbicpLmlubmVySFRNTCA9IHV0aWxzLndlYXRoZXJJY29ucyhcclxuICAgICAgd2VhdGhlci5ob3VybHlbMF0ud2VhdGhlclswXS5pY29uXHJcbiAgICApO1xyXG4gICAgaG91cnNbaSAtIDFdLmFwcGVuZENoaWxkKGhvdXIpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGZvcm1hdEJhY2tncm91bmRVcmwgPSAobmFtZSkgPT4ge1xyXG4gIGNvbnN0IGN1cnJlbnRTY3JlZW5TaXplID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgY29uc3QgbmFtZU5vU3BhY2VzID0gbmFtZS5yZXBsYWNlKC9cXHMvZywgJycpO1xyXG4gIGNvbnN0IHVwcGVyQ2FzZU5hbWUgPVxyXG4gICAgbmFtZU5vU3BhY2VzLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgbmFtZU5vU3BhY2VzLnNsaWNlKDEpO1xyXG4gIGlmIChjdXJyZW50U2NyZWVuU2l6ZSA+IDgwMCkge1xyXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKGh0dHBzOi8vc291cmNlLnVuc3BsYXNoLmNvbS8xNjAweDkwMC8/JHt1cHBlckNhc2VOYW1lfSlgO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tLzQwMHg4MDAvPyR7dXBwZXJDYXNlTmFtZX0pYDtcclxufTtcclxuXHJcbmNvbnN0IHdlYXRoZXJVcGRhdGUgPSAod2VhdGhlciwgdW5pdCwgbmFtZSkgPT4ge1xyXG4gIGNvbnN0IHRlbXBlcmF0dXJlVW5pdCA9IHV0aWxzLnRlbXBVbml0KHVuaXQpO1xyXG4gIGNvbnN0IHdpbmRTcGVlZCA9IHV0aWxzLndpbmRDb252ZXJ0ZXIodW5pdCwgd2VhdGhlci5jdXJyZW50LndpbmRfc3BlZWQpO1xyXG4gIGNvbnN0IHdpbmRTcGVlZFVuaXQgPSB1dGlscy53aW5kVW5pdCh1bml0KTtcclxuICBjb25zdCBkYXRlT2JqZWN0ID0gdXRpbHMuZm9ybWF0RGF0ZShcclxuICAgIHdlYXRoZXIuY3VycmVudC5kdCxcclxuICAgIHdlYXRoZXIudGltZXpvbmVfb2Zmc2V0XHJcbiAgKTtcclxuICB3ZWVrbHlXZWF0aGVyKHdlYXRoZXIsIHRlbXBlcmF0dXJlVW5pdCk7XHJcbiAgaG91cmx5V2VhdGhlcih3ZWF0aGVyLCB0ZW1wZXJhdHVyZVVuaXQpO1xyXG4gIGZvcm1hdEJhY2tncm91bmRVcmwobmFtZSk7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NpdHktbmFtZScpLnRleHRDb250ZW50ID0gbmFtZTtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKS50ZXh0Q29udGVudCA9XHJcbiAgICB3ZWF0aGVyLmN1cnJlbnQud2VhdGhlclswXS5kZXNjcmlwdGlvbi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArXHJcbiAgICB3ZWF0aGVyLmN1cnJlbnQud2VhdGhlclswXS5kZXNjcmlwdGlvbi5zbGljZSgxKTtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3VycmVudFRlbXAnKS50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoXHJcbiAgICB3ZWF0aGVyLmN1cnJlbnQudGVtcFxyXG4gICl9ICR7dGVtcGVyYXR1cmVVbml0fWA7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZlZWxzTGlrZScpLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChcclxuICAgIHdlYXRoZXIuY3VycmVudC5mZWVsc19saWtlXHJcbiAgKX0gJHt0ZW1wZXJhdHVyZVVuaXR9YDtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgJyNodW1pZGl0eSdcclxuICApLnRleHRDb250ZW50ID0gYCR7d2VhdGhlci5jdXJyZW50Lmh1bWlkaXR5fSVgO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3aW5kU3BlZWQnKS50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoXHJcbiAgICB3aW5kU3BlZWRcclxuICApfSAke3dpbmRTcGVlZFVuaXR9YDtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgJyNjaGFuY2VPZlJhaW4nXHJcbiAgKS50ZXh0Q29udGVudCA9IGAke3dlYXRoZXIuZGFpbHlbMF0ucG9wfSAlYDtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbkljb24nKS5pbm5lckhUTUwgPSB1dGlscy53ZWF0aGVySWNvbnMoXHJcbiAgICB3ZWF0aGVyLmRhaWx5WzBdLndlYXRoZXJbMF0uaWNvblxyXG4gICk7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RheU5hbWUnKS50ZXh0Q29udGVudCA9IHV0aWxzLmRheUZ1bGxOYW1lQ29udmVydGVyKFxyXG4gICAgZGF0ZU9iamVjdC5kYXlOYW1lU3RyaW5nXHJcbiAgKTtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGltZScpLnRleHRDb250ZW50ID0gZGF0ZU9iamVjdC5ob3VyU3RyaW5nO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAnI2RheUFuZE1vbnRoJ1xyXG4gICkudGV4dENvbnRlbnQgPSBgJHtkYXRlT2JqZWN0LmRheU1vbnRoU3RyaW5nfWA7XHJcbn07XHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG91cmx5QnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlZWtDb250YWluZXInKS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvdXJzQ29udGFpbmVyJykuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xyXG59KTtcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYWlseUJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob3Vyc0NvbnRhaW5lcicpLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2Vla0NvbnRhaW5lcicpLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcclxufSk7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xyXG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2l0eS1uYW1lJykudGV4dENvbnRlbnQ7XHJcbiAgY29uc3QgY3VycmVudFNpemUgPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICBpZiAoY3VycmVudFNpemUgPiA4MDApIHtcclxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybChodHRwczovL3NvdXJjZS51bnNwbGFzaC5jb20vMTYwMHg5MDAvPyR7bmFtZX0pYDtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKGh0dHBzOi8vc291cmNlLnVuc3BsYXNoLmNvbS80MDB4ODAwLz8ke25hbWV9KWA7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2VhdGhlclVwZGF0ZTtcclxuIiwiaW1wb3J0IHdlYXRoZXJVcGRhdGUgZnJvbSAnLi9jaGFuZ2VET00nO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0RnVsbFJlcG9ydChsYXQsIGxvbiwgdW5pdCwgbmFtZSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L29uZWNhbGw/bGF0PSR7bGF0fSZsb249JHtsb259JmV4Y2x1ZGU9bWludXRlbHksYWxlcnRzJnVuaXRzPSR7dW5pdH0mQVBQSUQ9NDM5ZDMwNjViNDU2NzBlNzk0MjBkNjNlNmFhNjk5MzlgLFxyXG4gICAgICB7IG1vZGU6ICdjb3JzJyB9XHJcbiAgICApO1xyXG4gICAgY29uc3QgZnVsbEluZm8gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICB3ZWF0aGVyVXBkYXRlKGZ1bGxJbmZvLCB1bml0LCBuYW1lKTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBmZXRjaEFQSShjaXR5LCB1bml0KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mQVBQSUQ9NDM5ZDMwNjViNDU2NzBlNzk0MjBkNjNlNmFhNjk5MzlgLFxyXG4gICAgICB7IG1vZGU6ICdjb3JzJyB9XHJcbiAgICApO1xyXG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lcnJvcicpLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcclxuICAgICAgY29uc3Qgd2VhdGhlckluZm8gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIGdldEZ1bGxSZXBvcnQoXHJcbiAgICAgICAgd2VhdGhlckluZm8uY29vcmQubGF0LFxyXG4gICAgICAgIHdlYXRoZXJJbmZvLmNvb3JkLmxvbixcclxuICAgICAgICB1bml0LFxyXG4gICAgICAgIHdlYXRoZXJJbmZvLm5hbWVcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lcnJvcicpLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmZXRjaEFQSTtcclxuIiwiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llc1xyXG5pbXBvcnQgZnJvbVVuaXhUaW1lIGZyb20gJ2RhdGUtZm5zL2Zyb21Vbml4VGltZSc7XHJcblxyXG5jb25zdCBjb252ZXJ0RGF0ZSA9ICh1bml4U3RhbXAsIG9mZnNldCkgPT4ge1xyXG4gIGNvbnN0IGRhdGUgPSBmcm9tVW5peFRpbWUodW5peFN0YW1wICsgb2Zmc2V0KS50b1VUQ1N0cmluZygpO1xyXG4gIHJldHVybiBkYXRlO1xyXG59O1xyXG5cclxuY29uc3QgZm9ybWF0RGF0ZSA9ICh1bml4VGltZSwgb2Zmc2V0KSA9PiB7XHJcbiAgY29uc3QgZGF0ZVN0cmluZyA9IGNvbnZlcnREYXRlKHVuaXhUaW1lLCBvZmZzZXQpLnRvU3RyaW5nKCk7XHJcbiAgY29uc3QgZGF5TmFtZVN0cmluZyA9IGRhdGVTdHJpbmcuc2xpY2UoMCwgMyk7XHJcbiAgY29uc3QgZGF5TW9udGhTdHJpbmcgPSBkYXRlU3RyaW5nLnNsaWNlKDQsIDExKTtcclxuICBjb25zdCB5ZWFyU3RyaW5nID0gZGF0ZVN0cmluZy5zbGljZSgxMSwgMTYpO1xyXG4gIGNvbnN0IGhvdXJTdHJpbmcgPSBkYXRlU3RyaW5nLnNsaWNlKDE2LCAyMik7XHJcbiAgcmV0dXJuIHtcclxuICAgIGRheU5hbWVTdHJpbmcsXHJcbiAgICBkYXlNb250aFN0cmluZyxcclxuICAgIHllYXJTdHJpbmcsXHJcbiAgICBob3VyU3RyaW5nLFxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCB3aW5kVW5pdCA9ICh1bml0KSA9PiB7XHJcbiAgaWYgKHVuaXQgPT09ICdtZXRyaWMnKSB7XHJcbiAgICByZXR1cm4gJ2ttL2gnO1xyXG4gIH1cclxuICByZXR1cm4gJ21waCc7XHJcbn07XHJcbmNvbnN0IHdpbmRDb252ZXJ0ZXIgPSAodW5pdCwgd2luZFNwZWVkKSA9PiB7XHJcbiAgaWYgKHVuaXQgPT09ICdtZXRyaWMnKSB7XHJcbiAgICBjb25zdCB3aW5kID0gd2luZFNwZWVkICogMy42O1xyXG4gICAgcmV0dXJuIHdpbmQudG9GaXhlZCgyKTtcclxuICB9XHJcbiAgY29uc3Qgd2luZCA9IHdpbmRTcGVlZCAqIDIuMjtcclxuICByZXR1cm4gd2luZC50b0ZpeGVkKDIpO1xyXG59O1xyXG5cclxuY29uc3QgdGVtcFVuaXQgPSAodW5pdCkgPT4ge1xyXG4gIGlmICh1bml0ID09PSAnbWV0cmljJykge1xyXG4gICAgcmV0dXJuICfCsEMnO1xyXG4gIH1cclxuICByZXR1cm4gJ8KwRic7XHJcbn07XHJcbmNvbnN0IGRheUZ1bGxOYW1lQ29udmVydGVyID0gKG5hbWUpID0+IHtcclxuICBpZiAobmFtZSA9PT0gJ1N1bicpIHJldHVybiAnU3VuZGF5JztcclxuICBpZiAobmFtZSA9PT0gJ01vbicpIHJldHVybiAnTW9uZGF5JztcclxuICBpZiAobmFtZSA9PT0gJ1NhdCcpIHJldHVybiAnU2F0dXJkYXknO1xyXG4gIGlmIChuYW1lID09PSAnV2VkJykgcmV0dXJuICdXZWRuZXNkYXknO1xyXG4gIGlmIChuYW1lID09PSAnVGh1JykgcmV0dXJuICdUaHVyc2RheSc7XHJcbiAgaWYgKG5hbWUgPT09ICdGcmknKSByZXR1cm4gJ0ZyaWRheSc7XHJcbiAgcmV0dXJuICdUdWVzZGF5JztcclxufTtcclxuXHJcbmNvbnN0IHdlYXRoZXJJY29ucyA9IChjb2RlKSA9PiB7XHJcbiAgaWYgKGNvZGUgPT09ICcwMWQnKSByZXR1cm4gYDxpIGNsYXNzPVwiZmFzIGZhLXN1biB5ZWxsb3ctaWNvblwiPjwvaT5gO1xyXG4gIGlmIChjb2RlID09PSAnMDFuJykgcmV0dXJuICc8aSBjbGFzcz1cImZhcyBmYS1tb29uIGdyZXktaWNvblwiPjwvaT4nO1xyXG4gIGlmIChjb2RlID09PSAnMDJkJykgcmV0dXJuICc8aSBjbGFzcz1cImZhcyBmYS1jbG91ZC1zdW4gZ3JleS1pY29uXCI+PC9pPic7XHJcbiAgaWYgKGNvZGUgPT09ICcwMm4nKSByZXR1cm4gJzxpIGNsYXNzPVwiZmFzIGZhLWNsb3VkLW1vb24gZ3JleS1pY29uXCI+PC9pPic7XHJcbiAgaWYgKGNvZGUgPT09ICcwM2QnIHx8IGNvZGUgPT09ICcwM24nIHx8IGNvZGUgPT09ICcwNGQnIHx8IGNvZGUgPT09ICcwNG4nKVxyXG4gICAgcmV0dXJuICc8aSBjbGFzcz1cImZhcyBmYS1jbG91ZCBncmV5LWljb25cIj48L2k+JztcclxuICBpZiAoY29kZSA9PT0gJzA5ZCcgfHwgY29kZSA9PT0gJzA5bicgfHwgY29kZSA9PT0gJzEwZCcgfHwgY29kZSA9PT0gJzEwbicpXHJcbiAgICByZXR1cm4gJzxpIGNsYXNzPVwiZmFzIGZhLWNsb3VkLXJhaW4gZ3JleS1pY29uXCI+PC9pPic7XHJcbiAgaWYgKGNvZGUgPT09ICcxMWQnIHx8IGNvZGUgPT09ICcxMW4nKVxyXG4gICAgcmV0dXJuICc8aSBjbGFzcz1cImZhcyBmYS1ib2x0IHllbGxvdy1pY29uXCI+PC9pPic7XHJcbiAgaWYgKGNvZGUgPT09ICcxM2QnIHx8IGNvZGUgPT09ICcxM24nKVxyXG4gICAgcmV0dXJuICc8aSBjbGFzcz1cImZhciBmYS1zbm93Zmxha2UgZ3JleS1pY29uXCI+PC9pPic7XHJcbiAgcmV0dXJuICc8aSBjbGFzcz1cImZhcyBmYS1zbW9nIGdyZXktaWNvblwiPjwvaT4nO1xyXG59O1xyXG5cclxuZXhwb3J0IHtcclxuICB3ZWF0aGVySWNvbnMsXHJcbiAgY29udmVydERhdGUsXHJcbiAgd2luZFVuaXQsXHJcbiAgdGVtcFVuaXQsXHJcbiAgd2luZENvbnZlcnRlcixcclxuICBmb3JtYXREYXRlLFxyXG4gIGRheUZ1bGxOYW1lQ29udmVydGVyLFxyXG59O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBmZXRjaEFQSSBmcm9tICcuL2dldEFQSSc7XHJcblxyXG5jb25zdCBnZXRUZW1wZXJhdHVyZVVuaXQgPSAoKSA9PiB7XHJcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZW1wU3dpdGNoJykuY2hlY2tlZCkge1xyXG4gICAgcmV0dXJuICdpbXBlcmlhbCc7XHJcbiAgfVxyXG4gIHJldHVybiAnbWV0cmljJztcclxufTtcclxuXHJcbmZldGNoQVBJKCdyb3NhcmlvJywgZ2V0VGVtcGVyYXR1cmVVbml0KCkpO1xyXG5cclxuY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2l0eS1zZWFyY2gnKTtcclxuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSkgPT4ge1xyXG4gIGlmIChlLmtleSA9PT0gJ0VudGVyJykgZmV0Y2hBUEkoaW5wdXQudmFsdWUsIGdldFRlbXBlcmF0dXJlVW5pdCgpKTtcclxufSk7XHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoLWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIGZldGNoQVBJKGlucHV0LnZhbHVlLCBnZXRUZW1wZXJhdHVyZVVuaXQoKSk7XHJcbn0pO1xyXG5cclxuY29uc3QgZGF5cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYXknKTtcclxuXHJcbmZvciAobGV0IGkgPSAwOyBpIDwgZGF5cy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gIGRheXNbaV0udGV4dENvbnRlbnQgPSBpO1xyXG59XHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVtcFN3aXRjaCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2l0eS1uYW1lJykudGV4dENvbnRlbnQ7XHJcbiAgZmV0Y2hBUEkobmFtZSwgZ2V0VGVtcGVyYXR1cmVVbml0KCkpO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9