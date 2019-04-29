import React from "react";
import Navigation from "./Navigation";
import { connect } from "react-redux";

class Confirm extends React.Component {

  confirmLanguage = {
    en: "Your request has been sent! We will get back to you as soon as possible!",
    sp: "Su solicitud ha sido enviada, nos pondremos en contacto con usted lo antes posible."
  }


  render() {
    return (
      <section style={{ backgroundColor: "#10316b", height: "100%" }}>
        <Navigation />
        <div id=" " style={{ height: "78px" }} />
        <div style={{ width: "80%", margin: "0 auto", textAlign: "center", color: "#fff", fontFamily: "'Kanit', sans-serif" }}>
          <h1> {this.props.currLang == "english" ? this.confirmLanguage.en : this.confirmLanguage.sp} </h1>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return { currLang: state.translate };
};

export default connect(mapStateToProps)(Confirm);
