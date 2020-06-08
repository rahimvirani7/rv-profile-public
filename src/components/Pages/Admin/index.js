import React, { useState } from 'react';
import './style.scss';
import { useForm } from "react-hook-form";
import { firebaseApp } from '../../../utils/firebase';

const rootClass = 'admin';

function Admin(props) {
  
  const [aboutText, setAboutText] = useState("");

  const { register, errors, handleSubmit } = useForm();
  const db = firebaseApp.firestore();

  console.log("admin", props.aboutData && props.aboutData);

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


  return (

    <section className={`${rootClass} col-12 mh-auto gutter-0`}>
      <h2>Edit Info</h2>
      { props.aboutData &&
        <form className="col-10 gutter-0" id="admin-form" onSubmit={handleSubmit(onSubmit)}>

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
    </section>
  )
}

export default Admin;