import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import style from "../css/servicepage.css";
import { sendEmail } from '../email/sendEmail';




class ServicePage extends React.Component {

  state = {
      from: 'trikhov@gmail.com', // sender address
      to: "tryc_khov@yahoo.com", // list of receivers
      subject: 'Test Hello World', // Subject line
      text: 'Hey just testing to see if this thing works!', // plaintext body
    };

  info = [
    { name: "name", header: "Name" },
    { name: "email", header: "Email" },
    { name: "phone_number", header: "Phone Number" },
    { name: "origin", header: "Origin" },
    { name: "destination", header: "Destination" },
    { name: "weight", header: "Weight" }
  ];

  generateQuestions = requestInfo => {
    return requestInfo.map(question => {
      if (question.header == "Email") {
        return (
          <div className="input-container" key={question.header}>
            <h2> {question.header} </h2>
            <input
              className="input-box"
              type="text"
              name={question.name}
              pattern="^(.+)@(.+).com$"
              title="Please enter a valid email"
              value={this.state.from}
              onChange={e => this.setState({ from: e.target.value })}
            />
          </div>
        );
      }
      return (
        <div className="input-container" key={question.header}>
          <h2> {question.header} </h2>
          <input className="input-box" type="text" name={question.name} />
        </div>
      );
    });
  };

  checkEmpty = stateList => {};

  render() {
    // console.log(process.env.SENDGRID_API_KEY);
    return (
      <section style={{ backgroundColor: "#10316b", height: "100%" }}>
        <div style={{ height: "78px" }} />
        <div className="survey">
          <form>
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
              $<input className="input-box" type="text" name="Price" />
            </div>
            <div
              className="submit-button"
              onClick={() => sendEmail(this.state)}
            >Submit</div>
          </form>
        </div>
      </section>
    );
  }
}

export default ServicePage;
