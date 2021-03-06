import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer style={{ width: "100%", backgroundColor: "black" }}>
        <div
          style={{
            width: "80%",
            margin: "0 auto",
            padding: "20px",
            textAlign: "center",
            fontSize: "18px",
            color: "#fff",
            fontFamily: "'Kanit', sans-serif"
          }}
        >
          © 2019 G-12 Transport. All Rights Reserved
        </div>
      </footer>
    );
  }
}

export default Footer;
