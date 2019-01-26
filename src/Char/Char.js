import React, { Component } from "react";

const style = {
    display: "inline-block", 
    padding: "16px", 
    textAlign: "center", 
    margin: "16px", 
    border: "1px solid black"
}

class CharComponent extends Component {

  render() {
    return (
      <div style={style} className="CharComponent" onClick={this.props.click}>
        <p>{this.props.char}</p>
      </div>
    );
  }
}

export default CharComponent;

/*import React from 'react';

const style = {
    display: "inline-block", 
    padding: "16px", 
    textAlign: "center", 
    margin: "16px", 
    border: "1px solid black"
}

const char = props => {
    return (
        <div style={style} className="Char"
             onClick={this.props.click}
        >
            <p>{this.props.char}</p>
        </div>
    )
}

export default char; */
