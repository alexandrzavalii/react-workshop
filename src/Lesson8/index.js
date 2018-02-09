import React, { Component } from "react";
import "../Lesson3/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Lesson 8: Props.Children</h1>
        </header>
        <div className="Component">
          <MovieBrowser>
            <Movie title="Mad Max: Fury Road" />
            <Movie title="Harry Potter & The Goblet Of Fire" />
          </MovieBrowser>
        </div>
      </div>
    );
  }
}

class MovieBrowser extends React.Component {
  render() {
    const currentPlayingTitle = "Mad Max: Fury Road";
    const childrenWithExtraProp = React.Children.map(
      this.props.children,
      child => {
        return React.cloneElement(child, {
          isPlaying: child.props.title === currentPlayingTitle
        });
      }
    );

    return <div className="movie-browser">{childrenWithExtraProp}</div>;
  }
}

class Movie extends Component {
  render() {
    return (
      <h3>
        Movie:{" "}
        {this.props.isPlaying ? (
          <span>is Playing</span>
        ) : (
          <span>Not Playing</span>
        )}
      </h3>
    );
  }
}

export default App;
