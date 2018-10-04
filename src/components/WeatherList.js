import React from "react";
import PropTypes from "prop-types";
import WeatherItem from "./WeatherItem";
import { connect } from "react-redux";
import { getReadings } from "../selectors";

const WeatherList = ({ days, readings }) => {
  return (
    <div className="App-weatherList">
      {days.allIds
        ? days.allIds.map(day => {
            return (
              <WeatherItem
                key={day}
                predictions={days.byId[day].map(id => readings.byId[id])}
              />
            );
          })
        : "loading"}
    </div>
  );
};

WeatherList.propTypes = {
  days: PropTypes.object,
  readings: PropTypes.object
};
WeatherList.defaultProps = {
  days: {},
  readings: {}
};

const mapProps = state => {
  return {
    days: state.days,
    readings: getReadings(state)
  };
};

export default connect(mapProps)(WeatherList);
