import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import TempUnit from "./TempUnit";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 id="city-head">
        <strong>
          {props.data.city}, {props.data.country}
        </strong>
      </h1>
      <div className="container">
        <div className="item" id="list">
          <ul>
            <FormattedDate date={props.data.date} zone={props.data.timeZone} />
            <li className="text-capitalize">
              <em>{props.data.description}</em>
            </li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>
        <div className="item" id="icon">
          <div>
            <WeatherIcon code={props.data.icon} />
          </div>
        </div>
        <div className="item" id="temp">
          <div>
            <TempUnit metric={props.data.temp} />
          </div>
        </div>
      </div>
    </div>
  );
}
