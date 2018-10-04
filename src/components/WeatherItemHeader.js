import React from "react";
import PropTypes from "prop-types";

const WeatherItemHeaeder = ({ title }) => {
  return <div className="itemHeader">{title}</div>;
};

WeatherItemHeaeder.propTypes = {
  title: PropTypes.string
};

export default WeatherItemHeaeder;
