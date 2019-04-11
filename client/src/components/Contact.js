import React from "react";
import contact from "../css/contact.css";

class Contact extends React.Component {
  render() {
    return (
      <section id="contact-us">
        <div className="enclosed-container">
          <h2 style={{ padding: "10px 0" }}> Contact Us </h2>
          <div className="contact-info">
            <span>
              <i className="fas fa-phone" /> Phone Number:{" "}
            </span>
            <span>
              <i className="fas fa-map-marked-alt" /> Address:{" "}
            </span>
            <span>
              <i className="fas fa-fax" /> Fax Number:{" "}
            </span>
            <span>
              <i className="fas fa-envelope" /> Email: g12transport1@gmail.com
            </span>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
