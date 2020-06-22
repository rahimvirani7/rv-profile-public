import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { firebaseApp } from './utils/firebase';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/common.scss';
import smoothscroll from 'smoothscroll-polyfill';
// import Header from './components/Header';
import Footer from './components/Footer';
import Splash from './components/Pages/Splash';
import AboutMe from './components/Pages/AboutMe';
import BlogPage from './components/Pages/BlogPage';
import BlogSection from './components/Pages/BlogSection';
import BlogContent from './components/Pages/BlogContent';
import Admin from './components/Pages/Admin';
import Skills from './components/Pages/Skills';
import LoginPage from './components/Pages/Login';
import googleAuthenticate from "./utils/firebase";
import Contact from './components/Pages/Contact';
import NotFound from './components/NotFound';


function App() {

  smoothscroll.polyfill();

  const menuItems = [
    {
      title: 'Skills',
      url: 'skills'
    },
    {
      title: 'Blogs',
      url: 'blog'
    },
    {
      title: 'Contact',
      url: 'contact'
    },
  ];

  const [fetchUpdateFirebase, setFetchUpdateFirebase] = useState(true);
  const [blogData, setBlogData] = useState({});
  const [aboutData, setAboutData] = useState({});
  const [skillData, setSkillData] = useState({});
  const [adminList, setAdminList] = useState([]);

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
      const aboutData = await db.collection('about').get();
      const skillsData = await db.collection('skills').get();
      const adminData = await db.collection('admins').get();

      setBlogData(blogData.docs.map(record => {
        let data = record.data();
        data.doc_id = record.id;
        return data;
      })
      );

      setAboutData(aboutData.docs.map(item => {
        let data = item.data();
        data.doc_id = item.id;
        return data;
        })
        .find(item => {
          return item.active === true
        })
      );

      setSkillData(skillsData.docs.map(skill => {
        let data = skill.data();
        //data.doc_id = skill.id;
        return data;
      })
      );

      setAdminList(adminData.docs.map(record => {
        let data = record.data();
        return data.email;
      })
      );
    };
    fetchData();

    // validate user on page load - decide to show login screen or not
    // if (authInfo) {
    //   validateUser(JSON.parse(authInfo));
    // }

  }, [fetchUpdateFirebase]);//[session]

  // ---Authentication

  const sessionVar = Object.keys(sessionStorage).filter(item => item.indexOf("firebase:authUser") >= 0)[0];
  const [session, setSession] = useState(sessionVar ? sessionVar : "");
  const loggedInUserInfo = session && JSON.parse(sessionStorage.getItem(session));
  const userName = loggedInUserInfo && loggedInUserInfo.displayName;

  const googleAuth = {
    isAuthenticated: session && adminList.includes(loggedInUserInfo.email) ? true : false,
    async authenticate(cb) {
      try {
        const userRes = await googleAuthenticate();
        setSession(Object.keys(sessionStorage).filter(item => item.indexOf("firebase:authUser") >= 0)[0]);
        if (adminList.includes(userRes.email)) {
          googleAuth.isAuthenticated = true;
          setTimeout(cb, 100);
        }
      } catch (e) {
        console.log("Error logging in "+e);
      }
    },
    signout(cb) {
      if (session) {
        window.sessionStorage.removeItem(session);
        googleAuth.isAuthenticated = false;
        setTimeout(cb, 100);
        setSession("");
      }
    }
  };

  const PrivateRoute = ({ children, ...rest }) => {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          googleAuth.isAuthenticated ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }


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
        <section className="main-body col-12 col-xl-9 col-lg-10 col-sm-11 mh-auto">
          <Switch>
            <Route exact path="/blog/:blog_id">
              <BlogContent
                data={blogData}
                dateFormat = {formatDate}
              />
            </Route>
            
            <Route exact path="/blogs">
              <BlogPage
                data = {blogData}
                dateFormat = {formatDate} />
            </Route>

            <Route exact path="/login">
              <LoginPage
                auth = {googleAuth}
                session = {session}/>
            </Route>

            { adminList.length &&
            <PrivateRoute exact path="/admin">
              <Admin
                dateFormat = {formatDate}
                blogData = {blogData}
                aboutData = {aboutData}
                fetch = {fetchUpdateFirebase}
                setFetch = {setFetchUpdateFirebase}
                auth = {googleAuth}
                userName = {userName} />
            </PrivateRoute>
            }
            
            <Route exact path="/">
              <Splash
               menuItems = {menuItems} />
              <AboutMe
                data = {aboutData} />
              <Skills
                skills = {skillData} />
              <BlogSection
                data = {blogData}
                dateFormat = {formatDate} />
              <Contact />
            </Route>

            <Route path="*">
              <NotFound
                admins = {adminList} />
            </Route>

          </Switch>
        </section>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
