import React, { useState, useEffect, useRef } from "react";
import SearchBar from "./SearchBar";
import Forecast from "./Forecast";
import "./Weather.css";
import clear_icon from "../assets/clear.png";
import cloud_icon from "../assets/cloud.png";
import drizzle_icon from "../assets/drizzle.png";
import rain_icon from "../assets/rain.png";
import snow_icon from "../assets/snow.png";
import CurrentWeather from "./WeatherInfo";

const WeatherApp = () => {
    const [weatherData, setWeatherData] = useState(null);
    const allIcons = {
        "01d": clear_icon,
        "01n": clear_icon,
        "02d": cloud_icon,
        "02n": cloud_icon,
        "03d": cloud_icon,
        "03n": cloud_icon,
        "04d": drizzle_icon,
        "04n": drizzle_icon,
        "09d": rain_icon,
        "09n": rain_icon,
        "10d": rain_icon,
        "10n": rain_icon,
        "13d": snow_icon,
        "13n": snow_icon,
    };

    const fetchWeather = async (city) => {
        if (!city.trim()) {
            alert("Enter a city name");
            return;
        }

        try {
            const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;
            const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;

            const [weatherResponse, forecastResponse] = await Promise.all([
                fetch(weatherUrl),
                fetch(forecastUrl),
            ]);

            const weather = await weatherResponse.json();
            const forecast = await forecastResponse.json();

            const dailyForecast = forecast.list.filter((item) =>
                item.dt_txt.includes("12:00:00")
            );

            setWeatherData({
                humidity: weather.main.humidity,
                windSpeed: weather.wind.speed,
                temperature: Math.floor(weather.main.temp),
                location: weather.name,
                icon: allIcons[weather.weather[0].icon] || clear_icon,
                forecast: dailyForecast.map((day) => ({
                    date: day.dt_txt.split(" ")[0],
                    temp: Math.floor(day.main.temp),
                    icon: allIcons[day.weather[0].icon] || clear_icon,
                })),
            });
        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    };

    useEffect(() => {
        fetchWeather("Beirut");
    }, []);

    return (
        <div className="weather">
            <SearchBar onSearch={fetchWeather} />
            {weatherData && (
                <>
                    <CurrentWeather data={weatherData} />
                    <Forecast forecast={weatherData.forecast} />
                </>
            )}
        </div>
    );
};



export default WeatherApp;


