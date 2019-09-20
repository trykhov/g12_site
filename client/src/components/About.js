import React from "react";
import "../css/about.css";
import { connect } from 'react-redux';

class About extends React.Component {

  formatLanguage(language) {
    if(language === "english") {
      return {
        header: "Who We Are",
        desc: "G-12 Transport is a family owned business located in Los Angeles, California. Inspired by our family ties, our company rests on principles guided by hard work and diligence. Our team works to provide the best services possible and we pride ourselves in meeting our goals and going above and beyond for our clients.",
        quote: '“I have been in the trucking business for 23 years. After years of working to start my own trucking company, I’ve had the opportunity to realize that dream. As president and driver for G-12 Transport I offer reliability and years of experience that will help us ensure the best quality service available.”',
        pres: "Elmer Guardado, CEO and Owner Operator"
      }
      } else if(language === "spanish") {
        return {
          header: "Quienes Somos",
          desc: "G-12 Transport es una empresa familiar ubicada en los Ángeles, California. Inspirada por nuestros lazos familiares, nuestra compañía descansa en principios guiados por el trabajo duro y la diligencia. Nuestro equipo y yo trabajamos para proporcionar los mejores servicios posibles y nos enorgullecemos de cumplir con nuestros objetivos y de ir más allá para nuestros clientes.",
          quote: '"Llevo 23 años en el negocio de los camiones. Después de años de trabajar para empezar mi propia compañía, he tenido la oportunidad de realizar ese sueño. Como Presidente y conductor de G-12 Transport, ofrezco confiabilidad y años de experiencia que nos ayudarán a garantizar el mejor servicio de calidad disponible."',
          pres: "Elmer Guardado, Presidente y Owner Operator"
        }
      }
  }

  render() {
    return (
      <section id="about">
        <h1 className="about-us"> {this.formatLanguage(this.props.currLang).header} </h1>
        <div className="about-description">
          <span>
            {this.formatLanguage(this.props.currLang).desc}
          </span>
        </div>
        <div className="quote">
          <blockquote>
            <i>
              {this.formatLanguage(this.props.currLang).quote}
            </i>
          </blockquote>
        </div>
        <div id="author">
          <span>- {this.formatLanguage(this.props.currLang).pres}</span>
        </div>
      </section>
    );
  }
}

// state is the initial state from the reducers
const mapStateToProps = state => {
  return {currLang: state.translate};
}

export default connect(mapStateToProps)(About);
