import React, { useState } from "react";
import "./TempUnit.css";

export default function TempUnit(props) {
  const [unit, setUnit] = useState("metric");
  function showFahr(event) {
    event.preventDefault();
    setUnit("imperial");
  }
  function showCels(event) {
    event.preventDefault();
    setUnit("metric");
  }
  if (unit === "metric") {
    return (
      <div className="TempUnit">
        <span className="temp" id="cels-temp">
          <strong>{Math.round(props.metric)}</strong>
        </span>
        <span className="unit">
          °C |{" "}
          <a href="/" id="link" onClick={showFahr}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let imperial = (props.metric * 9) / 5 + 32;
    return (
      <div className="TempUnit">
        <span className="temp" id="fahr-temp">
          <strong>{Math.round(imperial)}</strong>
        </span>
        <span className="unit">
          <a href="/" id="link" onClick={showCels}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
