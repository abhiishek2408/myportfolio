import React, { Component } from 'react';  //✅ Here, Component is exported by name, not as default. So to import it:
                                           //The curly braces {} are used to pick specific named exports from a module.
class Component2 extends Component {
  constructor(props) {
    super(props);  // Call the constructor of the parent class
    
    this.state = {
      message: 'Hello from Class Component'
    };
  }

  display() {
    return this.state.message;
  }

  render() {
    return (
      <>
      <h2>Hello from Class Component</h2>;
      <h2>{this.display()}</h2>;
      </>
    );
  }
}

export default Component2;

