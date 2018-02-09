import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Lesson 3: React State</h1>
        </header>
        <div className="Component">
          <h2>Component With State</h2>
          <ComponentWithState name="component with state" />
        </div>
        <div className="Component">
          <h2>Component With State And Event</h2>
          <ComponentWithStateAndEvent />
        </div>
      </div>
    );
  }
}

class ComponentWithState extends React.Component {
  state = { timesClicked: 1 };

  handleClick =() => {
      this.setState({
          timesClicked: 10
      })
  }
  render() {
    return (
      <div>
        <p>Hello, {this.props.name}</p>
        <button onClick={this.handleClick}>I was clicked: {this.state.timesClicked} times</button>
      </div>
    );
  }
}

class ComponentWithStateAndEvent extends Component {
  constructor() {
    super();
    this.state = { timesClicked: 1 }; // Here "this" is undefined if you dont call state
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClickES6 = () => {
    const currentState = this.state.timesClicked;
    this.setState({
      timesClicked: currentState + 1
    });
  };

  handleButtonClick() { //#todo bind it
    const currentState = this.state.timesClicked;
    this.setState({
      timesClicked: currentState + 1
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleButtonClickES6}>
          I was clicked ES6: {this.state.timesClicked} times
        </button>
        
        <button onClick={this.handleButtonClick}>
          I was clicked regular function: {this.state.timesClicked} times
        </button>
      </div>
    );
  }
}
export default App;
