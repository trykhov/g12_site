import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Navigation from "./Navigation";
import style from "../css/servicepage.css";

class ServicePage extends React.Component {
  state = {
    contactName: "",
    phoneNumber: "",
    startLocation: "",
    endLocation: "",
    weight: 0,
    dryVan: true
  };

  render() {
    return (
      <section>
        <Navigation />
        <div style={{ height: "78px" }} />
        <div className="survey">
          <div className="contactName">
            <h3> Name </h3>
            <input
              type="text"
              value={this.state.contactName}
              onChange={e => this.setState({ contactName: e.target.value })}
            />
          </div>
          <div className="phoneNumber">
            <h3> Phone Number </h3>
            <input
              type="text"
              value={this.state.phoneNumber}
              onChange={e => this.setState({ phoneNumber: e.target.value })}
            />
          </div>
          <div className="locations">
            <h3> Start </h3>
            <input
              type="text"
              value={this.state.startLocation}
              onChange={e => this.setState({ startLocation: e.target.value })}
            />
            <h3> Destination </h3>
            <input
              type="text"
              value={this.state.endLocation}
              onChange={e => this.setState({ endLocation: e.target.value })}
            />
          </div>
          <div className="weight">
            <h3> Weight </h3>
            <input
              type="text"
              value={this.state.weight}
              onChange={e => this.setState({ weight: e.target.value })}
            />
          </div>
          <div className="dry">
            <h3> Dry Van </h3>
            <input type="radio" name="choice" value="yes" checked /> Yes
            <input type="radio" name="choice" value="no" /> No
          </div>
        </div>
      </section>
    );
  }
}

export default ServicePage;
