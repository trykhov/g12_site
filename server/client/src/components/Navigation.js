import React from "react";
import { NavHashLink as Link } from 'react-router-hash-link';
import navigation from "../css/navigation.css";
import ServicePage from "./ServicePage";
import { connect } from 'react-redux';
import { translateEnglish, translateSpanish} from '../actions';


class Navigation extends React.Component {

  // can have local states along with central states
  state = {
    en: {
      home: "Home",
      about: "About Us",
      request: "Request Service",
      contact: "Contact Us",
      language: "Español"
    },
    sp: {
      home: "Página de inicio",
      about: "Sobre G12 Transport",
      request: "Solicitar Servicios",
      contact: "Contáctenos",
      language: "English"
    },
    menuIcon: <i className="fas fa-bars fa-2x" />,
    clickMenu: true, // this will switch back and forth when clicked on hamburger icon in mobile
  }

  formatLanguage(language) {
    if(language == "english") {
      return this.state.en;
    } else if(language == "spanish") {
      return this.state.sp;
    }
  }

  translateSwitch(language) {
    if(language == "english") {
      return this.props.translateSpanish;
    } else if(language == "spanish") {
      return this.props.translateEnglish;
    }
  }



  // this function makes the tabs of the navigation

  clickMenuIcon = () => {
    this.setState({clickMenu: !this.state.clickMenu})
    if (this.state.clickMenu === true) {
      this.setState({menuIcon: <i className="fas fa-times fa-2x" />});
    } else {
      this.setState({menuIcon: <i className="fas fa-bars fa-2x" />});
    }
  };

  dropMenu = () => {
    if (!this.state.clickMenu) {
      return (
        <div>
          <div className="dropTab" onClick={this.clickMenuIcon}>
            <Link className="tab-link" to="/# "> {this.formatLanguage(this.props.currLang).home} </Link>
          </div>
          <div className="dropTab" onClick={this.clickMenuIcon}>
            <Link className="tab-link" to="/#about"> {this.formatLanguage(this.props.currLang).about} </Link>
          </div>
          <div className="dropTab" onClick={this.clickMenuIcon}>
            <Link className="tab-link" to='/service'> {this.formatLanguage(this.props.currLang).request} </Link>
          </div>
          <div className="dropTab" onClick={this.clickMenuIcon}>
            <Link className="tab-link" to="/#contact-us"> {this.formatLanguage(this.props.currLang).contact} </Link>
          </div>
          <div className="dropTab" onClick={this.clickMenuIcon}>
            <div onClick={this.translateSwitch(this.props.currLang)}> {this.formatLanguage(this.props.currLang).language} </div>
          </div>
        </div>
      );
    };
  };


  render() {
    return (
        <nav className="nav-bar">
          <div className="nav-container">
            <div className="logo-container">G12 Logo</div>
            {/* the hamburger will disappear unless the screen is strunk*/}
            {<div onClick={this.clickMenuIcon} className="icon-container">
              {this.state.menuIcon}
            </div>}
            <div className="tab-container">
              <Link className="tab tab-link" to="/# "> {this.formatLanguage(this.props.currLang).home} </Link>
              <Link className="tab tab-link" to="/#about"> {this.formatLanguage(this.props.currLang).about} </Link>
              <Link className="tab tab-link" to='/service'> {this.formatLanguage(this.props.currLang).request} </Link>
              <Link className="tab tab-link" to="/#contact-us"> {this.formatLanguage(this.props.currLang).contact} </Link>
              <div className="tab" onClick={this.translateSwitch(this.props.currLang)}> {this.formatLanguage(this.props.currLang).language} </div>
            </div>
          </div>
          <div className="drop-menu">{this.dropMenu()}</div>
        </nav>
    );
  }
}

// state is the initial state from the reducers
const mapStateToProps = state => {
  return {
    currLang: state.translate
  };
}

export default connect(mapStateToProps, { translateEnglish, translateSpanish})(Navigation);
