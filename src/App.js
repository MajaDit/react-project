import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";

export default function App(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      country: response.data.sys.country,
      icon: response.data.weather[0].icon,
    });
  }
  function search() {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=db470402812f5661f73e8a78f5ce0f76&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div className="App">
        <div className="container">
          <div className="card">
            <div className="card-body">
              <form className="search-form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder=" Find City"
                  className="input"
                  autoFocus="on"
                  onChange={handleCityChange}
                />
                <input type="submit" value="Search" className="submit-button" />
              </form>
              <WeatherInfo info={weatherData} />
              <Forecast />
            </div>
          </div>
        </div>
        <div className="credit">
          <a
            href="https://github.com/MajaDit/react-project"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by <strong>Maja Ditrtova</strong>.
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
