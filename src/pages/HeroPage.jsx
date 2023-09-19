import React from "react";
import dotimage from "../assets/hero/group-17.svg";
import "../styles/Hero.scss";

const Hero = () => {
  return (
    <div className="heropage_container">
      <div className="heropage_wrapper">
        <div className="heropage_title">
          <h1>Reducing Hunger In Nigeria to Zero</h1>
          <p>
            With your support, we can do more. Your donation, no matter how
            much, will help us reach more poor communities to feed them and
            empower them
          </p>
          <button className="heropage_btn">Discover More</button>
        </div>

        <img src={dotimage} alt="" />
      </div>
    </div>
  );
};

export default Hero;
