import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import weather from "../reducers";
import mainSaga from "../sagas";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// mount it on the Store
let middleware = applyMiddleware(sagaMiddleware);
if (process.env.NODE_ENV !== "production") {
  const devToolsExtension = window.devToolsExtension;
  if (typeof devToolsExtension === "function") {
    middleware = compose(
      middleware,
      devToolsExtension()
    );
  }
}

export default createStore(weather, middleware);

// then run the saga
sagaMiddleware.run(mainSaga);
