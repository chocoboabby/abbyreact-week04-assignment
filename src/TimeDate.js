import React from "react";

import "./timedate.css";

export default function TimeDate() {
  return (
    <div className="TimeDate">
      <div className="col-6">
        <ul className="date-time">
          <li id="time-date">May 4, 2022 | Wednesday | 15:00</li>
          <li>Sunny</li>
        </ul>
      </div>
    </div>
  );
}
