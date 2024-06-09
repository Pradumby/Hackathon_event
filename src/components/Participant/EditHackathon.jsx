import React, {useState, useContext, useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import HackathonContext from "../../ContextAPI";
import "./EditHackathon.css";

function EditHackathon() {
  const {hackathons, updateHackathon} = useContext(HackathonContext);
  const {index} = useParams();
  const [eventName, setEventName] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const hackathon = hackathons[index];
    if (hackathon) {
      setEventName(hackathon.eventName);
      setDate(hackathon.date);
      setDescription(hackathon.description);
    }
  }, [hackathons, index]);

  const handleUpdateHackathon = () => {
    const updatedHackathon = {eventName, date, description};
    updateHackathon(index, updatedHackathon);
    navigate("/events");
  };

  return (
    <div className="edit-hackathon-container">
      <h2 className="edit-hackathon-title">Edit Hackathon</h2>
      <input
        type="text"
        placeholder="Event Name"
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
        className="edit-hackathon-input"
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="edit-hackathon-input"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="edit-hackathon-textarea"
      ></textarea>
      <button
        onClick={handleUpdateHackathon}
        className="edit-hackathon-button"
      >
        Update Hackathon
      </button>
    </div>
  );
}

export default EditHackathon;
