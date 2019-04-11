import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Intro from "./Intro";
import About from "./About";
import Footer from "./Footer";
import ServicePage from "./ServicePage";
import Home from "./Home";


class App extends React.Component {

  render() {
    return (
      <BrowserRouter style={{ height: "100%" }}>
        <Navigation />
        <Route path="/" component={Home} exact />
        <Route path="/service" render={() => <ServicePage />} />
      </BrowserRouter>
    );
  }
}

export default App;
