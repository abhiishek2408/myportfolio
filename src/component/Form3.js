import React, { useState } from "react";

function SimpleForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rollNumber: "",
    registrationNumber: "",
    password: "",
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
        Name: ${formData.name}
        Email: ${formData.email}
        Roll Number: ${formData.rollNumber}
        Registration Number: ${formData.registrationNumber}
        Password: ${formData.password}`);
  };

  const changeAllInputs = () => {
    setFormData({
      name: "John Doe",
      email: "john@example.com",
      rollNumber: "123456",
      registrationNumber: "REG-789",
      password: "newPassword123",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Roll Number:
        <input
          type="text"
          name="rollNumber"
          value={formData.rollNumber}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Registration Number:
        <input
          type="text"
          name="registrationNumber"
          value={formData.registrationNumber}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
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
