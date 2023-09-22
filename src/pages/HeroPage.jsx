import React from "react";
// import dotimage from "../assets/hero/group-17.svg";
import "../styles/Hero.scss";

const Hero = () => {
  return (
    <section id="home" className="heropage_container">
      <div className="heropage_wrapper">
        <div className="heropage_title">
          <h1>
            Empowering <span>Futures</span>, <br /> Inspiring Today.
          </h1>
          <p>
            Together, We Can Change the World. We at the Apeh-Be Charity
            Foundation <br /> are committed to upholding the charitable
            character and principles of our founder, Apeh Be.
          </p>
          <button className="heropage_btn">Discover More</button>
        </div>

        {/* <img src={dotimage} alt="" /> */}
      </div>
    </section>
  );
};

export default Hero;
