import React, { useRef, useState } from 'react';
import { ToDoItem } from '../types/todoTypes';
import TodoItem from './TodoItem';

export const TodoList = () => {
  const [todos, setTodos] = useState<ToDoItem[]>([]); // 전체 투두 목록

  // 3. 투두 추가
  const [newTodo, setNewTodo] = useState<string>(''); // 새로 추가될 투두 하나

  // 3. 투두 추가 함수
  const addTodo = () => {
    const updatedTodos = [
      ...todos,
      { id: Date.now(), text: newTodo, completed: false },
    ];
    setTodos(updatedTodos);
    setNewTodo('');
  };

  // 4. 포커싱
  const inputRef = useRef<HTMLInputElement>(null);

  // 4. 포커싱 함수
  const focusInput = () => {
    inputRef.current?.focus();
  };

  // 5. 토글
  const toggleComplete = (targetId: number) => {
    const updatedTodos = todos.map((todo) => {
      return todo.id === targetId
        ? { ...todo, completed: !todo.completed }
        : todo;
    });
    setTodos(updatedTodos);
  };

  // 6. 엔터키
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      addTodo();
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="add new Todo!"
          ref={inputRef}
          onKeyDown={handleKeyDown}
        />
        <button onClick={addTodo}>Add</button>
        <button onClick={focusInput}>FOCUS</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} toggleComplete={toggleComplete} />
        ))}
      </ul>
    </div>
  );
};
