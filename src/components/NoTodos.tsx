import { Box } from '@mui/material';
import React from 'react';
import TodoEmpty from '../assets/img/emptyTodo.png';

const NoTodos = () => {
  return (
    <Box className='TodoEmpty'>
      <h1>Нет задач</h1>
      <img src={TodoEmpty} alt='TodoEmpty' />
    </Box>
  );
};

export default NoTodos;
