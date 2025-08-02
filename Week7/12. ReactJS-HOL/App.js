import React, { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [flight, setFlight] = useState("AI-101");
  const [name, setName] = useState("");
  const [ticketBooked, setTicketBooked] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setTicketBooked(false);
    setName("");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setTicketBooked(false);
    setName("");
  };

  const handleBooking = (e) => {
    e.preventDefault();
    if (name.trim() === "") {
      alert("Please enter your name");
      return;
    }
    setTicketBooked(true);
  };

  return (
    <div style={{ padding: 20, fontFamily: "Arial, sans-serif" }}>
      {isLoggedIn ? (
        <div>
          <h1>Welcome back</h1>
          <button onClick={handleLogout}>Logout</button>

          <div style={{ marginTop: 30 }}>
            <h2>Book a Flight</h2>
            {ticketBooked ? (
              <p>
                ✅ {name}, your ticket for <strong>{flight}</strong> is booked.
              </p>
            ) : (
              <form onSubmit={handleBooking}>
                <div style={{ marginBottom: 8 }}>
                  <label>
                    Your Name:{" "}
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </label>
                </div>
                <div style={{ marginBottom: 8 }}>
                  <label>
                    Choose Flight:{" "}
                    <select
                      value={flight}
                      onChange={(e) => setFlight(e.target.value)}
                    >
                      <option value="AI-101">AI-101 (Delhi → Mumbai)</option>
                      <option value="SG-202">
                        SG-202 (Bangalore → Chennai)
                      </option>
                      <option value="6E-303">6E-303 (Hyderabad → Pune)</option>
                    </select>
                  </label>
                </div>
                <button type="submit">Book Ticket</button>
              </form>
            )}
          </div>
        </div>
      ) : (
        <div>
          <h1>Please sign up.</h1>
          <button onClick={handleLogin}>Login</button>

          <div style={{ marginTop: 30 }}>
            <h2>Available Flights</h2>
            <ul>
              <li>AI-101: Delhi to Mumbai – Rs. 4500</li>
              <li>SG-202: Bengaluru to Chennai – Rs. 3800</li>
              <li>6E-303: Hyderabad to Pune – Rs. 4200</li>
            </ul>
            <p style={{ fontStyle: "italic" }}>
              (Login to book a ticket)
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;