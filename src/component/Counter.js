
import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleIncClick = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  handleDecClick = () => {
    if (this.state.count <= 0) {
      alert("Not possible less than 0");
    } else {
      this.setState((prevState) => ({
        count: prevState.count - 1,
      }));
    }
  };

  


  render() {

    const styles = {
      container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Full height of the viewport
      },
      
      counterBox: {
        textAlign: 'center', // Center the text and buttons inside the box
      },
    };

    return (
      <>
        <div style={styles.container}>
        <div style={styles.counterBox}>
          <h1 style={{ color: 'red' }}>Count: {this.state.count}</h1>
          <button onClick={this.handleIncClick}>Increment</button>
          <button onClick={this.handleDecClick}>Decrement</button>
        </div>
      </div>
      </>
    );
  }
}

export default Counter;
