import React from 'react';
import about from '../css/about.css';

class About extends React.Component {
  render() {
    return(
      <section id="about-section">
        <h1 className="about-us"> About Us </h1>
        <div className="about-description">
          <span>
            G12 Transport is a family owned business located in Los Angeles, California.
            Inspired by our family ties, our company rests on principles guided by hard work and diligence.
            Our team works to provide the best services possible and we pride ourselves in meeting our goals and going above and beyond for our clients.
          </span>
        </div>
        <div className="quote">
          <blockquote>
            <i>
              “I have been in the trucking business for 23 years.
              After years of working to start my own trucking company,
              I’ve had the opportunity to realize that dream.
              As president and driver for G12 Transport,
              I offer reliability and years of experience that will help us ensure the best quality service available. ”
            </i>
          </blockquote>
        </div>
        <div id="author">
          <span>
            - Elmer Guardado, CEO and Owner Operator
          </span>
        </div>
      </section>
    );
  };
};

export default About;
