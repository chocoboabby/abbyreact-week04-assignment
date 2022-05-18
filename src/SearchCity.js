import React from "react";

import "./searchcity.css";

export default function SearchCity() {
  return (
    <div className="SearchCity">
      <div className="col-6">
        <form id="city-form">
          <input type="search" placeholder="Enter a city" id="city-input" />
          <br />
          <input
            type="submit"
            value="Search"
            className="btn btn-outline-dark search-btn"
          />
          <i className="fa-solid fa-map-pin locationPin"></i>
        </form>
      </div>
    </div>
  );
}
