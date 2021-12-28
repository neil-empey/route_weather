import axios from "axios";
import React from "react";
import Directions from "./Directions";

const baseURL = "http://127.0.0.1:3001/destinations";

export function Home(destinations) {
  axios
    .post(baseURL, {
      destinations
    })
    .then(response => {
      Directions(response.data);
    });
}
