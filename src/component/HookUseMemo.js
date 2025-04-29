/**
📘 7. useMemo — Memoize Expensive Calculations
✅ Use-Case: Used to optimize performance by caching calculated values.
 */

import React, { useState, useMemo } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(false);

  const expensiveCalculation = useMemo(() => {
    console.log("Calculating...");
    return count * 2;
  }, [count]);  // Recomputes only when count changes

  return (
    <div>
      <h2>Double: {expensiveCalculation}</h2>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setOther(!other)}>Toggle Other State</button>
    </div>
  );
}
