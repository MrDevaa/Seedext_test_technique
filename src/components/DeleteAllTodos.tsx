// src/components/DeleteAllTodos.tsx
import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

const DeleteAllTodos = () => {
  const todoContext = useContext(TodoContext);

  if (!todoContext) {
    throw new Error('DeleteAllTodos must be used within a TodoProvider');
  }

  const { deleteAll } = todoContext;

  return (
    <button onClick={deleteAll} className="bg-red-500 text-white p-2 mt-4">
      Tout supprimer
    </button>
  );
};

export default DeleteAllTodos;
