class MercedUI {
  constructor() {
    this.desc = document.getElementById("merced-w-desc");
    this.temp = document.getElementById("merced-w-temp");
    this.icon = document.getElementById("merced-w-icon");
    this.humidity = document.getElementById("merced-w-humidity");
    this.feelsLike = document.getElementById("merced-w-feels-like");
    this.wind = document.getElementById("merced-w-wind");
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

export default MercedUI;
