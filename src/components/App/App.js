import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'typeface-roboto';
import NavBar from '../NavBar';
import Footer from '../Footer';
import Home from '../Home';

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
