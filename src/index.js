import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import * as serviceWorker from './serviceWorker';
import {REQUEST_API_DATA } from './actions'


import createStore from './store';

const store = createStore;

function render(Component) {
    ReactDOM.render(
        <Provider store={store}>
                    <Component/>
        </Provider>,
        document.getElementById('root')
    );
}
store.dispatch({type: REQUEST_API_DATA})
render(App);

serviceWorker.unregister();
