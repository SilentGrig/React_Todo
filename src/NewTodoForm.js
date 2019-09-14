import React, { Component } from 'react';
import './NewTodoForm.css';
import uuid from "uuid/v4";

class NewTodoForm extends Component {
  constructor() {
    super();
    this.state = { 
        text: "",
        date: ""
      };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
  }

  handleChangeText(e) {
    this.setState({
      ...this.state,
      text: e.target.value
    });
  }

  handleChangeDate(e) {
    this.setState({
      ...this.state,
      date: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addTodo({...this.state, id: uuid() });
    this.setState({
      text: "",
      date: ""
    });
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
            onChange={this.handleChangeText}
            required
          />
          <input 
            type="date"
            name="date"
            value={this.state.date}
            onChange={this.handleChangeDate}
            required
          />
          <input type="submit" value="Add Todo" />
        </form>
      </div>
      
    );
  }

}

export default NewTodoForm;
