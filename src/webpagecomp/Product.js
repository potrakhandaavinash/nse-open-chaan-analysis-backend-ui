import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from '@mui/material';
import DataDisplay from './DataDisplay';
const Product = () => {
    const [select_value, setValue] = useState("");
    const [fetchdata, setFetchData] = useState(null);
    const [keys, setKeys] = useState({});
    const [underlyingValue, setunderlyingValue] = useState([]);

    // const response = axios.get('http://localhost:8080/option?symbol=AXISBANK');
    // setFetchData(response.data);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:8080/option?symbol=AXISBANK');
          setFetchData(response.data.data);
          setunderlyingValue(response.data.underlyingValue)
          console.log(response.data); // Log the fetched data
          console.log("hello1");
          setValue("e");
        } catch (error) {
          console.error('Er ror fetching data:', error);
        }
      };

      fetchData();
    }, []);

    // useEffect(() => {
    //     const fetchData = async () => {
    //       try {
    //         const response = await axios.get('http://localhost:8080/thickdata');
    //         const dataKeys = Object.keys(response.data); // Extract keys from the JSON response
    //         setKeys(response.data); // Update the state with the keys
    //         console.log(response.data)
    //         setValue("e")
    //       } catch (error) {
    //         console.error('Error fetching data:', error);
    //       }
    //     };
    
    //     fetchData();
    //   }, [select_value]);

    const handleClick = () => {
        console.log("test");
        setValue("hdd")
         // Update the state to "h"
      };
    

    return (<div><center>
        <h3>Product</h3>
        <Button onClick={handleClick} variant="contained" value={select_value}>Set value to "h"</Button>
        {/* {fetchdata.data && <DataDisplay data={fetchdata.data} />} */}
        {fetchdata ? <DataDisplay data={fetchdata} underlyingValue={underlyingValue} /> : null}
        <p>Selected Value: {select_value}</p>
        </center></div>)
}

export default Product