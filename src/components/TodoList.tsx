import { Checkbox, IconButton, ListItem } from '@mui/material';
import React, { FC } from 'react';
import FlipMove from 'react-flip-move';
import DeleteIcon from '@mui/icons-material/Delete';

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
            <ListItem key={todo.id}>
              <label
                style={{ width: '100% ', display: 'flex', alignItems: 'flex-start' }}
                className={todo.check ? 'checked' : ''}>
                <Checkbox
                  checked={todo.check}
                  color='secondary'
                  onChange={toggleTodo!.bind(null, todo.id)}
                />
                <p style={{ marginTop: '0.5rem' }}> {todo.title}</p>
                <div
                  style={{ marginLeft: 'auto', marginTop: '0.1rem' }}
                  onClick={e => removeHandler(e, todo.id)}>
                  <IconButton aria-label='delete' color='error'>
                    <DeleteIcon />
                  </IconButton>
                </div>
              </label>
            </ListItem>
          );
        })}
      </FlipMove>
    </ul>
  );
};

export default TodoList;
