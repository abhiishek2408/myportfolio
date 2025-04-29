import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState(() => {
    // Load saved value from sessionStorage on component load
    return sessionStorage.getItem('inputValue') || '';
  });

  // Event handler for button click
  const handleClick = () => {
    setCount(count + 1); // Update count when the button is clicked
  };

  // Event handler for input change
  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue); // Update state
    sessionStorage.setItem('inputValue', newValue); // Save to sessionStorage
  };

  return (
    <>
      <button onClick={() => alert("Clicked")}>Click this</button>

      <div>
        <p>Count: {count}</p>
        <button onClick={handleClick}>Increment</button>
      </div>

      <div>
        <p>Input Value:</p>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
    </>
  );
}

export default App;
