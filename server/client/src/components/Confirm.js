import React from "react";
import Navigation from "./Navigation";

class Confirm extends React.Component {
  render() {
    return (
      <section style={{ backgroundColor: "#10316b", height: "100%" }}>
        <Navigation />
        <div id=" " style={{ height: "78px" }} />
        <div style={{ width: "80%", margin: "0 auto", textAlign: "center", color: "#fff", fontFamily: "'Kanit', sans-serif" }}>
          <h1> Your request has been sent! We will get back to you as soon as possible! </h1>
        </div>
      </section>
    );
  }
}

export default Confirm;
