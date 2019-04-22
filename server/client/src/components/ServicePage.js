import React from "react";
import ReactDOM from 'react-dom';
import style from "../css/servicepage.css";
import { connect } from 'react-redux';

class ServicePage extends React.Component {

  instructions = {
    instructEn: {
      main: "To help us determine rates and how we may best serve you, please fill out this from.",
      disclaimer: "We do not transport hazardous materials."
    },
    instructSp: {
      main: "",
      disclaimer: ""
    }
  }

  labels = {
    labelsEn: [
      {info: "Your Name", name: "name"},
      {info: "Email", name: "email"},
      {info: "Phone Number", name: "phone"},
      {info: "Pick Up From", name: "pick"},
      {info: "Drop Off To", name: "drop"},
      {info: "Weight", name: "weight"},
      {info: "Dry Van", name: "van"},
      {info: "Price", name: "price"}
    ],
    labelsSp: [
      {info: "Nombre", name: "name"},
      {info: "Electronico Correo", name: "email"},
      {info: "Telefono", name: "phone"},
      {info: "Pick", name: "pick"},
      {info: "Drop", name: "drop"},
      {info: "Weightzzzz", name: "weight"},
      {info: "Dryyyyy", name: "van"},
      {info: "Priceeee", name: "price"}
    ]
  }

  formatInfo(language) {
    if(language == "english") {
      return this.labels.labelsEn;
    } else if(language == "spanish") {
      return this.labels.labelsSp;
    }
  };

  formatLanguage(language) {
    if(language == "english") {
      return this.labels.labelsEn;
    } else if(language == "spanish") {
      return this.labels.labelsSp;
    }
  }


  formatLanguage(language) {
    if(language == "english") {
      return this.instructions.instructEn;
    } else if(language == "spanish") {
      return this.instructions.instructSp;
    }
  }

  // uses labelQuestions to put forms labels on left side
  label = formLabels => {
    return formLabels.map(question => {
      if(question.name == "van") {
        return(
          <tr key={question.info}>
            <td>
              <strong className="label"> {question.info} </strong>
            </td>
            <td>
              <select className="dry-van" name={question.name}>
                <option value="Yes">{question.info == "Dry Van" ? "Yes" : "Sí"}</option>
                <option value="No">No</option>
              </select>
            </td>
          </tr>
        )
      } else if(question.name == "pick" || question.name == "drop") {
        return (
          <tr key={question.info}>
            <td>
              <strong className="label"> {question.info} </strong>
            </td>
            <td>
              <input id={question.name} className="input-box" type="text" name={question.name} required/>
            </td>
          </tr>
        )
      } else {
        return(
            <tr key={question.info}>
              <td>
                <strong className="label"> {question.info} </strong>
              </td>
              <td>
                <input className="input-box" type="text" name={question.name} required/>
              </td>
            </tr>
        )
      }
    });
  };



  render() {
    return (
      <section style={{ backgroundColor: "#10316b", height: "100%" }}>
      <div id=" " style={{ height: "78px" }} />
      <form id="infoForm" action="/send_email" method="post">
        <p> {this.formatLanguage(this.props.currLang).main} </p>
        <p style={{color: "red"}}> {this.formatLanguage(this.props.currLang).disclaimer} </p>
        <p id="warning" style={{color: "red"}}></p>
        <table>
          <tbody>
            {this.label(this.formatInfo(this.props.currLang))}
          </tbody>
        </table>
        <div id="review-button">Review</div>
      </form>
      </section>
    );
  }
}


const mapStateToProps = state => {
  return {currLang: state.translate};
}

export default connect(mapStateToProps)(ServicePage);
