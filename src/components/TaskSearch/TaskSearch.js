import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { InputSearch } from './TaskSearch.styles';
import { searchTask } from '../../reducers/searchSlice';

export const TaskSearch = () => {
  const despatch = useDispatch();
  const [InputValue, setInputValue] = useState('');
  const onChangeInput = (event) => {
    const text = event.target.value.trim();
    setInputValue(text);
    despatch(searchTask(text));
  };
  return (
    <InputSearch type="text" placeholder="type to search" value={InputValue} onChange={onChangeInput} />
  );
};
