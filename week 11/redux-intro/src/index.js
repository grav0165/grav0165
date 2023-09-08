import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import {createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger'

const count = (state = 0, action) => {

  if(action.type === 'INCREMENT_COUNT') {
    // lets go up by 1
    return state + 1
  } else if(action.type === 'DECREMENT_COUNT') {
    return state - 1
  }
// stay the same...
  return state;
}

const dracula = (state = "🧛‍♀️", action) => {

  return state;
}

const elements = (state = [], action ) => {
  if(action.type === 'ADD_ELEMENT') {
    console.log('element to add was: ', action.payload)
    // MUTATION! Doesn't ever work
    // state.push(action.payload);
    return [...state, action.payload]
  } else if (action.type === 'EMPTY') {
    return [];
  }
  return state;
}

const store = createStore(
  combineReducers({
    count,
    dracula,
    elements,
  }),
  applyMiddleware(logger)
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
