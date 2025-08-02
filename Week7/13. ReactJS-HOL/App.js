import React, { useState } from "react";
import CourseDetails from "./CourseDetails";
import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";

function App() {
  const [showCourses, setShowCourses] = useState(true);
  const [showBooks, setShowBooks] = useState(true);
  const [showBlogs, setShowBlogs] = useState(true);

  let header = <h1 style={{ fontFamily: "Arial" }}>Blogger App</h1>;

  return (
    <div style={{ padding: 20, fontFamily: "Segoe UI, sans-serif" }}>
      {header}

      {/* buttons to toggle each section */}
      <div style={{ marginBottom: 20 }}>
        <button onClick={() => setShowCourses((v) => !v)} style={{ marginRight: 8 }}>
          {showCourses ? "Hide" : "Show"} Course Details
        </button>
        <button onClick={() => setShowBooks((v) => !v)} style={{ marginRight: 8 }}>
          {showBooks ? "Hide" : "Show"} Book Details
        </button>
        <button onClick={() => setShowBlogs((v) => !v)}>
          {showBlogs ? "Hide" : "Show"} Blog Details
        </button>
      </div>

      <div style={{ display: "flex", gap: 40 }}>
        {/* Inline if with && */}
        <div style={{ flex: 1 }}>
          {showCourses && <CourseDetails />}
        </div>

        {/* Ternary operator example */}
        <div style={{ flex: 1 }}>
          {showBooks ? <BookDetails /> : <div>No book section currently.</div>}
        </div>

        {/* Conditional inside component (prop-based) */}
        <div style={{ flex: 1 }}>
          {showBlogs ? <BlogDetails /> : null}
        </div>
      </div>
    </div>
  );
}

export default App;