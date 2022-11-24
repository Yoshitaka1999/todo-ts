import { type } from 'node:os';
import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState<Todo[]>([])

  type Todo = {
    inputValue: string;
    id: number;
    checked: boolean;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setInputText(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!inputText) {
      return;
    }

    const newTodo: Todo = {
      inputValue: inputText,
      id: todos.length,
      checked: false,
    };

    setTodos([newTodo, ...todos]);
    setInputText(inputText);
  }

  const handleEdit = (id: number, inputValue: string) => {
    const newTodos = todos.map((todo) => {
      if(todo.id === id) {
        todo.inputValue = inputValue;
      }
      return todo;
    })

    setTodos(newTodos)
  }

  const handleChecked = (id: number, checked: boolean) => {
    const newTodos = todos.map((todo) => {
      if(todo.id === id) {
        todo.checked = !checked;
      }
      return todo;
    })

    setTodos(newTodos)
  }

  const handleDelete = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <div>
        <h2>Todo List</h2>
        <form onSubmit={(e) => handleSubmit(e)} className="create-form">
          <input type="text" onChange={(e) => handleChange(e)} className="inputText" />
          <input type="submit" value="create" className="submitButton" />
        </form>
        <ul className="todoList">
          {todos.map(todo => (
            <li key={todo.id}>
              <input type="text" onChange={(e) => handleEdit(todo.id, e.target.value)} className="inputText" value={todo.inputValue} disabled={todo.checked} />
              <input type="checkbox" onChange={() => handleChecked(todo.id, todo.checked)} />
              <button onClick={() => handleDelete(todo.id)} className="deleteButton">delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
