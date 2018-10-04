import React from "react";
import PropTypes from "prop-types";

const Time = ({ time }) => {
  return <div className="time">{time}</div>;
};

Time.propTypes = {
  time: PropTypes.string
};

export default Time;
