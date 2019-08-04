const weatherInpo = document.querySelector(".js-weatherInpo");
const locationInpo = document.querySelector(".js-locationInpo");

const LOCATION_LS = "locationInpo";
const API_KEY = "b3d62d6e69630f1bc533fda8e1c59316";

function getWeather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      const temperature = json.main.temp;
      const location = json.name;
      const humidity = json.main.humidity;
      weatherInpo.innerHTML = `기온: ${temperature}°C 습도: ${humidity}%`;
      locationInpo.innerHTML = `위치: ${location}`;
    });
}

function saveLocation(location) {
  localStorage.setItem(LOCATION_LS, JSON.stringify(location));
}

function successLocation(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const placeObj = {
    latitude,
    longitude
  };
  getWeather(latitude, longitude);
  saveLocation(placeObj);
}

function errorLocation() {
  alert(`can't access a location.`);
}

function askForLocation() {
  navigator.geolocation.getCurrentPosition(successLocation, errorLocation);
}

function loadWeather() {
  const loadedLocation = localStorage.getItem(LOCATION_LS);
  if (loadedLocation === null) {
    askForLocation();
  } else {
    const parsedLocation = JSON.parse(loadedLocation);
    getWeather(parsedLocation.latitude, parsedLocation.longitude);
  }
}

function init() {
  loadWeather();
}

init();
