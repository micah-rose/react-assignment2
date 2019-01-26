import React, { Component } from "react";
import "./App.css";
import ValidationComponent from "./Validation/Validation";
import CharComponent from "./Char/Char";

class App extends Component {
  state = {
    input: ""
  };

  inputChangedHandler = event => {
    const inputText = event.target.value;
    this.setState({
      input: inputText
    });
  };

  deleteClickedCharHandler = index => {
    let chars = [...this.state.input];
    if (index < this.state.input.length) {
      chars.splice(index, 1);
    }

    this.setState({
      input: chars.join("")
    });
  };

  render() {
    const charCompList = this.state.input.split("").map((ch, i) => {
      return (
        <CharComponent
          key={i}
          char={ch}
          click={this.deleteClickedCharHandler.bind(this, i)}
        />
      );
    });

    return (
      <div className="App">
        <ol>
          <li>
            Create an input field (in App component) with a change listener
            which outputs the length of the entered text below it (e.g. in a
            paragraph).
          </li>
          <li>
            Create a new component (=> ValidationComponent) which receives the
            text length as a prop
          </li>
          <li>
            Inside the ValidationComponent, either output "Text too short" or
            "Text long enough" depending on the text length (e.g. take 5 as a
            minimum length)
          </li>
          <li>
            Create another component (=> CharComponent) and style it as an
            inline box (=> display: inline-block, padding: 16px, text-align:
            center, margin: 16px, border: 1px solid black).
          </li>
          <li>
            Render a list of CharComponents where each CharComponent receives a
            different letter of the entered text (in the initial input field) as
            a prop.
          </li>
          <li>
            When you click a CharComponent, it should be removed from the
            entered text.
          </li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>

        <input value={this.state.input} changed={this.inputChangedHandler} />
        <p>{this.state.input.length}</p>
        <ValidationComponent text={this.state.input} />
        <hr />
        {charCompList}
      </div>
    );
  }
}

export default App;
