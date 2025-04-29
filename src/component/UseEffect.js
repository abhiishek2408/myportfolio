import React, { useState, useEffect } from "react";

const UseEffectComponent = () => {

  const [count, setCount] = useState(0);


  // useEffect to update count every second
  useEffect(() => {

    const interval = setTimeout(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    // Clean up the timer on component unmount
    return () => clearTimeout(interval);
    
  }, [count]); // Dependency array

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );

};

export default UseEffectComponent;
