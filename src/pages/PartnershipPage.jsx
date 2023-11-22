import React from "react";
import HeroPage from "./HeroPage";
import "../styles/PartnershipPage.scss";
import image from "../assets/partnership/partnership.svg";

export const Partnership = () => {
  return (
    <section id="Partnership" className="Partnershippage_container">
      <div className="Partnershippage_wrapper">
        <div className="Partnershippage_left">
          <img src={image} alt="poor child" />
        </div>

        <div className="Partnershippage_right">
          <h1>
            Partner<span>ship</span>
          </h1>
          <p>
            The Apeh-Be Charity Foundation as an entity given to supporting
            those lacking access to opportunities and privileges that that
            afford good and happy living is open to partnership with
            individuals, organizations and bodies that share its core values and
            objectives and would want to involved. Partnership can come in form
            of:
          </p>
          <p>
            1. Identification and donations towards one of the pillars of the
            foundation. That donation shall be recognized and the beneficiaries
            highlighted in our reports.
          </p>
          <p>
            2. Direct participation in achieving any one, or more, of the
            operational pillars. In this option, the partner is at liberty to
            choose a need we have identified, or identify the need to meet, and
            come down to the location to be physically present and monitor the
            field operation
          </p>
          <p>
            3. Suggesting an area of need that is within the scope of the
            operation of the foundation and discussing with us to define how it
            could be captured and realized.
          </p>
        </div>
      </div>
    </section>
  );
};

const PartnershipPage = () => {
  return (
    <>
      <HeroPage />
      <Partnership />
    </>
  );
};

export default PartnershipPage;
