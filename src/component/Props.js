/**
Props (Properties):
Props are like function arguments that you pass to components. 
They are a way to pass data from a parent component to a child component.
*/

import React from 'react';

function Props(props) {
    return (
        <div>
          <h2>Hello, {props.name}!</h2>
          <p>Age: {props.age}</p>
          <p>City: {props.city}</p>
          <hr/>
        </div>
      );
    
}

export default Props;



/**
function Welcome({ name, age, city }) {
  return (
    <div>
      <h2>Hello, {name}!</h2>
      <p>Age: {age}</p>
      <p>City: {city}</p>
      <hr/>
    </div>
  );
}
*/