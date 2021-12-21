import axios from "axios";
import React from "react";

const baseURL = "http://127.0.0.1:3001/destinations";
let weather;

export const Home = destinations => {
  axios
    .post(baseURL, {
      destinations
    })
    .then(response => {
      console.log(response.data);
      weather = response.data;
    });

  if (!weather) return <h1>Nothing</h1>;

  return <h1>{weather}</h1>;
};
