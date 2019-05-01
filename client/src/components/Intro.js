import React from "react";
import intro from "../css/intro.css";
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import mainImg from "../img/truckport2.jpg";

class Intro extends React.Component {

  formatLanguage(language) {
    if(language == "english") {
      return {
        header: "Are You a Business?",
        desc: "G-12 Transport works locally to transport loads throughout the state of California. If you are a company looking to have your merchandise transported, click here:",
        link: "Request Service"
      }
      } else if(language == "spanish") {
        return {
          header: "Es un negocio?",
          desc: "G-12 Transport trabaja localmente para transportar cargas en todo el estado de California. Si usted es una empresa que busca transportar su mercancía, haga clic aquí:",
          link: "Solicitar servicios"
        }
      }
    }

  render() {
    return (
      <section>
        <div className="intro-container">
          <div style={{textAlign: "center"}} className="box">
            <h2>{this.formatLanguage(this.props.currLang).header}</h2>
            <p>
              {this.formatLanguage(this.props.currLang).desc}
            </p>
            <div className="apply-button">
              <NavLink className="button" to="/service">
                {this.formatLanguage(this.props.currLang).link}
              </NavLink>
            </div>
          </div>
          <img className="main-image" src={mainImg} alt="truck-image"/>
        </div>
      </section>
    );
  }
}
// state is the initial state from the reducers
const mapStateToProps = state => {
  return {currLang: state.translate};
}

export default connect(mapStateToProps)(Intro);
