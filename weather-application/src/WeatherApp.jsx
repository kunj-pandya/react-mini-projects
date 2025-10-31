import React, { useState } from "react";


const WeatherApp = () => {

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const API_KEY = "b3fce4e5ce28bf86c5bed03d1f717a42";

  const getWeather = async () => {
    if (!city) return;

    try {
      setError("");

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );

      if (!response.ok) {
        throw new Error("City not found");
      }
      const data = await response.json();
      // console.log(data); 
      setWeather(data);
    } catch (err) {
      setError(err.message);
      setWeather(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-800 flex flex-col items-center justify-center text-gray-100 p-6">

      <h1 className="text-4xl font-extrabold mb-6 text-blue-500 drop-shadow-md">
        Weather App
      </h1>

      <div className="flex gap-2 mb-4 w-full max-w-md">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
          className="p-3 rounded-lg bg-zinc-800 border border-gray-600 text-gray-100 placeholder-gray-400 focus:outline-none w-full"
        />

        <button
          onClick={getWeather}
          className="bg-blue-500 hover:bg-blue-600 text-zinc-800 px-5 py-3 rounded-lg font-semibold transition-transform transform shadow-md"
        >
          Search
        </button>
      </div>

      {error && (
        <p className="text-red-400 mt-2">
          {error}
        </p>
      )}

      {/* Weather Card */}
      {weather && (
        <div className="bg-gray-900/60 border border-gray-700 backdrop-blur-md p-6 rounded-xl mt-6 text-center shadow-xl w-full max-w-md">
          <h2 className="text-2xl font-bold mb-2 text-blue-400">
            {weather.name}
          </h2>

          <p className="text-3xl font-semibold text-yellow-300">
            🌡 {weather.main.temp}°C
          </p>

          <p className="capitalize text-lg mt-2 text-gray-300">
            {weather.weather[0].description}
          </p>
        </div>
      )}
    </div>

  );
};

export default WeatherApp;
