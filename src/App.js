import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { firebaseApp } from './utils/firebase';
import 'prismjs/prism';
import 'prismjs/themes/prism-okaidia.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/common.scss';
// import firebase from 'firebase/app';
// import Header from './components/Header';
import Footer from './components/Footer';
import Splash from './components/Pages/Splash';
import AboutMe from './components/Pages/AboutMe';
import BlogPage from './components/Pages/BlogPage';
import BlogSection from './components/Pages/BlogSection';
import BlogContent from './components/Pages/BlogContent';

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


  // ---Utility functions

  const formatDate = (dateString) => {
    dateString = new Date (dateString);
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      day: "2-digit",
      month: "long",
      hour: "2-digit",
      minute: "2-digit"
    }).format(dateString);
  }

  return (
    <Router>
      <div className="App">
        {/* <Header /> */}
        <section className="main-body col-9 mh-auto">
          <Switch>
            <Route exact path="/blog/:blog_id">
              <BlogContent
                data={blogData}
                dateFormat = {formatDate}
              />
            </Route>
            
            <Route exact path="/blogs">
              <BlogPage />
            </Route>
            
            <Route exact path="/">
              <Splash />
              <AboutMe />
              <BlogSection
                data={blogData}
                dateFormat = {formatDate} />
            </Route>
          </Switch>
        </section>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
