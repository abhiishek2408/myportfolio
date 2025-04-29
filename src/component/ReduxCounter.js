// ReduxCounter.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { INCREMENT, DECREMENT } from '../Store';

const ReduxCounter = () => {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Counter: {count}</h1>
            <button onClick={() => dispatch({ type: INCREMENT })}>Increment</button>
            <button onClick={() => dispatch({ type: DECREMENT })}>Decrement</button>
        </div>
    );
};

export default ReduxCounter;
