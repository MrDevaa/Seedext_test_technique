// src/components/TodoList.tsx
import React, { useContext, useState } from 'react';
import { TodoContext } from '../context/TodoContext';

const TodoList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const todoContext = useContext(TodoContext);

  if (!todoContext) {
    throw new Error('TodoList must be used within a TodoProvider');
  }

  const { todos, toggleTodo } = todoContext;

  const filteredTodos = todos.filter(todo =>
    todo.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Rechercher..."
        className="border p-2 mb-4 w-full"
      />
      <ul>
        {filteredTodos.map(todo => (
          <li key={todo.id} className="flex justify-between items-center mb-2">
            <span
              className={`flex-1 ${todo.completed ? 'line-through' : ''}`}
              onClick={() => toggleTodo(todo.id)}
            >
              {todo.text}
            </span>
            <button onClick={() => toggleTodo(todo.id)}>
              {todo.completed ? 'Annuler' : 'Terminé'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
