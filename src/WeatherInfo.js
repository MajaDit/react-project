import React from "react";
import DayAndTime from "./DayAndTime";
import WeatherIcon from "./WeatherIcon";
import Units from "./Units";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="city">
        {props.info.city}, {props.info.country}
      </h1>
      <div className="row">
        <div className="col-7">
          <div className="day-and-time">
            Last updated:
            <DayAndTime date={props.info.date} />
          </div>
          <div className="row">
            <div className=" col-3 icon">
              <WeatherIcon code={props.info.icon} />
            </div>
            <div className="col">
              <span className="col-7 current-temperature">
                <Units celsius={props.info.temperature} />
              </span>
            </div>
          </div>
        </div>
        <div className="col-5">
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
