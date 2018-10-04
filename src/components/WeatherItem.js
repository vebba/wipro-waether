import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import Time from "./Time";
import Temperature from "./Temperature";
import Description from "./Description";
import WeatherItemHeaeder from "./WeatherItemHeader";

const WeatherItem = ({ predictions }) => {
  return (
    <div className="App-weatherItem">
      <WeatherItemHeaeder title={predictions[0].name} />
      {predictions.map(item => (
        <div key={item.dt} className="prediction">
          <Time time={moment(item.dt_txt).format("HH:mm")} />
          <Temperature tempreture={Math.floor(item.main["temp"])} />
          <Description description={item.weather[0]["main"]} />
        </div>
      ))}
    </div>
  );
};

WeatherItem.propTypes = {
  predictions: PropTypes.array
};

export default WeatherItem;
