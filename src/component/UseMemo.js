import React, { useState, useMemo } from 'react';

const UseMemoComponent = () => {
    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    // Function to increment counterOne
    const incrementOne = () => {
        setCounterOne(counterOne + 1);
    };

    // Function to increment counterTwo
    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1);
    };

    // Using useMemo to optimize expensive calculations
    const isEven = useMemo(() => {
        console.log('Checking if counterOne is even...');
        return counterOne % 2 === 0;
    }, [counterOne]);

    console.log("Component rendered");

    return (
        <div>
            <div>
                <h2>Counter One: {counterOne}</h2>
                <button onClick={incrementOne}>Increment Counter One</button>
                <span>{isEven ? ' Even' : ' Odd'}</span>
            </div>
            <div>
                <h2>Counter Two: {counterTwo}</h2>
                <button onClick={incrementTwo}>Increment Counter Two</button>
            </div>
        </div>
    );
};

export default UseMemoComponent;
