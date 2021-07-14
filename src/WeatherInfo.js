import React from "react";
import DayAndTime from "./DayAndTime";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="city">
        {props.info.city}, {props.info.country}
      </h1>
      <div className="row">
        <div className="col-6">
          <div className="day-and-time">
            Last updated:
            <DayAndTime date={props.info.date} />
          </div>
          <div className="row">
            <div className=" col-3 icon">
              <img src={props.info.icon} alt={props.info.description} />
            </div>
            <div className="col">
              <span className="col-7 current-temperature">
                {Math.round(props.info.temperature)}
              </span>
              <span className="units"> °C </span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li className="description">{props.info.description}</li>
            <li className="humidity">
              Humidity: <span className="humidity">{props.info.humidity}%</span>
            </li>
            <li className="wind">
              Wind: <span>{props.info.wind}mph</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}