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
    weight: 0,
    price: ""
  };

  info = ["Name", "Phone Number", "Email", "Origin", "Destination", "Weight of Load"];

  generateQuestions = requestInfo => {
    return requestInfo.map(question => {
      if(question == "Email") {
        return(
          <div className="input-container">
            <h2> {question} </h2>
            <input
              className="input-box"
              type="text"
              name={question}
              pattern="^(.+)@(.+).com$"
              title="Please enter a valid email"
            />
          </div>
        )
      }
      return (
        <div className="input-container">
          <h2> {question} </h2>
          <input
            className="input-box"
            type="text"
            name={question}
          />
        </div>
      );
    });
  };

  checkEmpty = stateList => {};

  render() {
    return (
      <section style={{ backgroundColor: "#10316b", height: "100%" }}>
        <Navigation />
        <div style={{ height: "78px" }} />
        <div className="survey">
          <form action="https://formspree.io/tryc_khov@yahoo.com" method="POST">
            {this.generateQuestions(this.info)}
            <div className="input-container">
              <h2> Dry Van? </h2>
              <input
                className="dry-van-yes"
                type="radio"
                name="dryVan"
                value="Yes"
                defaultChecked
              />
              Yes
              <input
                className="dry-van-no"
                type="radio"
                name="dryVan"
                value="No"
              />
              No
            </div>
            <div className="input-container">
              <h2> Price </h2>
              $<input
                className="input-box"
                type="text"
                name="Price"
              />
            </div>
            <input className="submit-button" type="submit" value="Send" />
          </form>
        </div>
      </section>
    );
  }
}

export default ServicePage;
