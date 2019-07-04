// React + Redux
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// Style
import 'typeface-roboto';
// Navigation
import NavBar from '../NavBar';
// Footer
import Footer from '../Footer';
// Pages
import Home from '../Home';
import Test from '../../test';

const App = () => {
  return (
    <Router basename={'/'}>
      <div>
        <NavBar/>
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
        <Footer/>
      </div>
    </Router>
  );
}

export default App
