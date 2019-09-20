import React from "react";
import "../css/contact.css";
import { connect } from 'react-redux';

class Contact extends React.Component {
  formatLanguage(language) {
    if(language === "english") {
      return {
        contact: "Contact Us",
        phone: "Phone Number",
        address: "Address",
        fax: "Fax Number",
        email: "Email"
        }
      } else if(language === "spanish") {
        return {
          contact: "Contáctenos",
          phone: "Número de teléfono",
          address: "Dirección",
          fax: "Número de fax",
          email: "Correo electrónico"
        }
      }
    };

  render() {
    return (
      <section id="contact-us">
        <h2> {this.formatLanguage(this.props.currLang).contact} </h2>
        <div className="enclosed-container">
          <div className="basic-info">
            <table>
              <tbody>
                <tr>
                  <td>
                    {this.formatLanguage(this.props.currLang).phone}:
                  </td>
                  <td>
                    (323)-507-2218
                  </td>
                </tr>
                <tr>
                  <td>
                    {this.formatLanguage(this.props.currLang).fax}:
                  </td>
                  <td>
                    (323)-507-2733
                  </td>
                </tr>
                <tr>
                  <td>
                    {this.formatLanguage(this.props.currLang).email}:
                  </td>
                  <td>
                    g12transport1@gmail.com
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/*<div className="address">
            <table>
              <tbody>
                <tr>
                  <td>
                    {this.formatLanguage(this.props.currLang).address}:
                  </td>
                  <td>
                    2546 Office Street, Long Beach, CA
                  </td>
                </tr>
              </tbody>
            </table>
          </div>*/}
        </div>
      </section>
    );
  }
}


// state is the initial state from the reducers
const mapStateToProps = state => {
  return {currLang: state.translate};
}

export default connect(mapStateToProps) (Contact);
