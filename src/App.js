import React, { useState } from 'react';
import './css/common.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'prismjs/prism';
import 'prismjs/themes/prism-okaidia.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { firebaseApp } from './utils/firebase';
// import firebase from 'firebase/app';
// import Header from './components/Header';
import Footer from './components/Footer';
import Splash from './components/Pages/Splash';
import AboutMe from './components/Pages/AboutMe';
import BlogPage from './components/Pages/BlogPage';
import BlogSection from './components/Pages/BlogSection';

function App() {

  const [blogData, setBlogData] = useState({});

  React.useEffect(()=> {
    AOS.init({
      duration : 1500,
      once: true,
      offset: 100,
      delay: 100
    });

    //--
    //const authInfo = window.sessionStorage.getItem(session);
    //setUserInfo(JSON.parse(authInfo));

    const db = firebaseApp.firestore();

    const fetchData = async () => {
      const blogData = await db.collection('blogs').get();

      setBlogData(blogData.docs.map(record => {
        let data = record.data();
        data.doc_id = record.id;
        return data;
      })
      );

    };
    fetchData();

    // validate user on page load - decide to show login screen or not
    // if (authInfo) {
    //   validateUser(JSON.parse(authInfo));
    // }

  }, []);//[session]

  // console.log(blogData && blogData);

  return (
    <Router>
      <div className="App">
        {/* <Header /> */}
        <Switch>
          <Route exact path="/">
            <Splash />
            <AboutMe />
            <BlogSection data={blogData} />
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
