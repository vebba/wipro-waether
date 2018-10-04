import React from "react";
import PropTypes from "prop-types";

const WeatherItemHeaeder = ({ title }) => {
  return ( 
  <div className="itemHeader">
    <h2>{title}</h2>
  </div>
  )
};

WeatherItemHeaeder.propTypes = {
  title: PropTypes.string
};

export default WeatherItemHeaeder;
