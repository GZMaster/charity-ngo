import React from "react";
import "../styles/HistoryPage.scss";
import image from "../assets/history/history.svg";

const HistoryPage = () => {
  return (
    <section id="History" className="Historypage_container">
      <div className="Historypage_wrapper">
        <div className="Historypage_left">
          <img src={image} alt="poor child" />
        </div>

        <div className="Historypage_right">
          <h1>
            In Honour of late <span>APEH BE</span>
          </h1>
          <p>
            The Foundation applied for registration in the First quarter of 2021
            but had to wait till the First Quarter of 2022 when the process was
            concluded and operational approval offered.
          </p>
          <p>
            Apeh-Be Charity Foundation is a nonprofit, nongovernmental
            organization established to pursue and uphold the virtues of late
            Apeh Be who ardently believed and pursued inclusive care,
            opportunities and the welfare of all around him. He believed that
            all people should be given the liberty to live their lives to the
            fullest as long as it was within the confine of legality. Everybody
            around knew him to be fair, supportive of the weak and opposed to
            oppressive tendencies. He lived and passed away holding unto these
            virtues. The foundation seeks to promote these in his memory so
            that, even though dead, he can continue to speak.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HistoryPage;
