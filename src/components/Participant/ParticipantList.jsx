import React from "react";
import "./ParticipantList.css";

const participants = [
  {id: 1, name: "Atul", email: "atul@example.com"},
  {id: 2, name: "Anup", email: "anup@example.com"},
  {id: 3, name: "Vivek", email: "vivek@example.com"},
  {id: 1, name: "Abhishek", email: "abhishek@example.com"},
  {id: 2, name: "Arohi", email: "arohi@example.com"},
  {id: 3, name: "Ajay", email: "ajay@example.com"},
];

function ParticipantList() {
  return (
    <div className="participant-list-container">
      <h2 className="participant-list-title">Participant List</h2>
      <ul className="participant-list">
        {participants.map((participant) => (
          <li
            key={participant.id}
            className="participant-list-item"
          >
            <span className="participant-name">{participant.name}</span>
            <span className="participant-email">{participant.email}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ParticipantList;
