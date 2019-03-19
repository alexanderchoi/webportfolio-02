import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

import About from './About';
import Contact from './Contact';
import Landing from './Landing';
import Navbar from './Navbar';
import Work from './Work';

import '../public/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Route exact path="/"        component={Landing} />
        <Route       path="/about"   component={About}   />
        <Route       path="/contact" component={Contact} />
        <Route       path="/landing" component={Landing} />
        <Route       path="/work"    component={Work}    />
      </Router>
    );
  }
}

export default App;