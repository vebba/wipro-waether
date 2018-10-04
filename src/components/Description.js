import React from "react";
import PropTypes from "prop-types";

const Description = ({ description }) => {
  return <div className="description">{description}</div>;
};

Description.propTypes = {
  description: PropTypes.string
};

export default Description;
