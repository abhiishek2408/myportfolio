// import React, { useState } from "react";

import React, { Component } from "react";

class EventHandling extends Component{
    handleclick=()=>{
        alert("clicked")
    }

    render(){
        return(
            <>
            <button onClick={this.handleclick}>click this</button>
            </>
        )
    }
}

// State is an object that holds the change inside component over time dynamically

// function EventHandling() {
//   function handleclick() {
//     alert("Clicked");
//   }

//Before Hooks (Stateless Functional Components)
//In earlier versions of React (before Hooks), functional components were used only to render UI 
//based on props, and they couldn't have state or handle component 
//lifecycle (e.g., what happens when a component is created, updated, or removed from the DOM).

//With Hooks (Functional Components with State and Lifecycle)
//Now, with Hooks, you can use state and lifecycle methods in functional components, 
//making them as powerful as class components but simpler to write and read.

//   const [count, setCount] = useState(0);

//   // Event handler function
//   const handleClick = () => {
//     setCount(count + 1); // Update state when button is clicked
//   };

  

//   return (    <>
//    <button onClick={handleclick}>click this</button>

//    <div>
//       <p>Count: {count}</p>
//       <button onClick={handleClick}>Increment</button>
//     </div>
//     </>

//   )



// }

// // export default App;
 export default EventHandling;


