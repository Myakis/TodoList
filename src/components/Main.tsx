import React, { FC, useEffect, useState } from 'react';

import FormInput from './FormInput';
import TodoList from './TodoList';

export interface ITodo {
  title: string;
  id: number;
  check: boolean;
}

const Main: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  //Забираем значения с локал сторедж

  useEffect(() => {
    const todosLocalStorage = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[];
    setTodos(todosLocalStorage);
  }, []);

  //Добавляем в локал сторедж

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodoHandler = (title: string) => {
    const newTodo = {
      title,
      id: Date.now(),
      check: false,
    };

    if (title) {
      setTodos(prev => [newTodo, ...prev]);
    }
  };

  const toggleTodoHandler = (id: number) => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.check = !todo.check;
        }
        return todo;
      }),
    );
  };

  const removeTodoHandler = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <>
      <FormInput onAdd={addTodoHandler}></FormInput>
      <TodoList
        todos={todos}
        toggleTodo={toggleTodoHandler}
        removeTodo={removeTodoHandler}></TodoList>
    </>
  );
};

export default Main;
