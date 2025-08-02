import React from "react";

const blogs = [
  {
    heading: "React Learning",
    author: "Stephen Biz",
    content: "Welcome to learning React!",
  },
  {
    heading: "Installation",
    author: "Schewzdiener",
    content: "You can install React from npm.",
  },
];

function BlogDetails() {
  return (
    <div>
      <h2>Blog Details</h2>
      {blogs.map((b, idx) => (
        <div key={b.heading} style={{ marginBottom: 16 }}>
          <div style={{ fontSize: 22, fontWeight: "bold" }}>{b.heading}</div>
          <div style={{ fontWeight: "500" }}>{b.author}</div>
          <div>{b.content}</div>
        </div>
      ))}
    </div>
  );
}

export default BlogDetails;