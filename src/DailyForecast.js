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
      <div>{formatDay()}</div>
      <WeatherIcon
        code={props.forecastData.weather[0].icon}
        size={34}
        color="#ab4603"
      />
      <div>{Math.round(props.forecastData.temp.max)}°</div>
    </div>
  );
}
