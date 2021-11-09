import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './assets/fonts/Raleway/static/Raleway-Bold.ttf'
import './assets/fonts/Raleway/static/Raleway-BoldItalic.ttf'
import './assets/fonts/Raleway/static/Abril_Fatface/AbrilFatface-Regular.ttf'
import './assets/fonts/Raleway/static/Abril_Fatface/Lobster/Lobster-Regular.ttf'
import './i18n';
import "typeface-roboto";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
