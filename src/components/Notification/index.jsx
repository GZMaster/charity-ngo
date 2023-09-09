import React from "react";
import PropTypes from "prop-types";
import "../../styles/SuccessfulNotification.scss";

const SuccessfulNotification = ({ message }) => {
  return (
    <div className="alert alert-success" role="alert">
      {message}
    </div>
  );
};

SuccessfulNotification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default SuccessfulNotification;
