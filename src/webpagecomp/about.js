import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from '@mui/material';
import DataDisplay from './DataDisplay';

const About = () => {
  const [keys, setKeys] = useState([]);
  const [selectValue, setSelectValue] = useState("");
  const [optionData, setOptionData] = useState(null); // State to hold optionData
  const [underlyingValue, setunderlyingValue] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8082/hc');
        const dataKeys = Object.keys(response.data); // Extract keys from the JSON response
        console.log(response)
        setKeys(dataKeys); // Update the state with the keys

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setSelectValue(selectedValue); // Update the state with the selected value

    // Example: Fetch data based on selected value
    fetchOptionData(selectedValue);
  };

  const fetchOptionData = async (selectedValue) => {
    try {
      const response = await axios.get(`http://localhost:8082/symbol?symbol=${selectedValue}`);
      setOptionData(response.data.data); // Update the state with fetched data
      setunderlyingValue(response.data.underlyingValue)
      console.log(response.data.underlyingValue)
    } catch (error) {
      console.error('Error fetching option data:', error);
    }
  };

  const handleClick = () => {
    setSelectValue("h"); // Update the state to "h"
  };

  return (
    <div>
      <h3>About</h3>
      {/* Uncomment this button if needed */}
      {/* <Button onClick={handleClick} variant="contained">Set value to "h"</Button> */}
      <select onChange={handleChange} value={selectValue}>
        <option value="">Select an option</option>
        {keys.map((key, index) => (
          <option key={index} value={key}>
            {key}
          </option>
        ))}
      </select>
      <center>
        <p>Selected value: {selectValue} {underlyingValue}</p>
        {optionData  && <DataDisplay data={optionData} underlyingValue={underlyingValue} />} 
      </center>
    </div>
  );
};

export default About;
