import React from "react";
import {Link} from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="home-container">
      <div className="button-container">
        <Link
          to="/sign_in"
          className="button"
        >
          Sign In as Participant
        </Link>
        <Link
          to="/signInParticipant"
          className="button"
        >
          Sign In as Organizer
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
