import React, { useState } from 'react';
import './style.scss';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { firebaseApp } from '../../../utils/firebase';

const rootClass = 'admin';

function Admin(props) {
  
  const [aboutText, setAboutText] = useState("");

  const { register, errors, handleSubmit } = useForm();
  const db = firebaseApp.firestore();

  // console.log("admin", props.blogData && props.blogData);

  const onSubmit = (data) => {

    const firebaseAboutData = db.collection("about").doc(props.aboutData.doc_id);

    firebaseAboutData.update(
      {
        text : aboutText
      }
    );

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
      { props.aboutData &&
        <form className="col-12 col-lg-10 gutter-0" id="admin-form" onSubmit={handleSubmit(onSubmit)}>

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

          <button className={`${rootClass}__submit`}><span>Submit</span></button>
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
                <button onClick={(e)=> deleteBlog(e,blogItem.doc_id)} className="delete"></button>
                <button className="edit">Edit</button>
              </div>
            ))
          }
          <div className="link-wrapper col-12 mt-4">
            <span role="img" aria-label="icon">&#128279;</span>&nbsp;
            <Link className="link" to="/blogs">
              Add new blog
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Admin;