import React from 'react';

const TodoItem = ({ todo, removeTodo, toggleTodo }) => {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type='checkbox'
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <span>{todo.text}</span>
      <button className='delete' onClick={() => removeTodo(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;