import React from "react";

const playersData = [
  { name: "Mr. Jack", score: 50 },
  { name: "Mr. Michael", score: 70 },
  { name: "Mr. John", score: 40 },
  { name: "Mr. Ann", score: 61 },
  { name: "Mr. Elisabeth", score: 61 },
  { name: "Mr. Sachin", score: 95 },
  { name: "Mr. Dhoni", score: 100 },
  { name: "Mr. Virat", score: 84 },
  { name: "Mr. Jadeja", score: 64 },
  { name: "Mr. Raina", score: 75 },
  { name: "Mr. Rohit", score: 80 },
];

const ListOfPlayers = () => {
  const allPlayers = playersData.map((p, idx) => (
    <li key={idx}>
      {p.name} {p.score}
    </li>
  ));

  const below70 = playersData
    .filter((p) => p.score < 70)
    .map((p, idx) => (
      <li key={idx}>
        {p.name} {p.score}
      </li>
    ));

  return (
    <div style={{ padding: "1rem" }}>
      <h2>List of Players</h2>
      <ul>{allPlayers}</ul>

      <h2 style={{ marginTop: "1.5rem" }}>
        List of Players having Scores Less than 70
      </h2>
      <ul>{below70}</ul>
    </div>
  );
};

export default ListOfPlayers;