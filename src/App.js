import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import React, { useState } from "react";

export default function App(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }
  if (weatherData.ready) {
    return (
      <div className="App">
        <div className="container">
          <div className="card">
            <div className="card-body">
              <form className="search-form">
                <input
                  type="text"
                  placeholder=" Find City"
                  className="input"
                  autoFocus="on"
                />
                <input type="submit" value="Search" className="submit-button" />
              </form>
              <h1 className="city">{weatherData.city}, UK</h1>
              <div className="row">
                <div className="col-6">
                  <div className="day-and-time">
                    Last updated:
                    <span>Tuesday 14:00</span>
                  </div>
                  <div className="row">
                    <div className=" col-3 icon">
                      <img
                        src={weatherData.icon}
                        alt={weatherData.description}
                      />
                    </div>
                    <div className="col">
                      <span className="col-7 current-temperature">
                        {weatherData.temperature}
                      </span>
                      <span className="units"> °C </span>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <ul>
                    <li className="description">{weatherData.description}</li>
                    <li className="humidity">
                      Humidity:{" "}
                      <span className="humidity">{weatherData.humidity}%</span>
                    </li>
                    <li className="wind">
                      Wind: <span>{weatherData.wind}mph</span>
                    </li>
                  </ul>
                </div>
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
      </div>
    );
  } else {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=db470402812f5661f73e8a78f5ce0f76&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
