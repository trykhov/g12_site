import React from 'react';
import Navigation from './Navigation';
import Intro from './Intro';
import About from './About';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return(
      <div style={{height: "100%"}}>
        <Navigation/>
        <Intro />
        <About />
        <Footer />
      </div>
    );
  };
};

export default App;
