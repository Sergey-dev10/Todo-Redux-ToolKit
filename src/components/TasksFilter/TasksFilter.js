import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showAll, showActive, showADone } from '../../actions';
import {
  TaskFilterWrapper, ButtonAll, ButtonActive, ButtonDone,
} from './TasksFilter.styles';

export const TasksFilter = ({ tasks }) => {
  const dispatch = useDispatch();
  const onShowAll = () => {
    dispatch(showAll());
  };
  const onShowActive = () => {
    dispatch(showActive());
  };
  const onShowDone = () => {
    dispatch(showADone());
  };
  return (
    <TaskFilterWrapper>
      <ButtonAll onClick={onShowAll}>All</ButtonAll>
      <ButtonActive onClick={onShowActive}>Active</ButtonActive>
      <ButtonDone onClick={onShowDone}>Done</ButtonDone>
    </TaskFilterWrapper>
  );
};
