import React from 'react';
import contact from '../css/contact.css';

class Contact extends React.Component {
  render() {
    return(
      <section id="contact-us">
        <div class="enclosed-container">
          <h2> Contact Us </h2>
          <div class="contact-info">
            <span><i class="fas fa-phone"></i> Phone Number: </span>
            <span><i class="fas fa-map-marked-alt"></i> Address: </span>
            <span><i class="fas fa-fax"></i> Fax Number: </span>
            <span><i class="fas fa-envelope"></i> Email: g12transport1@gmail.com</span>
          </div>
        </div>
      </section>
    );
  };
};

export default Contact;
