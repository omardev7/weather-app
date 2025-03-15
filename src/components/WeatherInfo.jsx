import React from "react";
import humidity_icon from "../assets/humidity.png";
import wind_icon from "../assets/wind.png";

const CurrentWeather = ({ data }) => {
    return (
        <div className="current-weather">
            <img src={data.icon} alt="Weather Icon" className="weather-icon" />
            <p className="temperature">{data.temperature}°C</p>
            <p className="location">{data.location}</p>

            <div className="weather-data">
                <div className="col">
                    <img src={humidity_icon} alt="Humidity" />
                    <div>
                        <p>{data.humidity} %</p>
                        <span>Humidity</span>
                    </div>
                </div>

                <div className="col">
                    <img src={wind_icon} alt="Wind Speed" />
                    <div>
                        <p>{data.windSpeed} Km/h</p>
                        <span>Wind Speed</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CurrentWeather;
