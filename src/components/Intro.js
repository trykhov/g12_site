import React from 'react';
import intro from '../css/intro.css';

class Intro extends React.Component {




  render() {
    return(
      <section style={{height: "100%", overflow: "auto"}}>
        <div style={{height: "78px"}}></div>
        <div className="background-image">
          <div className="options-container">
            <div className="truck-owner box">
              <h2>Are You a Business?</h2>
              <p>
                G12 Transport  works locally to transport loads throughout the state of California.
                If you are a company looking to have your merchandise transported, click here:
              </p>
              <div className="apply-button">
                <button> Request Service </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Intro;
