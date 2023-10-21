import React from "react";
// import dotimage from "../assets/hero/group-17.svg";
import "../styles/Hero.scss";

const Hero = () => {
  return (
    <section id="home" className="heropage_container">
      <div className="heropage_wrapper">
        <div className="heropage_title">
          <h1>
            Promoting <span>Societal Inclusiveness</span>, <br /> through help
            and support.
          </h1>
          <p>
            Apeh-Be Charitable Foundation is a non-profit organization that seek
            to promote <br />
            societal inclusiveness through care, welfare and opportunities that
            lead to a better life.
          </p>
          <button className="heropage_btn">Donate</button>
        </div>

        {/* <img src={dotimage} alt="" /> */}
      </div>
    </section>
  );
};

export default Hero;
