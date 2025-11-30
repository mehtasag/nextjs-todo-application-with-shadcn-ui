// app/page.tsx
"use client";

import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import NewTodo from "@/components/NewTodo";
import TodoList from "@/components/TodoList";

interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    // Load todos from local storage on initial render
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    // Save todos to local storage whenever the todos state changes
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title: string) => {
    const newTodo: Todo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const updateTodo = (id: string, completed: boolean) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (id: string) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Todo App</h1>
      <NewTodo onAdd={addTodo} />
      <TodoList todos={todos} onUpdate={updateTodo} onDelete={deleteTodo} />
    </div>
  );
}
