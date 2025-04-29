import React, { useState, useEffect } from 'react';

const Todolist = () => {
  const [student, setStudent] = useState({
    name: 'Abhishek',
    age: 20,
    cgpa: 7.6
  });

  const changecgpa = () => {
    setStudent((prevState) => ({
      ...prevState,
      cgpa: 6.6
    }));
  };

  // Use useEffect to apply background to the entire page
  useEffect(() => {
    document.body.style.backgroundColor = 'black'; // Light blue background
  }, []);

  // Style for the outer container to center everything
  const outerContainerStyle = {
    backgroundColor: 'red',
    marginTop:'120px',
    display: 'flex',
    borderRadius: '10px',       // Rounded corners
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow
    justifyContent: 'center',   // Horizontal centering
    alignItems: 'center',       // Vertical centering
    height: '50vh',            // Full viewport height
    width: '70vh',            // Full viewport height
    margin:'0 auto',
    top: '50%',                 // Move the container halfway down the viewport
    left: '50%',                // Move the container halfway across the viewport
    position: 'absolute',    
    transform: 'translate(-50%, -50%)',  // Shift back the container by half its own width and height for perfect centering
  };

  // Style for the inner container (content)
  const containerStyle = {
    backgroundColor: 'yellow',   // Container background color
    borderRadius: '10px',       // Rounded corners
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow
    padding: '20px',            // Padding inside the container
    width: '400px',             // Fixed width of container
    textAlign: 'center'         // Center text inside the container
  };

  const headingStyle = {
    backgroundColor: 'pink',
    color: 'blue',
    fontSize: '24px',
    marginBottom: '20px'
  };

  const buttonStyle = {
    backgroundColor: 'lightgreen',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
    fontSize: '16px'
  };

  return (
    <div style={outerContainerStyle}>
      <div style={containerStyle}>
        <h1 style={headingStyle}>
          My name is {student.name}. My age is {student.age}, My cgpa is {student.cgpa}
        </h1>
        <button style={buttonStyle} onClick={changecgpa}>
          Change CGPA
        </button>
      </div>
    </div>
  );
};

export default Todolist;
