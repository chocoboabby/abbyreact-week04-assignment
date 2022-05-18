import React from "react";

import "./index.css";

export default function Weather() {
  return (
    <div className="Weather">
      <ul>
        <li id="feelslike">Feels like: 30 °C</li>
        <li id="humidity">Humidity: 77%</li>
        <li id="windspeed">Wind Speed: 4 km/h</li>
      </ul>
    </div>
  );
}
