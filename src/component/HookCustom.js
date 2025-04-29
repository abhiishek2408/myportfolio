/**
📘 8. Custom Hooks — Reuse Hook Logic Across Components
✅ Use-Case: Extract and reuse logic (like input handling, fetching) across components.
 */

//useCounter.js (Custom Hook)
import { useState } from 'react';

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);

  return { count, increment, decrement };
}

export default useCounter;


//App.js
import React from 'react';
import useCounter from './useCounter';

function App() {
  const { count, increment, decrement } = useCounter(10);

  return (
    <div>
      <h2>Custom Hook Counter: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}



/**

🎯 Summary Table:

Hook	Purpose	Example Use
useState: Add state in functional components	Counter, input field
useEffect: Side effects (API, DOM, timer)	Fetch API, event listener
useContext: Global state without props drilling	Theme, user data
useRef: Access DOM or store mutable values	Focus input, timers
useReducer: Complex state management	Like Redux in a component
useCallback: Memoize function	Prevent re-renders of child
useMemo: Memoize computed values	Optimize performance
Custom Hooks: Reuse custom logic across components	useCounter, useForm, useFetch
 */