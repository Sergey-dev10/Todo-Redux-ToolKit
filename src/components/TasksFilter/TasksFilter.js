import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showAll, showActive, showADone } from '../../actions';
import {
  TaskFilterWrapper, ButtonAll, ButtonActive, ButtonDone,
} from './TasksFilter.styles';

export const TasksFilter = ({ tasks }) => {
  let isAllBtn; let isActiveBtn; let
    isDoneBtn = false;
  const activeBtn = useSelector(({ filterType }) => filterType.filterType);

  if (activeBtn === 'SHOW_ALL') {
    isAllBtn = true;
  } else if (activeBtn === 'SHOW_ACTIVE') {
    isActiveBtn = true;
  } else if (activeBtn === 'SHOW_DONE') {
    isDoneBtn = true;
  }

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
      <ButtonAll pressed={isAllBtn} onClick={onShowAll}>All</ButtonAll>
      <ButtonActive pressed={isActiveBtn} onClick={onShowActive}>Active</ButtonActive>
      <ButtonDone pressed={isDoneBtn} onClick={onShowDone}>Done</ButtonDone>
    </TaskFilterWrapper>
  );
};
