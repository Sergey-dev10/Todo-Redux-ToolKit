import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { TaskAdditionWrapper, InputAddField, InputSubmit } from './TaskAddition.styles';
import { addTask } from '../../reducers/todoSlice';

export const TaskAddition = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(({ todo }) => todo);
  const [inPutValue, setInputValue] = useState('');
  const onChangeInput = (event) => {
    const { value } = event.target;
    setInputValue(value);
  };
  const onAddTask = (event) => {
    event.preventDefault();
    if (inPutValue) {
      dispatch(addTask({
        id: nanoid(),
        isComplited: false,
        text: inPutValue,
      }));
      setInputValue('');
    }
  };

  return (
    <TaskAdditionWrapper onSubmit={onAddTask}>
      <InputAddField
        type="text"
        placeholder="What needs to be done"
        value={inPutValue}
        onChange={onChangeInput}
      />
      <InputSubmit type="submit" value="Add task" />
    </TaskAdditionWrapper>
  );
};
