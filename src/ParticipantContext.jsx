import React, {createContext, useState} from "react";

const HackathonContext = createContext();

export const HackathonProviders = ({children}) => {
  const [hackathons, setHackathons] = useState([
    {
      id: 1,
      name: "AI Hackathon",
      theme: "Artificial Intelligence",
      description: "Details about AI Hackathon",
      participants: [],
    },
    {
      id: 2,
      name: "Web Dev Hackathon",
      theme: "Web Development",
      description: "Details about Web Dev Hackathon",
      participants: [],
    },
  ]);

  const [userRegistrations, setUserRegistrations] = useState([]);

  const registerForHackathon = (hackathonId, userDetails) => {
    setHackathons(
      hackathons.map((h) =>
        h.id === hackathonId
          ? {...h, participants: [...h.participants, userDetails]}
          : h
      )
    );
    setUserRegistrations([...userRegistrations, {hackathonId, ...userDetails}]);
  };

  return (
    <HackathonContext.Provider
      value={{hackathons, userRegistrations, registerForHackathon}}
    >
      {children}
    </HackathonContext.Provider>
  );
};

export default HackathonContext;
