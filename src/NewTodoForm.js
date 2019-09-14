import React, { Component } from 'react';
import './NewTodoForm.css';
import uuid from "uuid/v4";

class NewTodoForm extends Component {
  constructor() {
    super();
    this.state = { text: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({text: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addTodo({...this.state, id: uuid() });
    this.setState({text: ""});
  }

  render() {
    return (
      <div className="NewTodoForm">
        <h2>New Todo</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="text"
            value={this.state.text}
            onChange={this.handleChange}
          />
          <input type="submit" value="Add Todo" />
        </form>
      </div>
      
    );
  }

}

export default NewTodoForm;
