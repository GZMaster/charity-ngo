import React from "react";
import GoalCard from "../components/Card/GoalCard";
import GoalData from "../assets/data/GoalData";
import "../styles/IntroPage.scss";
import Logo from "../assets/logo.svg";

const IntroPage = () => {
  return (
    <div className="intropage_container">
      <div className="intropage_wrapper">
        <div className="intropage_title">
          <h3>
            WELCOME TO Zero Hunger <img src={Logo} alt="logo" />
          </h3>
          <h1>
            We Believe that we can Eradicate <br /> <span>Poverty</span> with
            you
          </h1>
        </div>

        <div className="aboutPage_body">
          <GoalCard items={GoalData} />
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
