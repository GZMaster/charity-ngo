import React from "react";
import "../styles/DonatePage.scss";

const DonatePage = () => {
  return (
    <div className="donatepage_container">
      <div className="donatepage_wrapper">
        <div className="donatepage_body">
          <div className="donatepage_card">
            <h3>Be Part of Something Big</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Eu aliquet ultrices nunc.</p>
            <button className="heropage_btn">Volunteer</button>
          </div>
          <div className="donatepage_card">
            <h3>Support A Great Course</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Eu aliquet ultrices nunc.</p>
            <button className="heropage_btn">Donate</button>
          </div>
          <div className="donatepage_card">
            <h3>We Are Open</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Eu aliquet ultrices nunc.</p>
            <button className="heropage_btn">Partner With Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonatePage;
