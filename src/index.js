import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Weather from "./Weather";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <h1>Weather App</h1>
    <Weather />
    <p>
      😎 This project was coded by Tetiana Nepochatova, and it is -
      <a
        href="https://github.com/Tetiana-Nepochatova/weather-react"
        target="_blank"
        rel="noreferrer"
      >
        open-sourced
      </a>
    </p>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
