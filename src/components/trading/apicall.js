import React, { useState, useEffect } from 'react';

const Counter = () => {
  // useState example
  const [count, setCount] = useState(0);
  // useEffect example
  useEffect(() => {
    // This function will run after every render of the component
    console.log('Component has rendered or updated');
    
    // Clean-up function (optional)
    return () => {
      console.log('Component will unmount or update1234');
    };
}, []); // Empty dependencies array means it runs once on component mount



  return (
    <div>
      <p>Hello</p>
    </div>
  );
};

export default Counter;
