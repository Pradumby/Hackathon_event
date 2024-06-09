import React, {useState, useContext} from "react";
import {useNavigate} from "react-router-dom";
import HackathonContext from "../../ContextAPI";
import "./CreateHackathon.css";

function CreateHackathon() {
  const [eventName, setEventName] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const {addHackathon} = useContext(HackathonContext);
  const navigate = useNavigate();

  const handleCreateHackathon = () => {
    const newHackathon = {eventName, date, description};
    addHackathon(newHackathon);
    navigate("/events");
  };

  return (
    <div className="create-hackathon-container">
      <h2 className="create-hackathon-title">Create Hackathon</h2>
      <input
        type="text"
        placeholder="Event Name"
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
        className="create-hackathon-input"
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="create-hackathon-input"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="create-hackathon-textarea"
      ></textarea>
      <button
        onClick={handleCreateHackathon}
        className="create-hackathon-button"
      >
        Create Hackathon
      </button>
    </div>
  );
}

export default CreateHackathon;
