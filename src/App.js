import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Header from './components/Header';
import Footer from './components/Footer';
import Splash from './components/Pages/Splash';
import AboutMe from './components/Pages/AboutMe';
import BlogPage from './components/Pages/BlogPage';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Header /> */}
        <Switch>
          <Route exact path="/">
            <Splash />
            <AboutMe />
          </Route>
          <Route exact path="/blogs">
            <BlogPage />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
