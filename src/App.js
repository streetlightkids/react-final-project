import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Berlin" />
        <footer>
          Open source code by
          <a
            href="https://github.com/streetlightkids/react-final-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Nikki Klein
          </a>
        </footer>
      </div>
    </div>
  );
}
