/**
📘 6. useCallback — Memoize Functions to Prevent Re-creation
✅ Use-Case: Prevent re-creating functions unnecessarily (especially for children components).
 */

import React, { useState, useCallback } from 'react';

function Child({ onClick }) {
  console.log("Child rendered");
  return <button onClick={onClick}>Click Me</button>;
}

function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Clicked");
  }, []);  // Memoized

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <Child onClick={handleClick} />
    </div>
  );
}
