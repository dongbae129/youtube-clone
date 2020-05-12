import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
// import "antd/dist/antd.css";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { applyMiddleware, createStore, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const enhancer =
  process.env.NODE_ENV === "production"
    ? compose(applyMiddleware(...middleware))
    : composeWithDevTools(applyMiddleware(...middleware));
const store = createStore(rootReducer, enhancer);
sagaMiddleware.run(rootSaga);
// const store = applyMiddleware(promiseMiddleware, ReduxSaga)(createStore);

ReactDOM.render(
  <Provider
    store={
      store //(
      //rootReducer,
      //window.__REDUX_DEVTOOLS_EXTENSION__ &&
      //        window.__REDUX_DEVTOOLS_EXTENSION__()
    } //)
  >
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
