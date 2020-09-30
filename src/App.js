import React, { Component } from "react";
import "./App.css";
import VideoContainer from "./components/VideoContainer/videoContainer";
import ListContainer from "./components/ListContainer/listContainer";

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <VideoContainer />
        <ListContainer />
      </div>
    );
  }
}


export default App;
