import React from "react";
import PropTypes from "prop-types";

const Temperature = ({ temperature }) => {
  return (
    <div className="temperature">
      {temperature}
      &#8451;
    </div>
  );
};

Temperature.propTypes = {
  temperature: PropTypes.number
};

export default Temperature;
