import React, { useState } from "react";
import axios from "axios";
import ForecastPreview from "./ForecastPreview";
import "./Forecast.css";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="Forecast row">
        {forecast.list.slice(0, 5).map(function (forecastItem) {
          return <ForecastPreview data={forecastItem} />;
        })}
      </div>
    );
  } else {
    const apiKey = "bc234aab8bbb2968177962751d16dea0";
    let forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(forecastUrl).then(handleForecastResponse);

    return null;
  }
}
