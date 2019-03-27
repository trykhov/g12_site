import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Navigation from "./Navigation";
import style from "../css/servicepage.css";

class ServicePage extends React.Component {
  state = {
    contactName: "",
    phoneNumber: "",
    email: "",
    startLocation: "",
    endLocation: "",
    weight: 0
  };

  checkEmpty = stateList => {};

  render() {
    return (
      <section style={{ backgroundColor: "#10316b", height: "100%" }}>
        <Navigation />
        <div style={{ height: "78px" }} />
        <div className="survey">
          <form action="https://formspree.io/tryc_khov@yahoo.com" method="POST">
            <div className="input-container">
              <h2> Name </h2>
              <input
                className="input-box"
                type="text"
                name="Name"
                value={this.state.contactName}
                onChange={e => this.setState({ contactName: e.target.value })}
              />
            </div>
            <div className="input-container">
              <h2> Phone Number </h2>
              <input
                className="input-box"
                type="text"
                name="Phone Number"
                value={this.state.phoneNumber}
                onChange={e => this.setState({ phoneNumber: e.target.value })}
              />
            </div>
            <div className="input-container">
              <h2> Email </h2>
              <input
                className="input-box"
                type="email"
                name="Email"
                value={this.state.email}
                onChange={e => this.setState({ email: e.target.value })}
              />
            </div>
            <div className="input-container">
              <h2> Starting Location </h2>
              <input
                className="input-box"
                type="text"
                name="From"
                value={this.state.startLocation}
                onChange={e => this.setState({ startLocation: e.target.value })}
              />
            </div>
            <div>
              <h2> Destination </h2>
              <input
                className="input-box"
                type="text"
                name="To"
                value={this.state.endLocation}
                onChange={e => this.setState({ endLocation: e.target.value })}
              />
            </div>
            <div className="input-container">
              <h2> Weight of Load </h2>
              <input
                className="input-box"
                type="text"
                name="Weight"
                value={this.state.weight}
                onChange={e => this.setState({ weight: e.target.value })}
              />
            </div>
            <div className="input-container">
              <h2> Dry Van? </h2>
              <input className="dry-van-yes" type="radio" name="dryVan" value="Yes" defaultChecked/>Yes
              <input className="dry-van-no" type="radio" name="dryVan" value="No" />No
            </div>
            <div className="input-container">
              <h2> Price </h2>
              <input className="input-box" type="text" name="Price" />
            </div>
            <input className="submit-button" type="submit" value="Send" />
          </form>
        </div>
      </section>
    );
  }
}

export default ServicePage;
