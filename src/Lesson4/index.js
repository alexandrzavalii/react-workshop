import React, { Component } from "react";
import "../Lesson3/App.css";

class App extends Component {
  state = {
    hidden: false,
    color: "red"
  };
  
  handleHideClickButton = () => {
    const oldState = this.state.hidden;
    this.setState({
      hidden: !oldState
    });
  };

  updateProps = () => {
    let array = ["red", "blue"];
    const currentColor = this.state.color;

    this.setState({
      color: array.filter(colour => colour !== currentColor)[0]
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Lesson 4: React Lifecycles</h1>
        </header>
        <div className="Component">
          <h2>Component With Lifecycle</h2>
          <button onClick={this.handleHideClickButton}>Hide it</button>
          <button onClick={this.updateProps}>Toggle Color</button>
          {!this.state.hidden && (
            <ComponentWithLifecycles colorName={this.state.color} />
          )}
        </div>
      </div>
    );
  }
}

class ComponentWithLifecycles extends React.Component {
  state = { rerenderColor: "blue" };

  componentWillReceiveProps() {
    alert("I recieved new PROPS: " + this.props);
  }
  componentDidMount() {
    alert("I was Mounted");
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.colorName === "blue") {
      alert("UPDATE me");
      return true;
    } else {
      alert("No Update");
      return false;
    }
  }
  componentWillUnmount() {
    alert("I Will Unmount");
  }
  render() {
    console.log("I was rendered", this.props);
    const colorStyle = {
      backgroundColor: this.props.colorName
    };
    console.log("colorStyle", colorStyle);
    return (
      <div style={colorStyle}>
        <p>Current color is: {this.props.colorName}</p>
        <p>I will rerender only if the color is, {this.state.rerenderColor}</p>
      </div>
    );
  }
}

export default App;
