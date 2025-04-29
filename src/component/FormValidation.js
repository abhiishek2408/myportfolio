import React, { useState } from "react"; // Import React and useState hook

// Main form component
const RegistrationForm = () => {
  // State to hold form values
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // State to hold any error message
  const [error, setError] = useState("");

  // Function to handle input changes
  const handleChange = (e) => {
    // Update the specific field in form state
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the page from refreshing

    // Simple validation checks
    if (!form.username || !form.email || !form.password || !form.confirmPassword) {
      setError("All fields are required."); // Check for empty fields
    } else if (!form.email.includes("@")) {
      setError("Invalid email."); // Check if email includes "@"
    } else if (form.password !== form.confirmPassword) {
      setError("Passwords do not match."); // Check if both passwords match
    } else {
      alert("Form submitted!"); // Show success message
      // Reset the form
      setForm({ username: "", email: "", password: "", confirmPassword: "" });
      setError(""); // Clear any previous error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Show error message if exists */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Username input */}
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={form.username}
        onChange={handleChange}
      /><br />

      {/* Email input */}
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      /><br />

      {/* Password input */}
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
      /><br />

      {/* Confirm password input */}
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={form.confirmPassword}
        onChange={handleChange}
      /><br />

      {/* Submit button */}
      <button type="submit">Register</button>
    </form>
  );
};

// Wrapper component to show heading and form
const FormVal = () => (
  <div>
    <h2>User Registration</h2>
    <RegistrationForm />
  </div>
);

export default FormVal; // Exporting the component to use in other parts of app



/**

🔶 4. Controlled vs Uncontrolled Components

Feature	Controlled Component	Uncontrolled Component
State Managed By	React (useState)	DOM (uses ref)
Input Value Stored	In React state	Directly in HTML input element
Flexibility	More control, easy validation	Less code, harder to validate
When to Use	Most of the time (recommended)	For quick/legacy/simple forms
 */


import React, { useRef } from "react";

function UncontrolledForm() {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Name: " + inputRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  );
}


/**

🔁 Summary:

Concept	Description
Controlled Component:	  Form element whose value is controlled by React (useState)
Uncontrolled Component:	Form element that maintains its own state, accessed using ref
Form Handling:	        Use onChange to track input changes
Form Submission:	      Use onSubmit and prevent default behavior
Validation:	            Add logic to check input and show error messages
 */