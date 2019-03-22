import React from 'react';
import Navigation from './Navigation';
import Intro from './Intro';
import About from './About';

class App extends React.Component {
  render() {
    return(
      <div style={{height: "100%"}}>
        <Navigation/>
        <Intro />
        <About />
      </div>
    );
  };
};

export default App;
