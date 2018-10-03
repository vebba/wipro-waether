import {call, put, takeLatest} from 'redux-saga/effects'

export const api = (url) => fetch(url).then(response => response.json());


const KEY = process.env.WAETHER_API_KEY || '587f7c03647842292fe87cc4df3ae04d';
const API_URL = `http://api.openweathermap.org/data/2.5/forecast?q=London&appid=${KEY}`;

function* fetchApiData() {
    try {

        const response = yield call(api, API_URL);
        const data = response.results;
        yield put({type: 'DATA_SUCCESS', payload: data});
   


    } catch (e) {
        console.log(e);
    }
}

export default function* mainSaga() {
    yield takeLatest('REQUEST_API_DATA', fetchApiData);
}