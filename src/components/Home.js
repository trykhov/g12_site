import React from 'react';
import Navigation from './Navigation';
import Intro from './Intro';
import About from './About';
import Footer from './Footer';


class Home extends React.Component {
  render() {
    return(
      <div style={{height: "100%"}}>
        <Navigation/>
        <div style={{height: "78px"}}></div>
        <Intro />
        <About />
        <Footer />
      </div>
    )
  }
};

export default Home;