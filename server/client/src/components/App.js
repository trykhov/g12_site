import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Intro from "./Intro";
import About from "./About";
import Footer from "./Footer";
import ServicePage from "./ServicePage";
import Home from "./Home";
import Confirm from './Confirm';
import { connect } from 'react-redux';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Home} exact />
        <Route path="/service" render={() => <ServicePage />}/>
        <Route path="/confirm" component={Confirm} />
      </BrowserRouter>
    );
  }
}


export default App;
