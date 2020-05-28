import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Header from './components/Header';
import Footer from './components/Footer';
import Splash from './components/Pages/Splash';
import AboutMe from './components/Pages/AboutMe';

function App() {
  return (
    <Router>
      <div className="App">
          {/* <Header /> */}
          <Splash />
          <AboutMe />
          <Footer />
      </div>
    </Router>
  );
}

export default App;
