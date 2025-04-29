import React from 'react';

const Child = ({ increamentCounter, decreamentCounter, increamentNumber }) => {
    console.log("Child component renderred");
    return (
        <div>
            <button onClick={increamentCounter}>Increment Count</button>
            <button onClick={decreamentCounter}>Decrement Count</button>
            <button onClick={increamentNumber}>Increment Number</button>
        </div>
    );
};

export default Child;
