import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'prismjs/prism';
import 'prismjs/themes/prism-okaidia.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from './components/Header';
import Footer from './components/Footer';
import Splash from './components/Pages/Splash';
import AboutMe from './components/Pages/AboutMe';
import BlogPage from './components/Pages/BlogPage';

function App() {

  React.useEffect(()=> {
    AOS.init({
      duration : 1500,
      once: true,
      offset: 100,
      delay: 100
    });
  }, [])

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
