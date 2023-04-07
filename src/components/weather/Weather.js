import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_KEY } from "../../config";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);

useEffect(() => {
  navigator.geolocation.getCurrentPosition(async (position) => {
    const { latitude, longitude } = position.coords;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;

    const response = await axios.get(apiUrl);
    setWeatherData(response.data);
  });
}, []);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const { name, main, weather } = weatherData;

  return (
    <div>
      <h1>Weather in {name}</h1>
      <p>Temperature: {main.temp} °C</p>
      <p>Weather: {weather[0].description}</p>
    </div>
  );
};

export default Weather;
