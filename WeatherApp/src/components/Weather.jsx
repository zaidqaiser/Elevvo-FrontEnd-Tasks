import React, { useState, useEffect } from "react";
import "./Weather.css";
import axios from "axios";

import search_icon from "../assets/search.png";
import clear_icon from "../assets/clear.png";
import cloud_icon from "../assets/cloud.png";
import drizzle_icon from "../assets/drizzle.png";
import rain_icon from "../assets/rain.png";
import snow_icon from "../assets/snow.png";
import wind_icon from "../assets/wind.png";
import humidity_icon from "../assets/humidity.png";

// React Icons
import { BsSunrise, BsSunset } from "react-icons/bs";
import { WiBarometer, WiDayFog } from "react-icons/wi";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [unit, setUnit] = useState("C");
  const [error, setError] = useState("");

  const apiKey = import.meta.env.VITE_APP_ID;

  const fetchWeather = async (query) => {
    try {
      setLoading(true);
      setError("");
      const res = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${query}&days=4&aqi=no&alerts=no`
      );
      setWeatherData(res.data);
    } catch (err) {
      console.error("Error fetching weather:", err);
      setWeatherData(null);
      setError("⚠️ Could not fetch weather. Try another city.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    if (city.trim() !== "") {
      fetchWeather(city);
    }
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const lat = pos.coords.latitude;
          const lon = pos.coords.longitude;
          fetchWeather(`${lat},${lon}`);
        },
        () => {
          console.warn("Location denied, fallback Lahore");
          fetchWeather("Lahore");
        }
      );
    } else {
      fetchWeather("Lahore");
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (weatherData?.location?.name) {
        fetchWeather(weatherData.location.name);
      }
    }, 600000);
    return () => clearInterval(interval);
  }, [weatherData]);

  const getWeatherIcon = (condition) => {
    if (!condition) return clear_icon;
    const cond = condition.toLowerCase();
    if (cond.includes("rain")) return rain_icon;
    if (cond.includes("snow")) return snow_icon;
    if (cond.includes("cloud")) return cloud_icon;
    if (cond.includes("drizzle")) return drizzle_icon;
    return clear_icon;
  };

  const convertTemp = (tempC) =>
    unit === "C" ? `${tempC}°C` : `${((tempC * 9) / 5 + 32).toFixed(1)}°F`;

  return (
    <div className="weather">
      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <img src={search_icon} alt="search" onClick={handleSearch} />
      </div>

      {/* Unit Toggle */}
      <div className="unit-toggle">
        <button
          className={unit === "C" ? "active" : ""}
          onClick={() => setUnit("C")}
        >
          °C
        </button>
        <button
          className={unit === "F" ? "active" : ""}
          onClick={() => setUnit("F")}
        >
          °F
        </button>
      </div>

      {loading ? (
        <p style={{ color: "white", marginTop: "20px" }}>Loading weather...</p>
      ) : error ? (
        <p style={{ color: "red", marginTop: "20px" }}>{error}</p>
      ) : weatherData ? (
        <>
          {/* Today */}
          <img
            src={getWeatherIcon(weatherData.current.condition.text)}
            alt="weather"
            className="weather-icon"
          />
          <p className="temperature">{convertTemp(weatherData.current.temp_c)}</p>
          <p className="location">
            {weatherData.location.name}, {weatherData.location.country}
          </p>

          <p className="updated">
            Last updated: {weatherData.current.last_updated}
          </p>

          {/* Weather Info */}
          <div className="weather-data">
            <div className="col">
              <img src={humidity_icon} alt="humidity" />
              <div>
                <p>{weatherData.current.humidity}%</p>
                <span>Humidity</span>
              </div>
            </div>
            <div className="col">
              <img src={wind_icon} alt="wind" />
              <div>
                <p>{weatherData.current.wind_kph} Km/h</p>
                <span>Wind Speed</span>
              </div>
            </div>
            <div className="col">
              <WiBarometer size={26} />
              <div>
                <p>{weatherData.current.pressure_mb} mb</p>
                <span>Pressure</span>
              </div>
            </div>
            <div className="col">
              <WiDayFog size={26} />
              <div>
                <p>{weatherData.current.vis_km} km</p>
                <span>Visibility</span>
              </div>
            </div>
            <div className="col">
              <BsSunrise size={24} />
              <div>
                <p>{weatherData.forecast.forecastday[0].astro.sunrise}</p>
                <span>Sunrise</span>
              </div>
            </div>
            <div className="col">
              <BsSunset size={24} />
              <div>
                <p>{weatherData.forecast.forecastday[0].astro.sunset}</p>
                <span>Sunset</span>
              </div>
            </div>
          </div>

          {/* Forecast Section */}
          <div className="forecast">
            <h3>Next 3 Days</h3>
            <div className="forecast-cards">
              {weatherData.forecast.forecastday.slice(1, 4).map((day) => (
                <div className="forecast-card" key={day.date}>
                  <p>{day.date}</p>
                  <img
                    src={getWeatherIcon(day.day.condition.text)}
                    alt="forecast"
                  />
                  <p>{convertTemp(day.day.avgtemp_c)}</p>
                  <span>{day.day.condition.text}</span>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <p style={{ color: "white", marginTop: "20px" }}>
          Could not load weather.
        </p>
      )}
    </div>
  );
};

export default Weather;
