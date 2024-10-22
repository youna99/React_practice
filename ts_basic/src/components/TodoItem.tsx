// 2. Todo Item 작성
import React from 'react';
import { ToDoItem } from '../types/todoTypes';

interface Props {
  todo: ToDoItem;
  toggleComplete(id: number): void;
}

function TodoItem({ todo, toggleComplete }: Props) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          defaultChecked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
        />
        {todo.text}
      </label>
    </li>
  );
}

export default TodoItem;
