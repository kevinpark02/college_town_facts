class BerkeleyUI {
  constructor() {
    this.desc = document.getElementById("berkeley-w-desc");
    this.temp = document.getElementById("berkeley-w-temp");
    this.icon = document.getElementById("berkeley-w-icon");
    this.humidity = document.getElementById("berkeley-w-humidity");
    this.feelsLike = document.getElementById("berkeley-w-feels-like");
    this.wind = document.getElementById("berkeley-w-wind");
  }

  paint(weather) {
    this.desc.textContent = weather.weather[0].main;
    this.temp.textContent = `${Math.floor(
      parseInt(weather.main.temp) * (9 / 5) - 459.67
    )}\u00B0F`;
    this.icon.setAttribute(
      "src",
      `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`
    );
    this.humidity.textContent = `Humidity: ${weather.main.humidity}%`;
    this.feelsLike.textContent = `Feels Like: ${Math.floor(
      parseInt(weather.main.feels_like) * (9 / 5) - 459.67
    )}\u00B0F`;
    this.wind.textContent = `Wind: ${weather.wind.speed} mph`;
  }
}

export default BerkeleyUI;
