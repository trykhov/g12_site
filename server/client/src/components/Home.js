import React from "react";
import Navigation from "./Navigation";
import Intro from "./Intro";
import About from "./About";
import Footer from "./Footer";
import Contact from "./Contact";

class Home extends React.Component {
  render() {
    return (
      <div style={{ height: "100%" }}>
        <Intro />
        <About />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Home;
