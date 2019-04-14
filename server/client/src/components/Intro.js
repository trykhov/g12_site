import React from "react";
import intro from "../css/intro.css";
import { NavLink } from "react-router-dom";
import mainImg from "../img/truckport2.jpg";

class Intro extends React.Component {
  render() {
    return (
      <section>
        <div className="intro-container">
          <img className="main-image" src={mainImg} alt="truck-image"/>
          <div className="box">
            <h2>Are You a Business?</h2>
            <p>
              G12 Transport works locally to transport loads throughout the
              state of California. If you are a company looking to have your
              merchandise transported, click here:
            </p>
            <div className="apply-button">
              <NavLink className="button" to="/service">
                Request Service
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Intro;
