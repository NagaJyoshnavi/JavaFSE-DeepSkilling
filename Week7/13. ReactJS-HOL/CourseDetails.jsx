import React from "react";

const courses = [
  { name: "Angular", date: "4/5/2021" },
  { name: "React", date: "6/3/2021" },
];

function CourseDetails() {
  return (
    <div>
      <h2>Course Details</h2>
      {courses.map((c, idx) => (
        <div key={idx} style={{ marginBottom: 8 }}>
          <div style={{ fontSize: 20 }}>{c.name}</div>
          <div>{c.date}</div>
        </div>
      ))}
    </div>
  );
}

export default CourseDetails;