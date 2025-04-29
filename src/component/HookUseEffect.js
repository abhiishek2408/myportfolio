/*
✅ useEffect Hook
The useEffect hook allows you to perform side effects in your functional components. 
A side effect is something that affects something outside the scope of the component, 
such as:

Fetching data from an API
Modifying the DOM
Setting up subscriptions
Timer functions

useEffect(() => {
  // Code that runs after every render
}, [dependencies]); // Optional dependency array
**/


import React, { useState, useEffect } from 'react';  // Importing React, useState, and useEffect

function HookUseState() {
  const [count, setCount] = useState(0);  // State to keep track of the counter

  // Line 1: This effect runs every time the component is rendered.
  useEffect(() => {
    
    console.log(`The count is now: ${count}`);// Line 2: Logging to the console whenever `count` changes
    return () => {// Line 3: Optional clean-up function (runs on unmount or before next effect)
      console.log('Clean-up before next effect or component unmount');
    };
  }, [count]);  // Line 4: Effect will run only when `count` changes

  return (
    <div>
      <h1>Counter: {count}</h1>  {/* Display count */}
      <button onClick={() => setCount(count + 1)}>Increment</button>  {/* Increment count */}
    </div>
  );
}

export default HookUseState;


/**

🔍 Line-by-Line Explanation of useEffect:
useEffect(() => {...}, [count]):

useEffect: This hook runs the code inside it after the component renders. You can think 
of it as being similar to lifecycle methods in class components like componentDidMount, 
componentDidUpdate, and componentWillUnmount.

[] (dependency array): The second argument to useEffect tells React when to run the effect. 
 If the array is empty, it only runs once after the first render (similar to componentDidMount).

[count]: This tells React to run the effect only when the count value changes.

Effect Code:
console.log('The count is now: ' + count);: Whenever count is updated, this logs the new value of count.

Cleanup:
return () => {...}: This is a cleanup function that gets called before the effect 
runs again or when the component unmounts. It's useful for cleaning up subscriptions, 
timers, or resetting things when the component is removed.
Event handler (onClick): The button click increments the count, which triggers a re-render. 
This will trigger the useEffect hook again because the count value is part of the dependency array.


 */


import React, { useState, useEffect } from 'react';

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCount(prev => prev + 1), 1000);

    return () => clearInterval(timer);  // Cleanup
  }, []);

  return <h2>Timer: {count}</h2>;
}
