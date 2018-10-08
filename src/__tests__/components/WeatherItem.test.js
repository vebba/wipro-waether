import React from "react";
import Enzyme, { shallow, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";

import WeatherItem from "../../components/WeatherItem";

Enzyme.configure({ adapter: new Adapter() });

it("<WeatherItem/> renders without data", () => {
  const tree = renderer.create(<WeatherItem />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("<WeatherItem/> with data ", () => {
  const predictions = [
    {
      name: "Day",
      dt: 1406106000444,
      main: {
        temp: 298.77,
        temp_min: 298.77,
        temp_max: 298.774,
        pressure: 1005.93,
        sea_level: 1018.18,
        grnd_level: 1005.93,
        humidity: 87,
        temp_kf: 0.26
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d"
        }
      ],
      clouds: { all: 88 },
      wind: { speed: 5.71, deg: 229.501 },
      sys: { pod: "d" },
      dt_txt: "2014-07-23 09:00:00"
    }
  ];
  const wrapper = render(<WeatherItem predictions={predictions} />);
  //expect(wrapper).toMatchSnapshot();
});
