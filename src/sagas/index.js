import { call, put, takeLatest } from "redux-saga/effects";
import moment from "moment";

export const api = url => fetch(url).then(response => response.json());

const KEY =
  process.env.REACT_APP_WEATHER_API_KEY || process.env.WEATHER_API_KEY;
export const API_URL = `https://api.openweathermap.org/data/2.5/forecast?q=London&appid=${KEY}&units=metric`;

const getDayForDate = date => moment(date).format("dddd");

const normalizeState = data => {
  const { list } = data;
  const result = {};

  const measurements = list.reduce((acc, current) => {
    return {
      ...acc,
      [current.dt]: { ...current, name: getDayForDate(current.dt_txt) }
    };
  }, {});

  const daysById = list.reduce((day, curr) => {
    const dayname = getDayForDate(curr.dt_txt);
    if (!day[dayname]) {
      day[dayname] = [];
    }
    day[dayname].push(curr.dt);
    return day;
  }, {});

  result.readings = {
    byId: measurements,
    allIds: Object.keys(measurements)
  };

  result.days = {
    byId: daysById,
    allIds: Object.keys(daysById)
  };

  return result;
};

function* fetchApiData() {
  try {
    const response = yield call(api, API_URL);
    const data = response;
    yield put({ type: "DATA_SUCCESS", payload: normalizeState(data) });
  } catch (e) {
    console.log(e);
  }
}

export default function* mainSaga() {
  yield takeLatest("REQUEST_API_DATA", fetchApiData);
}
