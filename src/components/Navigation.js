import React from 'react';
import navigation from '../css/navigation.css';

class Navigation extends React.Component {
  state = {
    english: [{tab: "Home"}, {tab: "About"}, {tab: "Service"}, {tab: "Apply"}, {tab: "Contact"}],
    spanish: [{tab: "sHome"}, {tab: "sAbout"}, {tab: "sService"}, {tab: "sApply"}, {tab: "sContact"}],
    clickMenu: true, // this will switch back and forth when clicked on hamburger icon in mobile
    menuIcon: <i className="fas fa-bars fa-2x"></i>
  };


  // this function makes the tabs of the navigation
  makeTabs(language = "english") {
    if (language == "spanish") {
      return this.state.spanish.map(tabName => {
        return <div className="tab" key={tabName.tab}> {tabName.tab} </div>
      });
    } else {
      return this.state.english.map(tabName => {
        return <div className="tab" key={tabName.tab}> {tabName.tab} </div>
      });
    };
  };

  clickHamburgerIcon = () => {
    this.setState({clickMenu: !this.state.clickMenu});
    if(this.state.clickMenu === true) {
      this.setState({menuIcon: <i className="fas fa-times fa-2x"></i>});
    } else {
      this.setState({menuIcon:  <i className="fas fa-bars fa-2x"></i>});
    }
  }

  dropMenu = () => {
    if(this.state.clickMenu === !true) {
      return(
        this.state.english.map((tabName) => {
          return <div className="dropTab" key={tabName.tab}> {tabName.tab} </div>
        })
      );
    }}



  render() {
    return(
      <nav className="nav-bar">
        <div className="nav-container">
          <div className="logo-container">
            G12 Logo
          </div>
          {/* the hamburger will disappear unless the screen is strunk*/}
          <div onClick={this.clickHamburgerIcon} className="icon-container">
            {this.state.menuIcon}
          </div>
          <div className="tab-container">
            {this.makeTabs()}
          </div>
        </div>
        <div className="drop-menu">
          {this.dropMenu()}
        </div>
      </nav>
    );
  }
}

export default Navigation;
