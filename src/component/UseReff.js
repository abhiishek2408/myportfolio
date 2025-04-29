import React, { useState, useRef, useEffect } from "react";

function InputChangeCounterWithEffect() {
  const [inputValue, setInputValue] = useState(""); // State to store the input value
  const changeCount = useRef(0); // Ref to track number of changes

  // useEffect to count changes when inputValue updates
  useEffect(() => {
    // Increment the change count only if inputValue changes (not on first render)
    if (inputValue !== "") {
      changeCount.current += 1;
    }
  }, [inputValue]); // Dependency array ensures this runs when inputValue changes

  const handleInputChange = (e) => {
    setInputValue(e.target.value); // Update the input value on every keystroke
  };

  return (
    <div>
      <label htmlFor="inputBox">Enter text: </label>
      <input
        type="text"
        id="inputBox"
        value={inputValue}
        onChange={handleInputChange}
      />
      <p>You've changed the input <strong>{changeCount.current}</strong> times.</p>
    </div>
  );
}

export default InputChangeCounterWithEffect;
