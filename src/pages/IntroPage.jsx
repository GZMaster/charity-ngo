import React from "react";
import "../styles/About.scss";

const IntroPage = () => {
  return (
    <div className="aboutpage_container">
      <div className="aboutpage_wrapper">
        <div className="aboutpage_title">
          <h3>WELCOME TO Zero Hunger</h3>
          <h1>We Believe that we can Eradicate Poverty with you</h1>
        </div>

        <div className="aboutPage_body">{/* Component Card */}</div>
      </div>
    </div>
  );
};

export default IntroPage;
