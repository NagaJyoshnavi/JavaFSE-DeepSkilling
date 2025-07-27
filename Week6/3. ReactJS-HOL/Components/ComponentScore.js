import React from 'react';
import '../Stylesheets/mystyle.css';
const percentToDecimal = (decimal) => {
  return decimal.toFixed(2) + '%';
};
const calcScore = (total, goal) => {
  return percentToDecimal(total / goal);
};
export const CalculateScore = ({ Name, School, total, goal }) => (
  <div className="formatstyle">
    <h1><font color="Brown">Student Details:</font></h1>
    <div className="Name">
      <b><span>Name:</span></b> <span style={{ color: 'blue' }}>{Name}</span>
    </div>
    <div className="School">
      <b><span>School:</span></b> <span style={{ color: 'red' }}>{School}</span>
    </div>
    <div className="Total">
      <b><span>Total:</span></b> <span>{total}</span><span> Marks</span>
    </div>
    <div className="Score">
      <b style={{ color: 'green' }}>Score:</b> <span style={{ color: 'green' }}>{calcScore(total, goal)}</span>
    </div>
  </div>
);