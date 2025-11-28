// components/TodoList.tsx
"use client";

import TodoItem from "@/components/TodoItem";

interface TodoListProps {
  todos: { id: string; title: string; completed: boolean }[];
  onUpdate: (id: string, completed: boolean) => void;
  onDelete: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onUpdate, onDelete }) => {
  return (
    <div className="space-y-2">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TodoList;
