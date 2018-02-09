import React, { Component } from "react";
import "../Lesson3/App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: []
    };

    this.addOneRow = this.addOneRow.bind(this);
  }
  componentDidMount() {
    const list = Array.from({ length: 10 }, (v, k) => k + 1);
    this.setState({ list });
  }

  addOneRow() {
    const currentList = ["Extra Row", ...this.state.list];
    this.setState({
      list: currentList
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Lesson 7: Re-rendering </h1>
        </header>
        <div className="Component">
          <h2>List</h2>
          <button onClick={this.addOneRow}>add one row</button>
          <Table list={this.state.list} />
        </div>
      </div>
    );
  }
}

class Table extends Component {
  render() {
    return (
      <div>
        <ul>{this.props.list.map(item => <Row key={item} item={item} />)}</ul>
      </div>
    );
  }
}

class Row extends Component {
  constructor() {
    super();
    this.state = {
      selected: false
    };
    this.handleMouseEvent = this.handleMouseEvent.bind(this);
  }

  handleMouseEvent() {
    //set state as function
    this.setState(function(prevState, props) {
      return { selected: !prevState.selected };
    });

  }
  render() {
    const style = {
      padding: "10px",
      color: this.state.selected ? "blue" : "purple",
      textAlign: "left",
      borderBottom: "1px solid gray"
    };
    return (
      <li
        onMouseOver={this.handleMouseEvent}
        onMouseLeave={this.handleMouseEvent}
        style={style}
      >
        Row number: {this.props.item}
      </li>
    );
  }
}
export default App;
