import axios from 'axios';

const BASE_URL = "http://localhost:8080/todos/";

const getAllTodos = () => {
    const request = axios.get(BASE_URL);
    return request.then(response => response.data);
}

const deleteTodo = (id) => {
    return axios.delete(BASE_URL + id);
}

const addTodo = (content) => {
    return axios.post(BASE_URL, {content: content});
}

const updateTodo = (id, content, completed) => {
    return axios.put(BASE_URL + id, {content: content, completed: completed})
}

export default {
    getAllTodos: getAllTodos,
    deleteTodo: deleteTodo,
    addTodo: addTodo,
    updateTodo: updateTodo
};
