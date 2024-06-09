import React, {useContext} from "react";
import {Link} from "react-router-dom";
import HackathonContext from "../ParticipantContext";
import "./HackathonList.css";

const HackathonList = () => {
  const {hackathons} = useContext(HackathonContext);

  return (
    <div className="list-container">
      <h2 className="list-title">Select a Hackathon</h2>
      <ul>
        {hackathons.map((h) => (
          <li
            key={h.id}
            className="list-item"
          >
            <Link
              to={`/hackathon/${h.id}`}
              className="list-link"
            >
              <span>{h.name}</span>
              <span className="theme">- {h.theme}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HackathonList;
