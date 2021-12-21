import React, { useState } from "react";
import { Home } from "./Home";

class Inputs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      origin: "",
      dest: ""
    };

    this.handleChangeOrigin = this.handleChangeOrigin.bind(this);
    this.handleChangeDest = this.handleChangeDest.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeOrigin(event) {
    this.setState({ origin: event.target.value });
  }
  handleChangeDest(event) {
    this.setState({ dest: event.target.value });
  }
  handleSubmit(event) {
    Home(this.state);
    this.setState({ origin: "", dest: "" });
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {" "}
        <label>
          Origin:
          <input
            type="text"
            value={this.state.origin}
            onChange={this.handleChangeOrigin}
          />{" "}
        </label>
        <label>
          Destination:
          <input
            type="text"
            value={this.state.dest}
            onChange={this.handleChangeDest}
          />{" "}
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Inputs;
