import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncClick = () => {
    setCount(count + 1);
  };

  const handleDecClick = () => {
    if (count <= 0) {
      alert("Not possible less than 0");
    } else {
      setCount(count - 1);
    }
  };

  return (
    <>
      <div>
        <h1>Count: {count}</h1>
        <button onClick={handleIncClick}>Increment</button>
        <button onClick={handleDecClick}>Decrement</button>
      </div>
    </>
  );
}

export default Counter;
