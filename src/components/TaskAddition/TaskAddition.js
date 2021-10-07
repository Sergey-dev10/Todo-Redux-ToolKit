import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { TaskAdditionWrapper, InputAddField, InputSubmit } from './TaskAddition.styles';
import { addTask } from '../../actions/actions';

export const TaskAddition = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.todo);
  const [inPutValue, setInputValue] = useState('');
  const onChangeInput = (event) => {
    const value = event.target.value.trim();
    setInputValue(value);
  };
  const onAddTask = (event) => {
    event.preventDefault();
    if (inPutValue) {
      dispatch(addTask({ id: nanoid(), text: inPutValue }));
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
