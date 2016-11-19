import React from 'react';
import './TaskList.css';

class TaskInput extends React.Component {
  constructor (props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('New task added ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="TaskInput">
        <form onSubmit={this.handleSubmit}>
          <input className="w3-input" value={this.state.value} onChange={this.handleChange} type="text" placeholder="Press Enter to add a task..."/>
        </form>
      </div>
    );
  }
}

export default TaskInput;
