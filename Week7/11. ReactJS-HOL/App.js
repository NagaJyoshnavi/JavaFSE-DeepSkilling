import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const sayHello = () => {
    alert("Hello!");
  };

  const handleIncrement = () => {
    increment();
    sayHello();
  };

  const handleDecrement = () => {
    setCount((c) => c - 1);
  };

  return (
    <div style={{ marginBottom: 24 }}>
      <h2>1. Counter</h2>
      <p>Value: {count}</p>
      <button onClick={handleIncrement} style={{ marginRight: 8 }}>
        Increment
      </button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

function SayWelcome() {
  const handleClick = (message) => {
    alert(message);
  };

  return (
    <div style={{ marginBottom: 24 }}>
      <h2>2. Say Welcome</h2>
      <button onClick={() => handleClick("Welcome")}>Say Welcome</button>
    </div>
  );
}

function SyntheticDemo() {
  const handleClick = (event) => {
    console.log("Synthetic event:", event);
    alert("I was clicked");
  };

  return (
    <div style={{ marginBottom: 24 }}>
      <h2>3. Synthetic Event Demo</h2>
      <button onClick={handleClick}>Click on me</button>
    </div>
  );
}

function CurrencyConverter() {
  const [inr, setInr] = useState("");
  const [result, setResult] = useState(null);
  const rate = 90;

  const handleSubmit = (e) => {
    e.preventDefault();
    const inrAmount = parseFloat(inr);
    if (isNaN(inrAmount)) {
      alert("Enter a valid number");
      return;
    }
    const euros = inrAmount / rate;
    const rounded = euros.toFixed(2);
    setResult(rounded);
    alert(`Converting to Euro Amount is ${rounded}`);
  };

  return (
    <div style={{ marginBottom: 24 }}>
      <h2>4. Currency Converter (INR to Euro)</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Amount (INR):{" "}
            <input
              type="text"
              value={inr}
              onChange={(e) => setInr(e.target.value)}
              style={{ marginRight: 8 }}
            />
          </label>
        </div>
        <div>
          <label>
            Currency: <input type="text" value="Euro" readOnly />
          </label>
        </div>
        <div style={{ marginTop: 8 }}>
          <button type="submit">Convert</button>
        </div>
      </form>
      {result !== null && (
        <p>
          Converted Amount: <strong>€{result}</strong>
        </p>
      )}
    </div>
  );
}

function App() {
  return (
    <div style={{ padding: 20, fontFamily: "Arial, sans-serif" }}>
      <h1>Event Examples App</h1>
      <Counter />
      <SayWelcome />
      <SyntheticDemo />
      <CurrencyConverter />
    </div>
  );
}

export default App;