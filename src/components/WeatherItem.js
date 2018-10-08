import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import Time from "./Time";
import Temperature from "./Temperature";
import Description from "./Description";
import WeatherItemHeader from "./WeatherItemHeader";

const WeatherItem = (props) => {
  const { predictions } = props;

  if(!predictions.length) {
    return <span>No items in the list</span>
  }
  return (
    <div className="App-weatherItem">
      <WeatherItemHeader title={predictions[0].name || "Title"} />
      {predictions.map(item => (
        <div key={item.dt} className="prediction">
          <Time time={moment(item.dt_txt).format("HH:mm")} />
          <Temperature temperature={Math.floor(item.main["temp"])} />
          <Description description={item.weather[0]["main"]} />
        </div>
      ))}
    </div>
  );
};

WeatherItem.propTypes = {
  predictions: PropTypes.array
};
WeatherItem.defaultProps = {
  predictions: [
    {
      name: "DayName",
      dt: "3",
      main: {
        temp: "10"
      },
      weather: [
        {
          main: "Weather"
        }
      ]
    }
  ]
};
export default WeatherItem;
