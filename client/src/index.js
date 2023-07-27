import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// Below added for additional Redux code
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import appReducer from './reducers'

const reducer = combineReducers({
  appReducer
})

// Instantiating the store
const store = configureStore({reducer})

// Swapped starter React wrap for Provider with the store passed in
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
