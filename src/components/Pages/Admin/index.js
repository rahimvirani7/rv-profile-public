import React, { useState } from 'react';
import './style.scss';
import { useForm } from 'react-hook-form';
import { useHistory, Link } from 'react-router-dom'
import { firebaseApp } from '../../../utils/firebase';

const rootClass = 'admin';

function Admin(props) {

  let history = useHistory();

  const { register, errors, handleSubmit } = useForm({
    mode: "onBlur"
  });

  const showHideAddBlogForm = () => {
    setAddNewBlog(!addNewBlog);
    setSuccessAdded(false);
  }

  const {
    register: register2,
    errors: errors2,
    handleSubmit: handleSubmit2,
    reset: reset2
  } = useForm({
    mode: "onBlur"
  });

  const [aboutText, setAboutText] = useState("");
  const [addNewBlog, setAddNewBlog] = useState(false);
  const [successAdded, setSuccessAdded] = useState(false);

  const db = firebaseApp.firestore();

  // console.log("admin", props.blogData && props.blogData);

  const updateInfo = (data) => {

    const firebaseAboutData = db.collection("about").doc(props.aboutData.doc_id);

    firebaseAboutData.update(
      {
        text : aboutText
      }
    ).then(() => {
      props.setFetch(!props.fetch);
    });

    // let myData = data;
    // myData.values = myData.values.split(/\r?\n/);
    // myData.cases = myData.cases.split(/\r?\n/);

    // myData.dateAdded = new Date().toString();
    // myData.addedBy = props.user.email;

    // const pwFormatted = pwDataConvert(myData.PW);
    // myData.priorityWorkloads = pwFormatted[0];
    // myData.priorityPillars = pwFormatted[1];

    // //console.log("Output", myData);

    // const firebaseCatalogItems = db.collection("catalogItems");
    // firebaseCatalogItems.add(myData);

    alert("Updated!");
  };

  const addBlog = (data) => {
    let myData = data;
    myData.dateAdded = new Date().toString();

    db.collection("blogs").add(myData)
    .then(function(docRef) {
      reset2();
      setSuccessAdded(true);
      props.setFetch(!props.fetch);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
  }

  const handleAboutTextUpdate = e => {
    setAboutText(e.target.value);
  }

  React.useEffect(()=> {
    setAboutText(props.aboutData && props.aboutData.text);
  },[props]);

  const deleteBlog = (event,id) => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      db.collection("blogs").doc(id).delete().then(() => {
        // to refresh list of blogs after deletion
        props.setFetch(!props.fetch);
      })
      .catch(function(error) {
        console.error("Error removing document: ", error);
      });
    }

    event.target.blur();
  }

  return (

    <section className={`${rootClass} col-12 mh-auto gutter-0`}>
      <h2>Edit Info</h2>
      { props.auth.isAuthenticated ?
          <div>
            <p>
              <Link to="/">Back to Home</Link> |
              <button
                onClick={() => {
                  props.auth.signout(() => history.push("/"));
                }}
                className="link"
              >
                Sign out
              </button>
            </p>
            <p>Welcome, {props.userName}</p>
          </div>
          :
          <p>You are not logged in.</p>
      }
      { props.aboutData &&
        <form key={1} className="col-12 col-lg-10 gutter-0" id="admin-form" onSubmit={handleSubmit(updateInfo)}>

          {/* ---about text--- */}
          <div className={`${rootClass}__input-wrap`}>
            <label htmlFor="txt_about">
              About Text:
            </label><br/>
            <textarea
              ref={register({ required: true })}
              onChange={handleAboutTextUpdate}
              value={aboutText}
              name="about" id="txt_about"
              rows="15" />
            <div className="errors">
              {errors.about && 'About text cannot be blank.'}
            </div>
          </div>

          <button className={`${rootClass}__submit`}><span>Update!</span></button>
        </form>
      }

      {/* ---blogs admin controls */}
      <div className={`${rootClass}__blogs`}>
        <h4>Existing Blog Posts</h4>
        <div className={`${rootClass}__wrapper row`}>
          {
            props.blogData.length && props.blogData
            .sort((a,b) => {
              return new Date(a.dateAdded).getTime() - new Date(b.dateAdded).getTime();
            }).reverse()
            .map((blogItem, index) => (
              <div key={index} className={`${rootClass}__blogs__item col-12`}>
                <span>{index+1}.&nbsp;</span>
                <span>{blogItem.heading} ({props.dateFormat(blogItem.dateAdded)})</span>
                <button title="Delete Blog"
                  onClick={(e)=>
                    deleteBlog(e,blogItem.doc_id)
                    }
                  className="delete">
                </button>
                <button className="edit">Edit</button>
              </div>
            ))
          }
          <div className="link-wrapper col-12 mt-4">
            { !addNewBlog ?
              <button className="link" onClick={showHideAddBlogForm}>
                &#43;&nbsp;Add new blog
              </button>
              :
              <button className="link" onClick={showHideAddBlogForm}>
              &#45;&nbsp;Hide add form
              </button>
            }
          </div>
          { addNewBlog &&
            <form key={2} className="col-12 col-lg-10" id="blog-form" onSubmit={handleSubmit2(addBlog)}>
              <br/><h4>New blog</h4>
              <div className={`${rootClass}__input-wrap`}>
                <label htmlFor="txt_heading">
                  Blog Heading:
                </label><br/>
                <input
                  className="col-12"
                  ref={register2({ required: true })}
                  name="heading" id="txt_heading"
                  type="text" />
                <div className="errors">
                  {errors2.heading && 'Heading cannot be blank.'}
                </div>
              </div>
              
              <div className={`${rootClass}__input-wrap`}>
                <label htmlFor="txt_textContent">
                  Blog body:
                </label><br/>
                <textarea
                  ref={register2({ required: true })}
                  name="textContent" id="txt_textContent"
                  rows="20" />
                <div className="errors">
                  {errors2.textContent && 'Blog body text cannot be blank.'}
                </div>
              </div>

              <div className={`${rootClass}__input-wrap`}>
                <label htmlFor="txt_category">
                  Category:
                </label><br/>
                <input
                  className="col-8"
                  ref={register2({ required: true })}
                  name="category" id="txt_category"
                  type="text" />
                <div className="errors">
                  {errors2.category && 'Category cannot be blank.'}
                </div>
              </div>

              <div className={`${rootClass}__input-wrap`}>
                <label htmlFor="txt_coverImg">
                  Cover Image URL:
                </label><br/>
                <input
                  className="col-8"
                  ref={register2}
                  name="coverImg" id="txt_coverImg"
                  type="text" />
              </div>

              <button className={`${rootClass}__submit`}><span>Add!</span></button>
              { successAdded &&
                <p className="success pt-2">New blog added!</p>
              }
            </form>
          }
        </div>
      </div>
    </section>
  )
}

export default Admin;
