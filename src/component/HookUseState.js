import React, { useState } from 'react';  // Importing React and useState hook

function HookUseState() {
  // Line 1: Declaring a state variable `count` with an initial value of 0
  const [count, setCount] = useState(0);

  // Line 2: return JSX to display content
  return (
    <div>
      <h1>Counter: {count}</h1>  {/* Line 3: Display the current value of count */}
      <button onClick={() => setCount(count + 1)}>Increment</button> {/* Line 4: Increment the count when clicked */}
    </div>
  );
}

export default HookUseState;

/**
The useState hook allows you to add state to a functional component. It returns an array with two values:
The current state value.
A function that updates that state.

Syntax:
const [state, setState] = useState(initialValue);


Line-by-Line Explanation of useState:
const [count, setCount] = useState(0);:
count is the state variable that will hold the current value.
setCount is a function that updates the value of count.
useState(0): This initializes the state with the value 0.

JSX Inside return:
The value of count is displayed inside the <h1> tag.
The <button> has an onClick event handler that, when clicked, calls setCount(count + 1) to update the count. */