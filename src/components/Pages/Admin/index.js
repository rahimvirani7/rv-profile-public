import React, { useState } from 'react';
import './style.scss';
import { useForm } from 'react-hook-form';
import { useHistory, Link } from 'react-router-dom'
import { firebaseApp } from '../../../utils/firebase';

const rootClass = 'admin';

function Admin(props) {

  let history = useHistory();
  const [aboutText, setAboutText] = useState(props.aboutData.text);
  const [showBlogForm, setShowBlogForm] = useState(false);
  const [successAdded, setSuccessAdded] = useState(false);
  const [editBlogMode, setEditBlogMode] = useState(false);
  const [editBlogDOC_ID, setEditBlogDOC_ID] = useState("");
  const [blogFormValues, setBlogFormValues] = useState({});
  const db = firebaseApp.firestore();

  const { register, errors, handleSubmit } = useForm({
    mode: "onBlur"
  });

  const { register: register2, errors: errors2, handleSubmit: handleSubmit2, reset: reset2} = useForm({
    mode: "onBlur"
  });

  const showHideAddBlogForm = () => {
    showBlogForm ? setShowBlogForm(false) : setShowBlogForm(true);
    setSuccessAdded(false);
    setBlogFormValues({});
    setEditBlogMode(false);
  }

  // console.log("admin", props.blogData && props.blogData);

  const updateInfo = (data) => {

    const firebaseAboutData = db.collection("about").doc(props.aboutData.doc_id);

    firebaseAboutData.update(
      {
        text : data.about
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
    //editing existing blog post
    if (editBlogMode) {
      const firebaseBlogData = db.collection("blogs").doc(editBlogDOC_ID);

      firebaseBlogData.update(
        data
      ).then(() => {
        props.setFetch(!props.fetch);
      });
    }
    //adding new blog post
    else {
      let myData = data;
      myData.dateAdded = new Date().toString();
      myData.active = Boolean(true);

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
    //setEditBlogMode(false);
  }

  const handleAboutTextUpdate = e => {
    setAboutText(e.target.value);
  }

  const handleBlogFormValueUpdate = (e,field) => {
    if (editBlogMode) {
      let typedValue = e.target.value;
      setBlogFormValues({
        ...blogFormValues,
        [field]: typedValue
      });
    }
  }

  // React.useEffect(()=> {
  //   setAboutText(props.aboutData && props.aboutData.text);
  // },[props]);

  const deleteBlog = (event,id) => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      // db.collection("blogs").doc(id).delete().then(() => {
      db.collection("blogs").doc(id).update({active: false}).then(() => {
        // to refresh list of blogs after deletion
        props.setFetch(!props.fetch);
      })
      .catch(function(error) {
        console.error("Error removing document: ", error);
      });
    }

    event.target.blur();
  }

  const editBlog = (event,id) => {
    setEditBlogMode(true);
    setShowBlogForm(true);
    const selectedBlogItem = props.blogData.length && props.blogData.filter(item => String(item.doc_id) === id)[0];
    //console.log("item",selectedBlogItem);
    setBlogFormValues(selectedBlogItem);
    setEditBlogDOC_ID(selectedBlogItem.doc_id);
  }

  return (

    <section className={`${rootClass} col-12 mh-auto gutter-0`}>
      <h2>Edit Info</h2>
      { props.auth.isAuthenticated ?
          <div>
            <div className="link-wrapper col-12 p-0">
              <span role="img" aria-label="icon">&#8592;</span>&nbsp;
              <Link className="link" to="/">Back to Home</Link>
              <span>&nbsp;|&nbsp;</span>
              <button
                onClick={() => {
                  props.auth.signout(() => history.push("/"));
                }}
                className="link"
              >
                Sign out
              </button>
            </div>
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
                <button
                  onClick={(e)=>
                    editBlog(e,blogItem.doc_id)
                    } 
                  className="edit">Edit</button>
              </div>
            ))
          }
          <div className="link-wrapper col-12 mt-4">
            { showBlogForm ?
              <button className="link" onClick={showHideAddBlogForm}>
                Cancel
              </button>
              :
              <button className="link" onClick={showHideAddBlogForm}>
                &#43;&nbsp;Add new blog
              </button>
            }
          </div>
          { showBlogForm &&
            <form key={2} className="col-12 col-lg-10" id="blog-form" onSubmit={handleSubmit2(addBlog)}>
              <br/>
              {
                editBlogMode ? <h4>Edit blog</h4>
                : <h4>New blog</h4>
              }
              <div className={`${rootClass}__input-wrap`}>
                <label htmlFor="txt_heading">
                  Blog Heading:
                </label><br/>
                <input
                  className="col-12"
                  ref={register2({ required: true })}
                  name="heading" id="txt_heading"
                  onChange={(event) => handleBlogFormValueUpdate(event, "heading")}
                  value={blogFormValues.heading}
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
                  onChange={(event) => handleBlogFormValueUpdate(event, "textContent")}
                  value={blogFormValues.textContent}
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
                  onChange={(event) => handleBlogFormValueUpdate(event, "category")}
                  value={blogFormValues.category}
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
                  onChange={(event) => handleBlogFormValueUpdate(event, "coverImg")}
                  value={blogFormValues.coverImg}
                  type="text" />
              </div>

              {
                editBlogMode ? <button className={`${rootClass}__submit`}><span>Update</span></button>
                : <button className={`${rootClass}__submit`}><span>Add!</span></button>
              }
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
