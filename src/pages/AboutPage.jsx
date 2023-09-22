import React from "react";
import "../styles/About.scss";
import image from "../assets/aboutpageleft.png";

const AboutPage = () => {
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
            Apeh-Be Charity Foundation is a non-profit organization dedicated to
            uplifting the less privileged in society. They believe in the
            untapped potential within every individual and aim to provide
            educational opportunities, restore hope, and empower disadvantaged
            community members.
          </p>
          <p>
            Through scholarships and social development programs, they promote
            youth education while also assisting those with disabilities,
            empowering company owners, and boosting business empowerment.
          </p>
          <div className="about-btn">
            <button className="heropage_btn">Discover More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
