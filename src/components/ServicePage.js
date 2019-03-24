import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Navigation from './Navigation';

class ServicePage extends React.Component {
  render() {
    return(
      <div>
        <Navigation />
      </div>
    );
  }
};

export default ServicePage;
