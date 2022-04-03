import { TextField } from '@mui/material';
import React, { FC, useState } from 'react';

interface TodoFormProps {
  onAdd(title: string): void;
}

const FormInput: FC<TodoFormProps> = props => {
  const [title, setTitle] = useState<string>('');

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const keyPressHandler = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      props.onAdd(title);
      setTitle('');
    }
  };

  return (
    <div>
      <TextField
        onChange={changeHandler}
        onKeyDown={keyPressHandler}
        value={title}
        id='standard-basic'
        label='Задача'
        variant='standard'
        fullWidth
      />
    </div>
  );
};

export default FormInput;
