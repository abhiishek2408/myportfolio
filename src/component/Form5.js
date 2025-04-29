import React, { useState } from "react";

function SimpleForm() {
  const [formData, setFormData] = useState({
    num1: "",
    num2: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const sum = Number(formData.num1) + Number(formData.num2);

    alert(`Form submitted!
        Sum: ${sum}
    `);

    document.getElementById('demo').innerText = "Sum: "+sum;
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <label>
        Num1:
        <input
          type="text"
          name="num1"
          value={formData.num1}
          onChange={handleChange}
        />
      </label>

      <br />
      <label>
        Num2:
        <input
          type="text"
          name="num2"
          value={formData.num2}
          onChange={handleChange}
        />
      </label>
      <br />

      <button type="submit">Submit</button>
    </form>
    <p id="demo"></p>
    </>
  );
}

export default SimpleForm;
