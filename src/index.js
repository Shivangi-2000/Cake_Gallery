import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyRouter from "./components/Routes"
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './reduxstore/store';

// import "../node_modules/bootstrap/dist/css/bootstarp.min.css"

ReactDOM.render(
  <Provider store = {store}> 
    <MyRouter />
  </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
