import React, { Component } from "react";
import "../Lesson3/App.css";

class App extends Component {
  constructor() {
    super();
    this.state = { timesClicked: 0 };
  }
  addOne = () => {
      let currentState = this.state.timesClicked;
      this.setState({
          timesClicked: ++currentState
      })
  };

  handleMinusOne = () => {
    let currentState = this.state.timesClicked;
    this.setState({
        timesClicked: --currentState
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Lesson 3.5: Lifting States</h1>
        </header>
        <div className="Component">
          <ComponentWithState
            handleClick={this.addOne}
            timesClicked={this.state.timesClicked}
            name="component with state"
          />
          <TotalClickedTimes 
            handleMinusOne={this.handleMinusOne}
            timesClicked={this.state.timesClicked} 
            />
            <Funcion/>
        </div>
      </div>
    );
  }
}

const Funcion = () => {

return <div>Render</div>
}

class ComponentWithState extends React.Component {

    state = {
        initial: 1
    }
    addMe = () => {
        this.setState({
            initial: this.state.initial + 1
        })
    }
  render() {
    return (
      <div>
        <p>Hello, {this.props.name}</p>
        <button onClick={this.props.handleClick}>
          I was clicked: {this.props.timesClicked} times
        </button >
        <button onClick={this.addMe}>
                My state is {this.state.initial}
        </button>
      </div>
    );
  }
}

class TotalClickedTimes extends Component {
  render() {
    return (
      <div>
        <h1>You clicked me {this.props.timesClicked} times</h1>
        <button onClick={this.props.handleMinusOne}>Go back in time</button>
      </div>
    );
  }
}
export default App;

//   addOne = () => {
//     let currentClickedTimes = this.state.timesClicked;
//     this.setState({
//         timesClicked: ++currentClickedTimes
//     });
//   };
// handleUnclick = () => {
//     let currentState = this.state.timesClicked;
//     this.setState({timesClicked: currentState - 1})
// }
