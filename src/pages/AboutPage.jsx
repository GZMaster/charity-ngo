import React from "react";
import "../styles/About.scss";
import image from "../assets/aboutpageleft.png";

const AboutPage = () => {
  return (
    <div className="aboutpage_container">
      <div className="aboutpage_wrapper">
        <div className="aboutpage_left">
          <img src={image} alt="poor child" />
        </div>

        <div className="aboutpage_right">
          <h1>
            Who <span>We Are</span>
          </h1>
          <p>
            A non-profit and non-Governmental Organization founded in 2022 to
            promote sustainable agriculture, improve nutrition, end world hunger
            and achieve food security.
          </p>
          <p>
            We commit ourself to helping families in the poor communities, the
            marginalized and underprivileged to improve their lives and achieve
            lasting victory against poverty.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
