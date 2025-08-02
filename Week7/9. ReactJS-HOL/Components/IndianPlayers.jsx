import React from "react";

const IndianPlayers = () => {

  const players = [
    "Sachin1",
    "Dhoni2",
    "Virat3",
    "Rohit4",
    "Yuvraj5",
    "Raina6",
  ];

  const oddPlayers = players.filter((_, idx) => (idx + 1) % 2 === 1);
  const evenPlayers = players.filter((_, idx) => (idx + 1) % 2 === 0);

  const [firstOdd, thirdOdd, fifthOdd] = oddPlayers;
  const [secondEven, fourthEven, sixthEven] = evenPlayers;

  const T20players = ["Hardik Pandya", "Jasprit Bumrah", "Ravichandran Ashwin"];
  const RanjiTrophyPlayers = [
    "Cheteshwar Pujara",
    "Ajinkya Rahane",
    "Mayank Agarwal",
    "Hardik Pandya",
  ];
  const mergedUnique = [...new Set([...T20players, ...RanjiTrophyPlayers])];

  return (
    <div style={{ padding: "1rem" }}>
      <div>
        <h3>Odd Players</h3>
        <ul>
          <li>First : {firstOdd}</li>
          <li>Third : {thirdOdd}</li>
          <li>Fifth : {fifthOdd}</li>
        </ul>
      </div>
      <div>
        <h3>Even Players</h3>
        <ul>
          <li>Second : {secondEven}</li>
          <li>Fourth : {fourthEven}</li>
          <li>Sixth : {sixthEven}</li>
        </ul>
      </div>
      <div>
        <h3>List of Indian Players Merged:</h3>
        <ul>
          {mergedUnique.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default IndianPlayers;