import React from "react";
import "../styles/Services.scss";

const ServicesPage = () => {
  return (
    <setion id="services" className="servicespage_container">
      <div className="servicespage_wrapper">
        <div className="servicepage_title">
          <h1>What We Do?</h1>
        </div>

        <div className="servicespage_body">
          <div className="servicepage_card">
            <h4>15 MILLION PEOPLE</h4>
            <p>
              Our life-saving programmes in 2022 reached 15 million people in
              Nigeria
            </p>
          </div>
          <div className="servicepage_card">
            <h4>36 STATES</h4>
            <p>
              We fight hunger, improve agriculture growth and provide nutrition
              in 36 states in Nigeria
            </p>
          </div>
          <div className="servicepage_card">
            <h4>FARM CARETAKERS</h4>
            <p>
              We pay our caretakers to manage the properties. They live at the
              farm are responsible for the success of the crops
            </p>
          </div>
          <div className="servicepage_card">
            <h4>OPERATIONAL COST</h4>
            <p>
              Repair & maintenance of electricity, machines, tools and
              structures costs
            </p>
          </div>
          <div className="servicepage_card">
            <h4>97%</h4>
            <p>
              Out of every 1 naira raised, 99% goes towards our charitable
              activities
            </p>
          </div>
          <div className="servicepage_card">
            <h4>TRANSPORTATION</h4>
            <p>
              We are blessed to have farm trucks, we fuel, repair & and maintain
              to transport foods to the communities
            </p>
          </div>
          <div className="servicepage_card">
            <h4>SEASONAL CROPS</h4>
            <p>
              These seasonal crops require multiple-times investments in
              seedlings several times a year
            </p>
          </div>
          <div className="servicepage_card">
            <h4>LAND ACQUISITION</h4>
            <p>
              We are working to acquire lands in marginalized communities to set
              up locations to always cater for them
            </p>
          </div>
          <div className="servicepage_card">
            <h4>ONGOING PROJECTS</h4>
            <p>
              We are working to fully utilize all our ten acre parcels for
              ongoing projects such banana & mango orchard etc
            </p>
          </div>
        </div>
      </div>
    </setion>
  );
};

export default ServicesPage;
