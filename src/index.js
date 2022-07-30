import React from 'react';
import ReactDOM from 'react-dom/client';
import {createStore, applyMiddleware, compose, combineReducers} from "redux";
import thunk from "redux-thunk";
import App from "./App";
import './index.css';
import dishesReducer from "./store/reducers/dishesReducer";
import {Provider} from "react-redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  dishes: dishesReducer,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk)),
);

const app = (
  <Provider store={store}>
    <App/>
  </Provider>
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(app);
