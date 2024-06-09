import React, {createContext, useState} from "react";

const HackathonContext = createContext();

export const HackathonProvider = ({children}) => {
  const [hackathons, setHackathons] = useState([
    {
      id: 1,
      eventName: "AI Hackathon",
      date: "2024-06-09",
      description: "A hackathon focused on AI technologies.",
      participants: ["Atul", "Anup"],
    },
    {
      id: 2,
      eventName: "Web Dev Hackathon",
      date: "2024-06-09",
      description: "A hackathon focused on web development.",
      participants: ["Ram", "Shyam"],
    },
  ]);

  const addHackathon = (hackathon) => {
    setHackathons((prevHackathons) => [...prevHackathons, hackathon]);
  };
  const updateHackathon = (index, updatedHackathon) => {
    setHackathons((prevHackathons) =>
      prevHackathons.map((hackathon, i) =>
        i === index ? updatedHackathon : hackathon
      )
    );
  };
  const deleteHackathon = (index) => {
    setHackathons((prevHackathons) => {
      const newHackathons = [...prevHackathons];
      newHackathons.splice(index, 1);
      return newHackathons;
    });
  };

  return (
    <HackathonContext.Provider
      value={{hackathons, addHackathon, updateHackathon, deleteHackathon}}
    >
      {children}
    </HackathonContext.Provider>
  );
};

export default HackathonContext;
