import logo from "./logo.svg";
import "./App.css";
import Inputs from "./components/Inputs";
import React, { useState } from "react";

function App() {
  return (
    <div className="App">
      <h1 className="trip">TripCast</h1>
      <h2>Get Directions and Weather for points along your route</h2>
      <Inputs />
    </div>
  );
}

export default App;
