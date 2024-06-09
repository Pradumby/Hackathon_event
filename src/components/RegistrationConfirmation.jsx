import React from "react";
import {Link} from "react-router-dom";
import "./RegistrationConfirmation.css";

function RegistrationConfirmation() {
  return (
    <div className="confirmation-container">
      <h2 className="confirmation-title">Registration Successful</h2>
      <p className="confirmation-message">
        Your registration for the hackathon has been successful!
      </p>
      <Link
        to="/dashboard"
        className="confirmation-link"
      >
        Go to Dashboard
      </Link>
    </div>
  );
}

export default RegistrationConfirmation;
