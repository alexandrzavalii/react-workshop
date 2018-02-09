import React, { Component } from "react";
import "../Lesson3/App.css";

class App extends Component {
  state = {
    renderFirstElement: true
  };

  toggleState = () => {
    const oldState = this.state.renderFirstElement;

    this.setState({
      renderFirstElement: !oldState,
      loading: true
    });

    setTimeout(() => {
      this.setState({
        loading: false
      });
    }, 3000);
  };

  render() {
    if (this.state.loading) {
      return (
        <div className="App">
          <div className="Component">
            <div>Loading, Please wait for 3 seconds</div>
          </div>
        </div>
      );
    }
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Lesson 5: Conditional Rendering</h1>
        </header>
        <div className="Component">
          <h2>Conditional</h2>
          <button onClick={this.toggleState}>Toggle state</button>
          {this.state.renderFirstElement ? (
            <div>First Element</div>
          ) : (
            <div>Second Element</div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
