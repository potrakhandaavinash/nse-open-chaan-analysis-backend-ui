import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'January', sales: 400 },
  { name: 'February', sales: 300 },
  { name: 'March', sales: 200 },
  { name: 'April', sales: 278 },
  { name: 'May', sales: 189 }
];

const BarGraph = () => {
  return (
    <div>
      <h2>Bar Graph Example</h2>
      <BarChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="sales" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default BarGraph;
