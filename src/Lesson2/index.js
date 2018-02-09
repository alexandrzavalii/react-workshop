import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Lesson 2: Components Types</h1>
        </header>
        <div className="Component">
          <h2>Functional Component</h2>
          <FunctionalComponent something="100" name="InflightDublin" />
          <FunctionalComponent2 name="Functional Component"></FunctionalComponent2>
        </div>
        <div className="Component">
          <h2>ES6 Class Component</h2>
          <ES6Component name="InflightDublin" />
        </div>
      </div>
    );
  }
}

// Pass data with props


// Functional Components
// no render() function

function FunctionalComponent(props) {
  return <p>Hello, {props.name} {props.something}</p>;
}
const FunctionalComponent2 = props => {
  return (
    <div>
      <p>Hello, {props.name}</p>
    </div>
  );
};

// React Component
class ES6Component extends Component {
  render() {
    return <p>Hello, {this.props.name}</p>;
  }
}

export default App;
