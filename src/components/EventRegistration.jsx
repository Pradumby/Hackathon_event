import React, {useState, useContext} from "react";
import {useParams, useNavigate} from "react-router-dom";
import HackathonContext from "../ParticipantContext";
import "./EventRegistration.css";

const EventRegistrion = () => {
  const {id} = useParams();
  const {registerForHackathon} = useContext(HackathonContext);
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    skills: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserDetails({...userDetails, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registerForHackathon(parseInt(id), userDetails);
    navigate("/confirmation");
  };

  return (
    <div className="register-form-container">
      <h2 className="register-form-title">Register for Hackathon</h2>
      <form
        onSubmit={handleSubmit}
        className="register-form"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={userDetails.name}
          onChange={handleChange}
          className="register-form-input"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={userDetails.email}
          onChange={handleChange}
          className="register-form-input"
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={userDetails.phone}
          onChange={handleChange}
          className="register-form-input"
        />
        <input
          type="text"
          name="experience"
          placeholder="Total Experience"
          value={userDetails.experience}
          onChange={handleChange}
          className="register-form-input"
        />
        <textarea
          name="skills"
          placeholder="Skills & Expertise"
          value={userDetails.skills}
          onChange={handleChange}
          className="register-form-textarea"
        ></textarea>
        <button
          type="submit"
          className="register-form-button"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default EventRegistrion;
