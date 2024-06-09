import React, {useContext} from "react";
import {useParams, Link} from "react-router-dom";
import HackathonContext from "../ParticipantContext";
import "./HackathonDeatails.css";

const HackathonQuestion = () => {
  const {id} = useParams();
  const {hackathons} = useContext(HackathonContext);
  const hackathon = hackathons.find((h) => h.id === parseInt(id));

  if (!hackathon) {
    return (
      <div className="hackathon-detail-container">Hackathon not found.</div>
    );
  }

  return (
    <div className="hackathon-detail-container">
      <h2 className="hackathon-detail-title">{hackathon.name}</h2>
      <p className="hackathon-detail-description">{hackathon.description}</p>
      <Link
        to={`/hackathonPaper/${hackathon.id}`}
        className="hackathon-detail-register-link"
      >
        Hackathon Question
      </Link>
    </div>
  );
};

export default HackathonQuestion;
