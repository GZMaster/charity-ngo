import React from "react";
import HeroPage from "./HeroPage";
import "../styles/AboutPage.scss";
import image from "../assets/aboutpageleft.png";

export const About = () => {
  return (
    <section id="about" className="aboutpage_container">
      <div className="aboutpage_wrapper">
        <div className="aboutpage_left">
          <img src={image} alt="poor child" />
        </div>

        <div className="aboutpage_right">
          <h1>
            Who <span>We Are</span>
          </h1>
          <p>
            Apeh-Be Charitable Foundation is a non-governmental organization
            established in memory of Apeh Be(Late) in order to uphold his
            virtues of concern and care for the wellbeing of the underprivileged
            and the upliftment of those non-inclusive members of society.
          </p>
          <p>
            The degenerating state of the quality of life in Nigeria, a country
            officially declared to be the poverty capital of the world in 2017,
            speaks volumes about the chronic and abysmal level of poverty in the
            country.
          </p>
          <p>
            The Foundation was legally registered in the First Quarter of 2022.
          </p>
          <div className="about-btn">
            <button className="heropage_btn">Donate</button>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutPage = () => {
  return (
    <>
      <HeroPage />

      <About />
    </>
  );
};

export default AboutPage;
