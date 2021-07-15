import React, { useState } from "react";

export default function Units(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="Units">
        <span className="currentTemperature">{Math.round(props.celsius)}</span>
        <span className="units">
          {" "}
          <span className="active">°C</span> |{" "}
          <a href="/" onClick={showFahrenheit}>
            F{" "}
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (9 / 5) * props.celsius + 32;
    return (
      <div className="Units">
        <span className="currentTemperature">{Math.round(fahrenheit)}</span>
        <span className="units">
          {" "}
          <a href="/" onClick={showCelsius}>
            °C
          </a>{" "}
          | <span className="active">F</span>{" "}
        </span>
      </div>
    );
  }
}
