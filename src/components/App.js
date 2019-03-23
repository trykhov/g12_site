import React from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Navigation from './Navigation';
import Intro from './Intro';
import About from './About';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return(
      <BrowserRouter style={{height: "100%"}}>
        <div style={{height: "100%"}}>
          <Navigation/>
          <Intro />
          <About />
          <Footer />
        </div>
      </BrowserRouter>
    );
  };
};

export default App;
