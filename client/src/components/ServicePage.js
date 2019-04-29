import React from "react";
import style from "../css/servicepage.css";
import { connect } from "react-redux";
import Navigation from "./Navigation";
import Script from "react-load-script";

class ServicePage extends React.Component {
  instructions = {
    instructEn: {
      main:
        "To help us determine rates and how we may best serve you, please fill out this from.",
      disclaimer: "* We do not transport hazardous materials."
    },
    instructSp: {
      main: "Para ayudarnos a determinar las tarifas y cómo podemos servirle mejor, complete este formulario.",
      disclaimer: "* No transportamos material peligroso."
    }
  };

  labels = {
    labelsEn: {
      name: "Your Name",
      email: "Preferred Email",
      phone: "Phone Number",
      pick: "Pick Up From",
      drop: "Drop Off To",
      weight: "Weight of Cargo (lb)",
      van: "Are there any fluids?",
      submit: "Submit"
    },
    labelsSp: {
      name: "Nombre",
      email: "Correo electrónico",
      phone: "Número de teléfono",
      pick: "Lugar de recogida",
      drop: "Lugar de entrega",
      weight: "Peso de la carga (lb)",
      van: "¿Hay algún líquido?",
      submit: "Enviar"
    }
  };

  formatInfo(language) {
    if (language == "english") {
      return this.labels.labelsEn;
    } else if (language == "spanish") {
      return this.labels.labelsSp;
    }
  }

  formatLanguage(language) {
    if (language == "english") {
      return this.labels.labelsEn;
    } else if (language == "spanish") {
      return this.labels.labelsSp;
    }
  }

  formatLanguage(language) {
    if (language == "english") {
      return this.instructions.instructEn;
    } else if (language == "spanish") {
      return this.instructions.instructSp;
    }
  }

  // uses labelQuestions to put forms labels on left side
  generateForm(list) {
    return (
      <tbody>
        <tr key="name">
          <td>
            <strong className="label">{list.name}</strong>
          </td>
          <td>
            <input
              className="input-box"
              type="text"
              name="name"
              required
              autoFocus
            />
          </td>
        </tr>
        <tr key="email">
          <td>
            <strong className="label">{list.email}</strong>
          </td>
          <td>
            <input
              className="input-box"
              type="text"
              name="email"
              pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"
              placeholder="bob@website.com"
              title="bob@website.com"
              required
            />
          </td>
        </tr>
        <tr key="phone">
          <td>
            <strong className="label">{list.phone}</strong>
          </td>
          <td>
            <input
              className="input-box"
              type="text"
              pattern="^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$"
              placeholder="123-456-7890"
              title="123-456-7890 or 1234567890"
              name="phone"
              required
            />
          </td>
        </tr>
        <tr key="pick">
          <td>
            <strong className="label">{list.pick}</strong>
          </td>
          <td>
            <input
              id="pick"
              className="input-box"
              type="text"
              name="pick"
              required
            />
          </td>
        </tr>
        <tr key="drop">
          <td>
            <strong className="label">{list.drop}</strong>
          </td>
          <td>
            <input
              id="drop"
              className="input-box"
              type="text"
              name="drop"
              required
            />
          </td>
        </tr>
        <tr key="weight">
          <td>
            <strong className="label">{list.weight}</strong>
          </td>
          <td>
            <input
              className="input-box"
              type="text"
              name="weight"
              pattern="^[0-9]+$"
              title="Please give us a number"
              required
            />
          </td>
        </tr>
        <tr key="van">
          <td>
            <strong className="label">{list.van}</strong>
          </td>
          <td>
            <select className="dry-van" name="van">
              <option value="Yes">
                {list.van == "Are there any fluids?" ? "Yes" : "Sí"}
              </option>
              <option value="No">No</option>
            </select>
          </td>
        </tr>
      </tbody>
    );
  }

  componentDidMount() {
    // when the component first boots up
    let pick = document.getElementById("pick");
    let drop = document.getElementById("drop");
    let autoPick = new window.google.maps.places.Autocomplete(pick);
    let autoDrop = new window.google.maps.places.Autocomplete(drop);
  }

  componentDidUpdate() {
    // when the state changes and the component re-renders
    this.componentDidMount();
  }

  render() {
    return (
      <section style={{ backgroundColor: "#10316b", height: "100%" }}>
        <Navigation />
        <div id=" " style={{ height: "78px" }} />
        <form id="infoForm" action="/send_email" method="post">
          <p> {this.formatLanguage(this.props.currLang).main} </p>
          <p style={{ color: "red" }}>
            {" "}
            {this.formatLanguage(this.props.currLang).disclaimer}{" "}
          </p>
          <p id="warning" style={{ color: "red" }} />
          <table>
            {this.generateForm(this.formatInfo(this.props.currLang))}
          </table>
          <button id="submit-button" type="submit">
            {this.formatInfo(this.props.currLang).submit}
          </button>
        </form>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return { currLang: state.translate };
};

export default connect(mapStateToProps)(ServicePage);
