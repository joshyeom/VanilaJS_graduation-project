const API_KEY = "a82ba99cb14ed5879dd07409e9cc61a3";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather span:first-child");
      city.innerText = data.name;
      const temp = document.querySelector("#weather span:nth-child(2)");
      temp.innerText = Math.floor(data.main.temp) + "º";
      const icon = document.querySelector("#weather i:last-child");
      const weatherIcon = data.weather.main;
      if (weatherIcon === "Clouds") {
        icon.classList.add("fs-solid", "fa-cloud");
      } else if (weatherIcon === "Thunderstorm") {
        icon.classList.add("fs-solid", "fa-cloud-bolt");
      } else if (weatherIcon === "Drizzle") {
        icon.classList.add("fs-solid", "fa-cloud-drizzle");
      } else if (weatherIcon === "Rain") {
        icon.classList.add("fs-solid", "fa-raindrops");
      } else if (weatherIcon === "Snow") {
        icon.classList.add("fs-solid", "fa-snowflake");
      } else if (weatherIcon === "Clear") {
        icon.classList.add("fs-solid", "fa-sun");
      }
    });
}
function onGeoError() {
  alert("Please check your location");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
