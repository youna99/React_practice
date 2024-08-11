import React, { useState } from "react";

const initialLetters = [
  {
    id: 0,
    subject: "Ready for adventure?",
    isStarred: true,
  },
  {
    id: 1,
    subject: "Time to check in!",
    isStarred: false,
  },
  {
    id: 2,
    subject: "Festival Begins in Just SEVEN Days!",
    isStarred: false,
  },
];

function Inbox() {
  const [letters, setLetters] = useState(initialLetters);
  const [hoveredId, setHoveredId] = useState(null);

  const onClickStar = (id) => {
    setLetters(
      letters.map((letter) =>
        letter.id === id ? { ...letter, isStarred: !letter.isStarred } : letter
      )
    );
  };

  const handleMouseOver = (id) => {
    setHoveredId(id);
  };

  const handleMouseOut = () => {
    setHoveredId(null);
  };
  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map((letter) => (
          <li
            key={letter.id}
            style={{
              backgroundColor: hoveredId === letter.id ? "lightblue" : "white",
              cursor: "pointer",
            }}
            onMouseOver={() => handleMouseOver(letter.id)}
            onMouseOut={handleMouseOut}
          >
            <button onClick={() => onClickStar(letter.id)}>
              {letter.isStarred ? "UnStar" : "Star"}
            </button>
            {letter.subject}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Inbox;
