import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  constructor(props) {
    super();
    this.state = {
      isEditing: false,
      text: props.text
    }
    this.handleToggle = this.handleToggle.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleToggle(e) {
    e.preventDefault();
    this.props.toggleTodo(this.props.id);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.removeTodo(this.props.id);
  }

  handleEdit(e) {
    e.preventDefault();
    this.setState({isEditing: true});
  }

  handleChange(e) {
    this.setState({
      ...this.state,
      text: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateTodo(this.props.id, this.state.text);
    this.setState({
      ...this.state,
      isEditing: false
    });
  }

  render() {
    let output;
    if(this.state.isEditing) {
      output = (
        <>
          <form className="Todo-Editing" onSubmit={this.handleSubmit}>
            <input 
              name="text" 
              type="text" 
              value={this.state.text}
              onChange={this.handleChange}
            />
            <input type="submit" value="save" />
          </form>
        </>
        );
    } else {
      output = (
        <>
          <p
            className={this.props.complete ? "Todo-Complete" : ""}
            onClick={this.handleToggle}
          >
          {this.props.text}
          </p>
          <div>
            <i class="fas fa-edit" onClick={this.handleEdit}></i>
            <i class="fas fa-trash-alt" onClick={this.handleDelete}></i>
          </div>
        </>
      );
    };

    return (
      <li className="Todo">
        {output}
      </li>
    );
  }
}

export default Todo;
