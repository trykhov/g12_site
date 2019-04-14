import React from "react";
import style from "../css/servicepage.css";



class ServicePage extends React.Component {


  labelQuestions = [
    {info: "Your Name", name: "name"},
    {info: "Email", name: "email"},
    {info: "Phone Number", name: "phone"},
    {info: "Pick Up From", name: "pick"},
    {info: "Drop Off To", name: "drop"},
    {info: "Weight", name: "weight"},
    {info: "Dry Van", name: "van"},
    {info: "Price", name: "price"}
  ];

  // uses labelQuestions to put forms labels on left side
  label = formLabels => {
    return formLabels.map(question => {
      if(question.info == "Dry Van") {
      return(
        <tr key={question.info}>
          <td>
            <strong className="label"> {question.info} </strong>
          </td>
          <td>
            <select className="dry-van" name={question.name}>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
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
                <input className="input-box" type="text" name={question.name}/>
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
      <form action="/send_email" method="post">
        <table>
          <tbody>
            <label> Info about this form </label>
            {this.label(this.labelQuestions)}
            <tr>
              <td>
                <input type="submit" value="Review Info"/>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      </section>
    );
  }
}

export default ServicePage;
