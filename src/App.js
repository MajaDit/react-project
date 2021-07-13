import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let weatherData = {
    city: "London",
    country: "UK",
    day: "Tuesday",
    time: "14:00",
    imgUrl: "https://img.icons8.com/doodle/50/000000/moon-and-sun.png",
    temperature: 20,
    description: "Sunny",
    humidity: 50,
    wind: 20,
  };
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
            <h1 className="city">
              {weatherData.city}, {weatherData.country}
            </h1>
            <div className="row">
              <div className="col-6">
                <div className="day-and-time">
                  Last updated:
                  <span>
                    {weatherData.day} {weatherData.time}
                  </span>
                </div>
                <div className="row">
                  <div className=" col-3 icon">
                    <img src={weatherData.imgUrl} alt="icons" />
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
}

export default App;
