function updateWeatherData(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let currentCityElement = document.querySelector("#currentCity");
  currentCityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature);
}

function searchCity(city) {
  let apiKey = "c346o99849899025a5ea673a4f03tb46";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateWeatherData);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#searchForm");
  searchCity(searchInput.value);
}

let searchCityElement = document.querySelector("#city");
searchCityElement.addEventListener("submit", handleSearchSubmit);

searchCity("London");
