import React from "react";

export function WeatherText(props) {
  return <li>{props.weather["daily"][0]["temp"]["min"]}</li>;
}

//<WeatherText weather={this.state.weather} />
