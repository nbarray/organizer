import React, { Component } from 'react';
import './TaskList.css';
import TaskInput from './TaskInput';

class TaskList extends Component {
  render() {
    return (
      <div className="TaskList w3-quarter">
        <div className="TaskListHeader">
          TASKS
        </div>
        <TaskInput />
        <ul className="w3-ul w3-card-4 w3-hoverable">
          <li>Test</li>
          <li>Test1</li>
          <li>Test2</li>
          <li>Test3</li>
        </ul>
      </div>
    );
  }
}

export default TaskList;
