import React, { useState } from "react";
import ListOfPlayers from "./Components/ListOfPlayers";
import IndianPlayers from "./Components/IndianPlayers";

function App() {
  const [flag, setFlag] = useState(true);

  return (
    <div>
      {flag ? (
        <>
          <ListOfPlayers />
          <IndianPlayers />
        </>
      ) : (
        <>
          <IndianPlayers />
          <ListOfPlayers />
        </>
      )}

      <div style={{ marginTop: "2rem" }}>
        <button onClick={() => setFlag(true)}>When Flag=true</button>
        <button onClick={() => setFlag(false)} style={{ marginLeft: "1rem" }}>
          When Flag=false
        </button>
      </div>
    </div>
  );
}

export default App;