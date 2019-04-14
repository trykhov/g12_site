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
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3149.722817575408!2d-122.2642541846797!3d37.86677557974283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80857c28f322c2bd%3A0x94c3e0faea478ad6!2s2333+Channing+Way%2C+Berkeley%2C+CA+94704!5e0!3m2!1sen!2sus!4v1555128988962!5m2!1sen!2sus"
                style={{border:"0", width:"600", height:"450", frameBorder:"0" }}
                 allowFullScreen>
               </iframe>
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
