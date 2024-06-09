import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import "./SignIn.css";

function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    if (username && password) {
      navigate("/hackathons");
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-form">
        <h2 className="signin-form-title">Sign In as PartiCipant</h2>
        <form
          onSubmit={handleSignIn}
          className="space-y-4"
        >
          <input
            type="email"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="signin-input"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="signin-input"
            required
          />
          <button
            type="submit"
            className="signin-button"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
