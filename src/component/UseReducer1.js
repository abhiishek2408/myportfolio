import React, { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return initialState;
        default:
            return state;
    }
};

const UseReducer = () => {
    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => dispatch({type:'increment'})}>Increment</button>
            <button onClick={() => dispatch({type:'decrement'})}>Decrement</button>
            <button onClick={() => dispatch({type:'reset'})}>Reset</button>
        </div>
    );
};

export default UseReducer;
