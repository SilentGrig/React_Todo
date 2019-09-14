import React, { Component } from 'react';
import './TodoList.css';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

class TodoList extends Component {
  constructor() {
    super();
    const storedTodos = localStorage.getItem("todo-list");
    if(storedTodos) {
      this.state = {
        ...JSON.parse(storedTodos)
      }
    } else {
      this.state = {
        todos: []
      }
    }
    this.addTodo = this.addTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
  }

  addTodo(todo) {
    const newTodo = {
      ...todo,
      complete: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }

  toggleTodo(id) {
    const newTodos = this.state.todos.map(todo => {
      if(todo.id === id) {
        return {
          ...todo,
          complete: !todo.complete
        }
      }
      return todo;
    })
    this.setState({todos: newTodos});
  }

  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
  }

  updateTodo(id, text, date) {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id) {
          return {
            ...todo,
            text: text ? text : todo.text,
            date: date ? date : todo.date
          }
        }
        return todo;
      })
    });
  }

  render() {
    localStorage.setItem("todo-list", JSON.stringify(this.state));

    const todos = this.state.todos.map((todo) => (
      <Todo
        key={todo.id}
        id={todo.id}
        text={todo.text}
        date={todo.date}
        complete={todo.complete}
        toggleTodo={this.toggleTodo}
        removeTodo={this.removeTodo}
        updateTodo={this.updateTodo}
      />
    ));

    return (
      <div className="TodoList">
        <h1>Todo List!</h1>
        <p>A simple React Todo List App</p>
        <ul>{ todos }</ul>
        <NewTodoForm addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default TodoList;
