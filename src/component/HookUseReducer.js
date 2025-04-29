/**
📘 5. useReducer — Advanced State Management (like Redux)
✅ Use-Case: Handles complex state logic (e.g., multiple actions).
 */

import React, { useReducer } from 'react';

const initialState = 0;

function reducer(state, action) {
  switch(action.type) {
    case 'increment': return state + 1;
    case 'decrement': return state - 1;
    default: return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Count: {state}</h2>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
    </div>
  );
}
