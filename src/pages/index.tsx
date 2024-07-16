// src/pages/index.tsx
import React from 'react';
import { TodoProvider } from '../context/TodoContext';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import DeleteAllTodos from '../components/DeleteAllTodos';

const Home = () => {
  return (
    <TodoProvider>
      <div className="container mx-auto p-4">
        <AddTodo />
        <TodoList />
        <DeleteAllTodos />
      </div>
    </TodoProvider>
  );
};

export default Home;
