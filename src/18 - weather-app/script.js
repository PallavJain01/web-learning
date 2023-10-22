// http://api.openweathermap.org/data/2.5/weather?id=524901&appid=<API_KEY>&q=<CITY_NAME>
// http://openweathermap.org/img/wn/<WEATHER_ICON_ID>.png

const API_KEY = "24bcd3f4fecf8fa163c59716184adc5b"

const
  iconElem = document.getElementById("icon"),
  tempElem = document.getElementById("temp").children[0],
  descriptionElem = document.getElementById("description"),
  feelsLikeElem = document.getElementById("feels-like").children[0],
  humidityElem = document.getElementById("humidity").children[0],
  speedElem = document.getElementById("wind-speed").children[0],
  inpCity = document.getElementById("inp-city"),
  inpBtn = document.getElementById("inp-get-weather"),

  containerWeather = document.getElementById("container-weather"),
  containerDetails = document.getElementById("container-details");
;

inpBtn.addEventListener("click", async (_) => {
  let city = inpCity.value;
  if (!city) return;
  const weatherData = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=524901&appid=${API_KEY}&q=${city}`)
  const weather = await weatherData.json();
  if (weatherData.ok) {
    containerWeather.style.display = "flex";
    containerDetails.style.display = "flex";
  }
  iconElem.innerHTML = `<img src="https://openweathermap.org/img/wn/${weather.weather[0].icon}.png" />`
  tempElem.innerHTML = (weather.main.temp - 273.15).toFixed(0);
  descriptionElem.innerHTML = weather.weather[0].main
  feelsLikeElem.innerHTML = (weather.main.feels_like - 273.15).toFixed(0);
  humidityElem.innerHTML = weather.main.humidity
  speedElem.innerHTML = weather.wind.speed
})