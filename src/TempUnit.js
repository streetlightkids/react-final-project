import React, { useState } from "react";

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
        <span className="temp">{Math.round(props.metric)}</span>
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={showFahr}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let imperial = (props.metric * 9) / 5 + 32;
    return (
      <div className="TempUnit">
        <span className="temp">{Math.round(imperial)}</span>
        <span className="unit">
          <a href="/" onClick={showCels}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
