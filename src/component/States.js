
import React, { Component } from "react";

class ClassState extends Component{
    constructor(){
        super();
        this.state={
            studentname:"Abhishek",
            section:"K22AE"
        }
    }

    ChangeSection=()=>{
        this.setState({section:"K22AF"});
    }

    render(){
        return(
            <>
            <h1>My name is {this.state.studentname} and I belong to {this.state.section}</h1>
            <button onClick={this.ChangeSection}>Change Section</button>
            </>
        )
    }
}

export default ClassState;
