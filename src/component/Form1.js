import React, { Component } from "react";

class FormHandling extends Component {
  // Initialize state with an object to store form data
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        name: "",
        comment: "",
        password: "",
      },
    };
  }


  handleChange = (e) => {
    const { name, value } = e.target; 
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData, // Keep all other fields in the state unchanged
        [name]: value, // Update the value of the field that triggered the change
      },
    }));
  };

 
  handleSubmit = (e) => {
    e.preventDefault();
    const { formData } = this.state;
    alert(`Form submitted!
        Name: ${formData.name}
        Comment: ${formData.comment}
        Password: ${formData.password}`);
  };


  changeAllInputs = () => {

    this.setState({
      formData: {
        name: "John Doe", 
        comment: "john@example.com",
        password: "newPassword123",
      },
    });
  };

  render() {
    const { formData } = this.state; // Destructure formData from state

    return (
      // Form element that triggers the handleSubmit function on submission
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Comments:
          <input
            type="comment"
            name="comment"
            value={formData.email}
            onChange={this.handleChange}
          />
        </label>
    
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default FormHandling;
