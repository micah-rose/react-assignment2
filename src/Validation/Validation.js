import React, { Component } from "react";

const minLength = 5;

class ValidationComponent extends Component {
  render() {
    let message = <p>Text too short</p>;

    if (this.props.text.length > minLength) {
      message = <p>Text too long</p>;
    }
    return message;
  }
}

export default ValidationComponent;

/*import React from 'react';

const minLength = 5;

const validation = props => {
        let message = <p>Text too short</p>
        
        if(this.props.text.length > minLength){
            message = <p>Text too long</p>
        }
        return message;
}

export default validation; */
