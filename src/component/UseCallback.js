import React, { useState, useCallback } from 'react';
import Child from './Child';

const UseCallback = () => {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(0);

    const increamentCounter = useCallback(() => {
        setCount((prevCount) => prevCount + 1);
    }, []);

    const decreamentCounter = useCallback(() => {
        setCount((prevCount) => prevCount - 1);
    }, []);

    const increamentNumber = useCallback(() => {
        setNumber((prevNumber) => prevNumber + 1);
    }, []);

    console.log("Component rendered");

    return (
        <div>
            <h2>Count: {count}</h2>
            <h2>Number: {number}</h2>

            <Child 
                increamentCounter={increamentCounter} 
                decreamentCounter={decreamentCounter}
                increamentNumber={increamentNumber}
            />
            
        </div>
    );
}

export default UseCallback;
