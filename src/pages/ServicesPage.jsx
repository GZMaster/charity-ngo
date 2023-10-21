import React from "react";
import "../styles/Services.scss";

const ServicesPage = () => {
  return (
    <setion id="services" className="servicespage_container">
      <div className="servicespage_wrapper">
        <div className="servicepage_title">
          <h1>Work Pillars</h1>
        </div>

        <div className="servicespage_body">
          <div className="servicepage_card">
            <h4>
              TO PROMOTE YOUTH EMPOWERMENT AND EDUCATION THROUGH AWARDS OF
              SCHOLARSHIP AND SCIENTIFIC INNOVATIONS THROUGH SOCIAL AND
              COMMUNITY DEVELOPMENT.
            </h4>
          </div>
          <div className="servicepage_card">
            <h4>
              TO ESTABLISH, PROMOTE AND SUPPORT THE UPLIFTMENT OF PEOPLE WITH
              DISABILITIES.
            </h4>
          </div>
          <div className="servicepage_card">
            <h4>
              TO PROVIDE SCHOLARSHIP AID TO INDIGENT STUDENTS IN HIGH
              INSTITUTIONS.
            </h4>
          </div>
          <div className="servicepage_card">
            <h4>
              TO HELP GIVE HOPE TO THE HOPELESS, DEVELOP PERSONALITY AND
              LEADERSHIP POTENTIALS AMONG THE YOUTHS AND ADOLESCENT.
            </h4>
          </div>
          <div className="servicepage_card">
            <h4>
              TO PROVIDE BUSINESS EMPOWERMENT THROUGH TRAININGS, SYMPOSIUM,
              SEMINARS AND LECTURES
            </h4>
          </div>
          <div className="servicepage_card">
            <h4>TO CATER FOR THE LESS PRIVILEGED MEMBERS OF THE SOCIETY.</h4>
          </div>
        </div>
      </div>
    </setion>
  );
};

export default ServicesPage;
