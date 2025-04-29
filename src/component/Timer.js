import React, { useState, useEffect } from "react";

const UseEffectComponent = () => {

  const [count, setCount] = useState(0);

  
  useEffect(() => {
    if (count === 10)
        alert("Count equal to 10");
   
    
  });
const container = {
   display:"inline-block",
   border:"2px solid black",
   position:"relative",
   borderRadius: "8px",   
   top:"150px",
   background: "rgba(0, 0, 0, 0.9)",
   color:"white",
   width:"40%",
   height:"190%"

};

  const h1 = {
    
    color: "white"     
        
  };
  const button = {
    background: "#9324e2", 
    color: "white",        
    padding: "10px 15px", 
    border: "4px solid white", 
    alignItems: "center",  
    justifyContent: "center", 
    gap: "15px",           
    cursor: "pointer",     
    borderRadius: "8px",   
    fontSize: "16px",      
  };
  
  

  return (
    <div style={container}>
      <h1 style={h1}>Count: {count}</h1>
      <button style={button} onClick={()=>setCount(prevCount=>prevCount+1)}>Increment</button>
      <button style={button} onClick={()=>setCount(prevCount=>prevCount-1)}>Decrement</button>
    </div>
  );

};

export default UseEffectComponent;
