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
          <h1 className="App-title">Lesson 6: Lists and Keys</h1>
        </header>
        <div className="Component">
          <h2>List</h2>
          <button onClick={this.addOneRow}>add one row</button>
          {/* <WrongTable list={this.state.list} /> */}
          <Table list={this.state.list} />
        </div>
      </div>
    );
  }
}

class WrongTable extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.list.map(item => (
            <li
              style={{
                padding: "10px",
                color: "purple",
                textAlign: "left",
                borderBottom: "1px solid gray"
              }}
            >
              Row number: {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

class Table extends Component {
  render() {
      //please check the elements inspector with removed keys
      // please try to click two times add one row
    return (
      <div>
        <ul>{this.props.list.map(item => <Row key={item} item={item} />)}</ul> 
      </div>
    );
  }
}

class Row extends Component {
  render() {
    return (
      <li
        style={{
          padding: "10px",
          color: "purple",
          textAlign: "left",
          borderBottom: "1px solid gray"
        }}
      >
        Row number: {this.props.item}
      </li>
    );
  }
}
export default App;
