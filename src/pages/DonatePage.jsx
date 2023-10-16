import React from "react";
import "../styles/DonatePage.scss";

const DonatePage = () => {
  return (
    <div className="donatepage_container">
      <div className="donatepage_wrapper">
        <div className="donatepage_body">
          <div className="donatepage_card bepart_bg">
            <h3>Be Part of Something Big</h3>
            <p>
              Join us in making the world a better place by carrying out our
              objectives and mission
            </p>
            {/* <button className="heropage_btn">Volunteer</button> */}
          </div>
          <div className="donatepage_card donate_bg">
            <h3>Support A Great Course</h3>
            <p>
              Do not forget, you donating has made a big impact on the
              foundation and brings us closer to our objective. Be part of
              something great.
            </p>
            {/* <button className="heropage_btn">Donate</button> */}
          </div>
          <div className="donatepage_card partner_bg">
            <h3>We Are Open</h3>
            <p>
              We are accepting partnerships. What better way to grow our
              foundation, than to partner with people interested in our course.
            </p>
            <button
              className="heropage_btn"
              onClick={() => {
                window.location.href =
                  "https://docs.google.com/forms/d/e/1FAIpQLSdExZPPgnuicdnZ_CxVwIs8XEjm4eo0EJcZze4MNcG2tGsj3Q/viewform?usp=sf_link";
              }}
            >
              Partner With Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonatePage;
