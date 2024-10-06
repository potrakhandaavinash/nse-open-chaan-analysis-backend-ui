import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('John');
  const [a, seta] = useState(true);

  useEffect(() => {
    const getdata = () => {
      console.log(`The count is ${count}`);
      seta(false);
    };

    if (a) {
      getdata();
      
    }
  }, [a, count]); // Dependencies

  return (
    <div>
      <p>{`The count is ${count}`}</p>
      <button onClick={() => setCount(count + 1)}>Increase count</button>
      <button onClick={() => setName('Jane')}>Change name</button>
    </div>
  );
}

export default Counter;
