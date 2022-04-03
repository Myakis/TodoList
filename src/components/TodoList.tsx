import React, { FC } from 'react';
import FlipMove from 'react-flip-move';
import { ITodo } from './Main';
import NoTodos from './NoTodos';

type TodoListProps = {
  todos: ITodo[];
  toggleTodo?(id: number): void;
  removeTodo?(id: number): void;
};

const TodoList: FC<TodoListProps> = ({ todos, toggleTodo, removeTodo }) => {
  const removeHandler = (e: React.MouseEvent, id: number) => {
    e.preventDefault();
    removeTodo!(id);
  };

  if (todos.length < 1) {
    return <NoTodos></NoTodos>;
  }
  return (
    <ul>
      <FlipMove>
        {todos.map(todo => {
          return (
            <li key={todo.id}>
              <label htmlFor=''>
                <input
                  onChange={toggleTodo!.bind(null, todo.id)}
                  type='checkbox'
                  checked={todo.check}
                />
                <span>{todo.title}</span>
                <div onClick={e => removeHandler(e, todo.id)}>delete</div>
              </label>
            </li>
          );
        })}
      </FlipMove>
    </ul>
  );
};

export default TodoList;
