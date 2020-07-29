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
      <div className="row mt-2">
        <div className="col-6">
          <ul>
            <FormattedDate date={props.data.date} />
            <li className="text-capitalize">
              <em>{props.data.description}</em>
            </li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>
        <div className="col-6">
          <div className="clearfix">
            <div className="float-left">
              <WeatherIcon code={props.data.icon} id="main-icon" />
            </div>
            <div className="float-left">
              <TempUnit metric={props.data.temp} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
