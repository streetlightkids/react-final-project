import React from "react";
import ForecastIcon from "./ForecastIcon";

export default function ForecastPreview(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    if (hours < 10) {
      return `0${hours}:00`;
    } else {
      return `${hours}:00`;
    }
  }

  function temperature() {
    let temperature = Math.round(props.data.main.temp);
    return `${temperature}°C`;
  }
  return (
    <div className="ForecastPreview col">
      {hours()}
      <ForecastIcon code={props.data.weather[0].icon} />
      {temperature()}
    </div>
  );
}
