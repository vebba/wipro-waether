import React from "react";
import PropTypes from "prop-types";

const Temperature = ({ tempreture }) => {
  return (
    <div className="temperature">
      {tempreture}
      &#8451;
    </div>
  );
};

Temperature.propTypes = {
  tempreture: PropTypes.number
};

export default Temperature;
