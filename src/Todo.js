import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  constructor(props) {
    super();
    this.state = {
      isEditing: false,
      text: props.text,
      date: props.date
    }
    this.handleToggle = this.handleToggle.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.isDateOverdue = this.isDateOverdue.bind(this);
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

  handleChangeText(e) {
    this.setState({
      ...this.state,
      text: e.target.value
    })
  }

  handleChangeDate(e) {
    this.setState({
      ...this.state,
      date: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateTodo(this.props.id, this.state.text, this.state.date);
    this.setState({
      ...this.state,
      isEditing: false
    });
  }

  formateDate(date) {
    let formatedDate = new Date(date);
    return formatedDate.toLocaleDateString();
  }

  isDateOverdue() {
    return new Date(this.props.date) < new Date();
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
              onChange={this.handleChangeText}
            />
            <input 
              name="date"
              type="date"
              value={this.state.date}
              onChange={this.handleChangeDate}
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
            {this.props.text} - {this.formateDate(this.props.date)}
          </p>
          <div>
            <i class="fas fa-edit" onClick={this.handleEdit}></i>
            <i class="fas fa-trash-alt" onClick={this.handleDelete}></i>
          </div>
        </>
      );
    };

    const buildClassName = "Todo" + (this.isDateOverdue() ? " Todo-Overdue" : "");

    return (
      <li className={buildClassName}>
        {output}
      </li>
    );
  }
}

export default Todo;
