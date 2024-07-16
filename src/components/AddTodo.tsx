// src/components/AddTodo.tsx
import React, { useState, useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

const AddTodo = () => {
  const [text, setText] = useState('');
  const todoContext = useContext(TodoContext);

  if (!todoContext) {
    throw new Error('AddTodo must be used within a TodoProvider');
  }

  const { addTodo } = todoContext;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTodo(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Rechercher ou créer une tâche..."
        className="border p-2 flex-1"
      />
      <button type="submit" className="bg-blue-500 text-white p-2">
        Ajouter
      </button>
    </form>
  );
};

export default AddTodo;
