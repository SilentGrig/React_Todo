import React, { Component } from 'react';
import './TodoList.css';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import todoService from './services/todoService';

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: []
    } 
    this.addTodo = this.addTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.updateTodos = this.updateTodos.bind(this);
  }

  componentDidMount() {
    this.updateTodos();
  }

  updateTodos() {
    todoService.getAllTodos().then(data => {
      this.setState({
        todos: data}
        );
    });
  }

  addTodo(content) {
    todoService.addTodo(content).then(this.updateTodos);
  }

  toggleTodo(id) {
    const newTodos = this.state.todos.map(todo => {
      if(todo.id === id) {
        todoService.updateTodo(id, todo.content, !todo.completed);
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo;
    })
    this.setState({todos: newTodos});
  }

  removeTodo(id) {
    todoService.deleteTodo(id);
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })

  }

  updateTodo(id, content) {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id) {
          todoService.updateTodo(id, content, todo.completed);
          return {
            ...todo,
            content: content ? content : todo.content
          }
        }
        return todo;
      })
    });
  }

  render() {
    const todos = this.state.todos.map((todo) => (
      <Todo
        key={todo.id}
        id={todo.id}
        content={todo.content}
        completed={todo.completed}
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
