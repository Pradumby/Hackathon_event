import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import SignIn from "./components/SignIn";
import HackathonList from "./components/HackathonList";
import EventRegistration from "./components/EventRegistration";
import RegistrationConfirmation from "./components/RegistrationConfirmation";
import Dashboard from "./components/Dashboard";
import HomePage from "./HomePage";
import SignInAsParticipant from "./components/Participant/SignInAsParticipant";
import ParticipantDashboard from "./components/Participant/ParticipantDashboard";
import CreateHackathon from "./components/Participant/CreateHackathon";
import EventList from "./components/Participant/EventList";
import ParticipantList from "./components/Participant/ParticipantList";
import EditHackathon from "./components/Participant/EditHackathon";
import {HackathonProvider} from "./ContextAPI";
import HackathonDetail from "./components/HackathonsDetails";
import {HackathonProviders} from "./ParticipantContext";
import PastHackathonPaper from "./components/HackathonPaper";
import HackathonQuestion from "./components/HackathonQuestion";

// import "tailwindcss/tailwind.css";

function App() {
  return (
    <Router>
      <HackathonProviders>
        <HackathonProvider>
          <Routes>
            <Route
              path="/"
              element={<HomePage />}
            />
            <Route
              path="/sign_in"
              element={<SignIn />}
            />
            <Route
              path="/signInParticipant"
              element={<SignInAsParticipant />}
            />
            <Route
              path="/hackathons"
              element={<HackathonList />}
            />
            <Route
              path="/hackathon/:id"
              element={<HackathonDetail />}
            />
            <Route
              path="/hackathonPaper/:id"
              element={<PastHackathonPaper />}
            />
            <Route
              path="/hackathonQuestion/:id"
              element={<HackathonQuestion />}
            />
            <Route
              path="/register/:id"
              element={<EventRegistration />}
            />
            <Route
              path="/confirmation"
              element={<RegistrationConfirmation />}
            />
            <Route
              path="/dashboard"
              element={<Dashboard />}
            />
            <Route
              path="/participant-Dashboard"
              element={<ParticipantDashboard></ParticipantDashboard>}
            />
            <Route
              path="/create"
              element={<CreateHackathon></CreateHackathon>}
            />
            <Route
              path="/events"
              element={<EventList></EventList>}
            />
            <Route
              path="/participants/:id"
              element={<ParticipantList></ParticipantList>}
            />
            <Route
              path="/edit/:id"
              element={<EditHackathon></EditHackathon>}
            />
          </Routes>
        </HackathonProvider>
      </HackathonProviders>
    </Router>
  );
}

export default App;
