import React from 'react';
import './Circle.css';
// import axios from 'axios';
// axios.get('https://www.nseindia.com/api/option-chain-equities?symbol=ABB')
//   .then(response => {
//     console.log(response.data);
//   })
//   .catch(error => {
//     console.error('Error fetching data:', error);
//   });
console.log('Error fetching data:')
const Circle = ({ children }) => {
  return (
    <div className="circle">
      {children}
    </div>
  );
};

export default Circle;
