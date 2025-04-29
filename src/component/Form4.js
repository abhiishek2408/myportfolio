import React, { useState } from "react";

function SimpleForm() {
  const [formData, setFormData] = useState({
    username: "",
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target; 
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, 
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Form submitted!
        Username: ${formData.username}
        Comment: ${formData.comment}
       `);

  };

  const changeAllInputs = () => {
    setFormData({
      username: "John Doe",
      comment: "john@example.com", // Fixed case to match the state key
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </label>

      <br />
      <label>
        Comment:
        <input
          type="text"
          name="comment"
          value={formData.comment}
          onChange={handleChange}
        />
      </label>
      <br />

      <button type="button" onClick={changeAllInputs}>
        Change All Inputs
      </button>
      <br />

      <button type="submit">Submit</button>
    </form>
  );
}

export default SimpleForm;
