import React from "react";

const books = [
  { title: "Master React", pages: 670 },
  { title: "Deep Dive into Angular 11", pages: 800 },
  { title: "Mongo Essentials", pages: 450 },
];

function BookDetails() {
  return (
    <div>
      <h2>Book Details</h2>
      {books.map((b, idx) => (
        <div key={b.title} style={{ marginBottom: 8 }}>
          <div style={{ fontWeight: "600" }}>{b.title}</div>
          <div>{b.pages}</div>
        </div>
      ))}
    </div>
  );
}

export default BookDetails;