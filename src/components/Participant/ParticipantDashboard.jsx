import React from "react";
import {Link} from "react-router-dom";
import "./ParticipantDashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Organizer Dashboard</h2>
      <div className="dashboard-links">
        <Link
          to="/create"
          className="dashboard-link"
        >
          Create Hackathon
        </Link>
        <Link
          to="/events"
          className="dashboard-link"
        >
          View Events
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
