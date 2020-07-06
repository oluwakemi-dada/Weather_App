class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.desc = document.getElementById("w-desc");
    this.temp = document.getElementById("w-temp");
    this.details = document.getElementById("w-details");
    this.icon = document.getElementById("w-icon");
    this.minmax = document.getElementById("w-minmax");
    this.humidity = document.getElementById("w-humidity");
    this.pressure = document.getElementById("w-pressure");
    this.feelsLike = document.getElementById("w-feels-like");
    this.wind = document.getElementById("w-wind");
  }

  paint(weather) {
    this.location.textContent = `${weather.name}, ${weather.sys.country}.`;
    this.desc.textContent = weather.weather[0].description;
    this.temp.textContent = `${weather.main.temp}°C`;
    this.icon.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
    );
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity} %`;
    this.pressure.textContent = `Pressure: ${weather.main.pressure} hpa`;
    this.feelsLike.textContent = `Feels Like: ${weather.main.feels_like} °C`;
  }
}
