import React from 'react';
import CohortDetails from './CohortDetails';
const cohortData = [
  {
    id: "INTADMDF10",
    tech: ".NET FSD",
    startDate: "22-Feb-2022",
    status: "Scheduled",
    coach: "Aathma",
    trainer: "Jojo Jose"
  },
  {
    id: "ADM21JF014",
    tech: "Java FSD",
    startDate: "10-Sep-2021",
    status: "Ongoing",
    coach: "Apoorv",
    trainer: "Elisa Smith"
  },
  {
    id: "CDBJF21025",
    tech: "Java FSD",
    startDate: "24-Dec-2021",
    status: "Ongoing",
    coach: "Aathma",
    trainer: "John Doe"
  }
];
function App() {
  return (
    <div>
      <h2>Cohorts Details</h2>
      {cohortData.map((cohort, index) => (
        <CohortDetails key={index} cohort={cohort} />
      ))}
    </div>
  );
}
export default App;