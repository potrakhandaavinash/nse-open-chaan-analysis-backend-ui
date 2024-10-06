import React from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,LineChart,Line,
} from 'recharts';
import './OptionData.css' 

const DataDisplay = ({ data },{ underlyingValue }) => {
  console.log("HHHH",underlyingValue)
    // const [data, setData] = useState([]);
  return (
    <div>
      <h4>Option Data</h4>
      <div className="chart-container">
        <BarChart
          width={500}
          height={500}
          data={data}
          margin={{
            top: 20, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="strikePrice" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="OI_change_PE" fill="#8884d8" />
          <Bar dataKey="OI_change_CE" fill="#82ca9d" />
        </BarChart>
        <BarChart
          width={500}
          height={500}
          data={data}
          margin={{
            top: 20, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="strikePrice" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="total_OI_PE" fill="#ff7300" />
          <Bar dataKey="total_OI_CE" fill="#ffc658" />
        </BarChart>
      </div>
      <div className="chart-container">
        <BarChart
          width={500}
          height={500}
          data={data}
          margin={{
            top: 20, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="strikePrice" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Buying_PE" fill="#ffc658" />
          <Bar dataKey="Selling_PE" fill="#ff7300" />
        </BarChart>
        <BarChart
          width={500}
          height={500}
          data={data}
          margin={{
            top: 20, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="strikePrice" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Buying_CE" fill="#8dd1e1" />
          <Bar dataKey="Selling_CE" fill="#83a6ed" />
        </BarChart>
      </div>
      <h3>{underlyingValue}</h3>
      <h4>CE data</h4>
      <div className="chart-container">
        <LineChart
          width={500}
          height={550}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="strikePrice" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Buying_CE" stroke="#7aeb7a" strokeWidth={3} />
          <Line type="monotone" dataKey="Selling_CE" stroke="#ce3131" strokeWidth={3} />
        </LineChart>
        <LineChart
          width={500}
          height={550}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="strikePrice" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Buying_PE" stroke="#7aeb7a" strokeWidth={3} />
          <Line type="monotone" dataKey="Selling_PE" stroke="#ce3131" strokeWidth={3} />
        </LineChart>
      </div>
      <div className="chart-container">
        <LineChart
          width={500}
          height={550}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="strikePrice" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="total_OI_PE" stroke="#7aeb7a" strokeWidth={3} />
          <Line type="monotone" dataKey="total_OI_CE" stroke="#ce3131" strokeWidth={3} />
        </LineChart>
      </div>
      <h3>{underlyingValue}</h3>
    </div>
  );
};

export default DataDisplay;
