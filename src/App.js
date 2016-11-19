import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TaskList from './task-list/TaskList';
import Canvas from './canvas/Canvas';

class App extends Component {
  render() {
    return (
      <div className="App w3-row">
          <TaskList />
          <Canvas />
      </div>
    );
  }
}

export default App;
