import React, { Component } from "react";
import "../Lesson3/App.css";

//serve -s build

class MyErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  componentDidCatch(error, info) {
    alert("error",error);
    this.setState(state => ({ ...state, hasError: true }));
  }

  render() {
    if (this.state.hasError) {
      return <div>Sorry, something went wrong.</div>;
    } else {
      return this.props.children;
    }
  }
}

class Profile extends React.Component {
  onClick = () => {
    this.setState(state => {
      throw new Error("Oh nooo!");
      return { ...state };
    });
  };

  render() {
    return <div onClick={this.onClick}>Name: {this.props.user.name}</div>;
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: { name: "Chris" }
    };
  }

  updateUser = () => {
    this.setState(state => ({ ...state, user: null }));
  };

  render() {
    return (
      <div>
        <h1>Lesson 9: Error Boundaries</h1>
        <MyErrorBoundary>
          <Profile user={this.state.user} />
          <button onClick={this.updateUser}>Update</button>
        </MyErrorBoundary>
      </div>
    );
  }
}

export default App;
