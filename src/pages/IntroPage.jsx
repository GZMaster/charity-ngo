import React from "react";
import "../styles/IntroPage.scss";

const IntroPage = () => {
  return (
    <div className="intropage_container">
      <div className="intropage_wrapper">
        <div className="intropage_title">
          <h3>WELCOME TO Zero Hunger</h3>
          <h1>
            We Believe that we can Eradicate <br /> <span>Poverty</span> with
            you
          </h1>
        </div>

        <div className="aboutPage_body">{/* Component Card */}</div>
      </div>
    </div>
  );
};

export default IntroPage;
