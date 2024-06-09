// import React, {useState} from "react";
// import {Link} from "react-router-dom";
// import "./EventList.css";

// const initialEvents = [
//   {
//     id: 1,
//     name: "AI Hackathon",
//     date: "2024-06-09",
//     description: "A hackathon focused on AI technologies.",
//     participants: ["Atul", "Anup"],
//   },
//   {
//     id: 2,
//     name: "Web Dev Hackathon",
//     date: "2024-06-09",
//     description: "A hackathon focused on web development.",
//     participants: ["Ram", "Shyam"],
//   },
// ];

// function EventList() {
//   const [events, setEvents] = useState(initialEvents);

//   const handleDelete = (id) => {
//     const updatedEvents = events.filter((event) => event.id !== id);
//     setEvents(updatedEvents);
//   };

//   return (
//     <div className="event-list-container">
//       <h2 className="event-list-title">Event List</h2>
//       <ul className="event-list">
//         {events.map((event) => (
//           <li
//             key={event.id}
//             className="event-item"
//           >
//             <div className="event-details">
//               <h3>{event.name}</h3>
//               <p>Date: {event.date}</p>
//               <p>{event.description}</p>
//               <Link
//                 to={`/participants/${event.id}`}
//                 className="event-link"
//               >
//                 View Participants
//               </Link>
//               <Link
//                 to={`/edit/${event.id}`}
//                 className="event-link"
//               >
//                 Edit
//               </Link>
//               <button
//                 onClick={() => handleDelete(event.id)}
//                 className="delete-button"
//               >
//                 Delete
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>
//       <Link
//         to="/create"
//         className="create-event-link"
//       >
//         Create New Event
//       </Link>
//     </div>
//   );
// }
import React, {useContext} from "react";
import {useNavigate} from "react-router-dom";
import HackathonContext from "../../ContextAPI";
import "./EventList.css";

function EventList() {
  const {hackathons, deleteHackathon} = useContext(HackathonContext);
  const navigate = useNavigate();

  const handleEdit = (index) => {
    navigate(`/edit/${index}`);
  };

  const handleDelete = (index) => {
    deleteHackathon(index);
  };

  const handleViewParticipants = (index) => {
    navigate(`/participants/${index}`);
  };

  return (
    <div className="event-list-container">
      <h2 className="event-list-title">Event List</h2>
      <ul className="event-list">
        {hackathons.map((hackathon, index) => (
          <li
            key={index}
            className="event-list-item"
          >
            <h3>{hackathon.eventName}</h3>
            <p>Date: {hackathon.date}</p>
            <p>Description: {hackathon.description}</p>
            <div className="event-list-actions">
              <button
                onClick={() => handleEdit(index)}
                className="event-list-button edit"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(index)}
                className="event-list-button delete"
              >
                Delete
              </button>
              <button
                onClick={() => handleViewParticipants(index)}
                className="event-list-button view"
              >
                View Participants
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventList;
