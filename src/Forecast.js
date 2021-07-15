import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div>Mon</div>
      <WeatherIcon code="01d" size={34} color="#ab4603" />
      <div>20°</div>
    </div>
  );
}
