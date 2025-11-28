// components/NewTodo.tsx
"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface NewTodoProps {
  onAdd: (title: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = ({ onAdd }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() === "") return;
    onAdd(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2">
      <Input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new todo"
        className="flex-1"
      />
      <Button type="submit">Add</Button>
    </form>
  );
};

export default NewTodo;
