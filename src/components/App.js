import React from 'react';
import Navigation from './Navigation';
import Intro from './Intro';

class App extends React.Component {
  render() {
    return(
      <div>
        <Navigation/>
        <Intro />
      </div>
    );
  };
};

export default App;
