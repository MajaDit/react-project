import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function DailyForecast(props) {
  function formatDay() {
    let date = new Date(props.forecastData.dt * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[date.getDay()];
    return day;
  }
  return (
    <div className="DailyForecast">
      <div className="forecastDay">{formatDay()}</div>
      <WeatherIcon
        code={props.forecastData.weather[0].icon}
        size={34}
        color="#ff9e5e"
      />
      <div>
        <span className="maxTemperature">
          {Math.round(props.forecastData.temp.max)}°
        </span>{" "}
        <span className="minTemperature">
          {Math.round(props.forecastData.temp.min)}°
        </span>
      </div>
    </div>
  );
}
