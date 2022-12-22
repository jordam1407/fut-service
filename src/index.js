import React from 'react';
import ReactDOM from 'react-dom/client';
import './fonts/Neue-Plak-Regular.ttf'
import './fonts/NeuePlak-WideExtraBlack.ttf'
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactGA from "react-ga4";

ReactGA.initialize("G-8Y8XXMPRN3");

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
