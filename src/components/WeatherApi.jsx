import React from "react";
import useWeather from "../hooks/useWeather";

const WeatherApi = () => {
  const { weather, error } = useWeather();

  return (
    <div className="weather-line">
      <h1>🌤</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {weather ? (
        <>
          <p className="footer-links">{weather.main.temp} °C</p>
          <p className="footer-links">{weather.weather[0].description}</p>
        </>
      ) : !error ? (
        <p>Detecting...</p>
      ) : null}
    </div>
  );
};

export default WeatherApi;