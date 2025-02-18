import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, addTodo, removeTodo, toggleTodo }) => {
  const [todo, setTodo] = useState('');

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (todo.trim()) {
      addTodo(todo);
      setTodo('');
    }
  };

  return (
    <div>
      <form onSubmit={handleAddTodo} className='p-4 border rounded bg-light'>
        <div className='mb-3'>
          <label htmlFor='todo' className='form-label'>To Do :</label>
          <input
            type='text'
            className='form-control'
            id='todoInput'
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
        </div>
        <button type='submit' className='add-btn'>Add</button>
      </form>
      <ul>
        {todos.map((todoItem) => (
          <TodoItem
            key={todoItem.id}
            todo={todoItem}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;