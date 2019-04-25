import React from "react";
import Intro from "./Intro";
import About from "./About";
import Footer from "./Footer";
import Contact from "./Contact";
import Navigation from './Navigation';

class Home extends React.Component {
  render() {
    return (
      <div style={{height: "100%"}}>
        <Navigation />
        <div id=" " style={{ height: "70px" }} />
        <Intro />
        <About />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Home;
