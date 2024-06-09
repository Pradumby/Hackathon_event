import React from "react";
import "./PastHackathonPaper.css";

const questions = [
  {
    id: 1,
    question: "What is Artificial Intelligence?",
    description:
      "Explain the concept of Artificial Intelligence and its applications in modern technology.",
  },
  {
    id: 2,
    question: "Describe the process of building a web application.",
    description:
      "Detail the steps involved in creating a web application from scratch.",
  },
  // Add more questions as needed
];

function PastHackathonPaper() {
  return (
    <div className="paper-container">
      <h2 className="paper-title">Past Hackathon Question Paper</h2>
      <div className="questions-list">
        {questions.map((q) => (
          <div
            key={q.id}
            className="question-item"
          >
            <h3 className="question-title">{q.question}</h3>
            <p className="question-description">{q.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PastHackathonPaper;
