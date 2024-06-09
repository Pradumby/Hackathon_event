import React from "react";
import {Link} from "react-router-dom";
import "./Dashboard.css";

const pastHackathons = [
  {id: 1, name: "Past AI Hackathon", theme: "Artificial Intelligence"},
  {id: 2, name: "Past Web Dev Hackathon", theme: "Web Development"},
];

const upcomingHackathons = [
  {id: 3, name: "Upcoming AI Hackathon", theme: "Artificial Intelligence"},
  {id: 4, name: "Upcoming Web Dev Hackathon", theme: "Web Development"},
];

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Dashboard</h2>

      <div className="hackathon-section">
        <h3 className="text-2xl font-semibold mb-4 text-gray-700">
          Past Hackathons
        </h3>
        <ul className="hackathon-list">
          {pastHackathons.map((h) => (
            <li
              key={h.id}
              className="hackathon-item"
            >
              <Link
                to={`/hackathon/${h.id}`}
                className="hackathon-link"
              >
                {h.name} - {h.theme}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="hackathon-section">
        <h3 className="text-2xl font-semibold mb-4 text-gray-700">
          Upcoming/Ongoing Hackathons
        </h3>
        <ul className="hackathon-list">
          {upcomingHackathons.map((h) => (
            <li
              key={h.id}
              className="hackathon-item"
            >
              <Link
                to={`/hackathon/:${h.id}`}
                className="hackathon-link"
              >
                {h.name} - {h.theme}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
