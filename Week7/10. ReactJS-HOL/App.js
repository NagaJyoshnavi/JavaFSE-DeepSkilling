import React from "react";

const offices = [
  {
    name: "DBS",
    rent: 50000,
    address: "Chennai",
    image: "https://images.app.goo.gl/Yd7PbGXCxcSCFosG7",
  },
  {
    name: "ABC",
    rent: 75000,
    address: "Bengaluru",
    image: "https://images.unsplash.com/photo-1586281380396-5f9a2f0c8dce?w=400",
  },
  
];

function App() {
  return (
    <div style={{ padding: 20, fontFamily: "Arial, sans-serif" }}>
      {/* Heading */}
      <h1>Office Space, at Affordable Range</h1>

      {/* Loop through offices and display each */}
      {offices.map((office, index) => {
        const rentColor = office.rent < 60000 ? "red" : "green";

        return (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              padding: 10,
              marginTop: 20,
              maxWidth: 400,
            }}
          >
            {/* Image */}
            <div>
              <img
                src={office.image}
                alt={office.name}
                style={{ width: "100%", height: "auto" }}
              />
            </div>

            {/* Details */}
            <h2>Name: {office.name}</h2>
            <p>
              Rent: <span style={{ color: rentColor }}>Rs. {office.rent}</span>
            </p>
            <p>Address: {office.address}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;