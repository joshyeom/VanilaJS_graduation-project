const API_KEY = "a82ba99cb14ed5879dd07409e9cc61a3";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      const temp = Math.floor(data.main.temp) + "º"; //선언 후 백틱으로
    });
}
function geoIcon(data) {
  let weather = data.weather[0]["main"];
  if (weather === "Clouds") {
    const clouds = document.querySelector(".clouds");
    clouds.classList.remove("none");
  } else if (weather === "clearsky") {
    const clearSky = doucment.querySelector(".clear-sky");
    clouds.classlist.remove("none");
  } else if (weather === "fewclouds") {
    const fewClouds = doucment.querySelector(".few-clouds");
    fewClouds.classlist.remove("none");
  } else if (weather === "scatteredclouds") {
    const scatteredClouds = doucment.querySelector(".scattered-clouds");
    scatteredClouds.classlist.remove("none");
  } else if (weather === "brokenclouds") {
    const brokenClouds = doucment.querySelector(".broken-clouds");
    brokenClouds.classlist.remove("none");
  } else if (weather === "showerrain") {
    const showerRain = doucment.querySelector(".shower-rain");
    showerRain.classlist.remove("none");
  } else if (weather === "rain") {
    const rain = doucment.querySelector(".rain");
    rain.classlist.remove("none");
  } else if (weather === "thunderstorm") {
    const thunderstorm = doucment.querySelector(".thunderstorm");
    thunderstorm.classlist.remove("none");
  } else if (weather === "snow") {
    const snow = doucment.querySelector(".snow");
    snow.classlist.remove("none");
  } else if (weather === "mist") {
    const mist = doucment.querySelector(".mist");
    mist.classlist.remove("none");
  }
}
function onGeoError() {
  alert("Please check your location");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError, geoIcon);
