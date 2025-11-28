// components/TodoItem.tsx
"use client";

import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

interface TodoItemProps {
  id: string;
  title: string;
  completed: boolean;
  onUpdate: (id: string, completed: boolean) => void;
  onDelete: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  id,
  title,
  completed,
  onUpdate,
  onDelete,
}) => {
  const [isCompleted, setIsCompleted] = useState(completed);

  const handleCheckboxChange = (checked: boolean) => {
    setIsCompleted(checked);
    onUpdate(id, checked);
  };

  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id={`todo-${id}`}
        checked={isCompleted}
        onCheckedChange={handleCheckboxChange}
      />
      <label
        htmlFor={`todo-${id}`}
        className={`text-sm ${
          isCompleted ? "line-through text-muted-foreground" : ""
        }`}
      >
        {title}
      </label>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => onDelete(id)}
        className="ml-auto"
      >
        Delete
      </Button>
    </div>
  );
};

export default TodoItem;
