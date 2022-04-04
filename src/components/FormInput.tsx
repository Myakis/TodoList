import { TextField } from '@mui/material';
import React, { FC, useState } from 'react';

interface TodoFormProps {
  onAdd(title: string): void;
}

const FormInput: FC<TodoFormProps> = props => {
  const [title, setTitle] = useState<string>('');

  //Изменение поля ввода через state
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  //Отправка по нажатию Enter
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
        label='Добавить задачу'
        variant='standard'
        autoComplete='off'
        fullWidth
      />
    </div>
  );
};

export default FormInput;
