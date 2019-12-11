import React, { Component } from 'react';
import './NewTodoForm.css';

class NewTodoForm extends Component {
  constructor() {
    super();
    this.state = { 
        content: ""
      };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeContent = this.handleChangeContent.bind(this);
  }

  handleChangeContent(e) {
    this.setState({
      ...this.state,
      content: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addTodo(this.state.content);
    this.setState({
      content: ""
    });
  }

  render() {
    return (
      <div className="NewTodoForm">
        <h2>New Todo</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="content"
            value={this.state.content}
            onChange={this.handleChangeContent}
            required
          />
          <input type="submit" value="Add Todo" />
        </form>
      </div>
      
    );
  }

}

export default NewTodoForm;
