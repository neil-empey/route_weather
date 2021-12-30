import React, { useState } from "react";
import { RouteText } from "./RouteText";
import Button from "./Button";
import axios from "axios";
import "../App.css";

class Inputs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      origin: "",
      dest: "",
      isActive: true,
      route: ["processing"],
      weather: ["processing"]
    };

    this.handleChangeOrigin = this.handleChangeOrigin.bind(this);
    this.handleChangeDest = this.handleChangeDest.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.returnToInput = this.returnToInput.bind(this);
  }

  returnToInput(event) {
    this.setState({ isActive: true });
  }

  handleChangeOrigin(event) {
    this.setState({ origin: event.target.value });
  }
  handleChangeDest(event) {
    this.setState({ dest: event.target.value });
  }
  handleSubmit(event) {
    let destinations = { origin: this.state.origin, dest: this.state.dest };

    const baseURL = "http://127.0.0.1:3001/destinations";

    axios
      .post(baseURL, {
        destinations
      })
      .then(response => {
        let data = response.data;
        this.setState({ route: data.routeDirections });
        this.setState({ weather: data.routeWeather });
        console.log(data);
      });

    this.setState({ origin: "", dest: "", isActive: false });
    event.preventDefault();
  }

  render() {
    if (this.state.isActive === true) {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            {" "}
            <label>
              Origin:
              <input
                type="text"
                placeholder="15 Elmwood, Clinton, CT"
                value={this.state.origin}
                onChange={this.handleChangeOrigin}
              />{" "}
            </label>
            <label>
              Destination:
              <input
                type="text"
                placeholder="100 Main St, New York, NY"
                value={this.state.dest}
                onChange={this.handleChangeDest}
              />{" "}
            </label>
            <input type="submit" value="Submit" />
          </form>
          <p>enter origin and destination points exactly as shown.</p>
        </div>
      );
    }
    if (this.state.isActive != true) {
      return (
        <div className="container">
          <ol className="gradient-list">
            {this.state.route.map(x => {
              return <RouteText step={x} />;
            })}
          </ol>

          <Button function={this.returnToInput} text={"New Search"} />
        </div>
      );
    }
  }
}

export default Inputs;
