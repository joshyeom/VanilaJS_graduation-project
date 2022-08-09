const API_KEY = "a761f73b41aeafc4443783d2de378f25"; //Debug

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
      const weatherIcon = document.querySelector("#weather i");
      const weatherInfo = data.weather[0].main;
      console.log(weatherInfo);
      if (weatherInfo === "Rain") {
        weatherIcon.classList.add("fa-solid", "fa-cloud-rain");
      }
    });
}
function onGeoError() {
  alert("Please check your location");
}
typeof weatherInfo;
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
