import React from "react";

const Forecast = ({ forecast }) => {
    return (
        <div className="forecast-container">
            <h3>5-Day Forecast</h3>
            <div className="forecast">
                {forecast.map((day, index) => (
                    <div key={index} className="forecast-item">
                        <img src={day.icon} alt="Weather Icon" />
                        <p className="forcast-date">{day.date}</p>
                        <p className="forcast-temp">{day.temp}°C</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Forecast;
