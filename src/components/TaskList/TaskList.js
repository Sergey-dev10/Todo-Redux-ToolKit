import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Title } from '../Title';
import { TaskAddition } from '../TaskAddition';
import { TaskListWrapper, SearchFilterWrapper } from './TaskList.styles';
import { Task } from '../Task';
import { TasksFilter } from '../TasksFilter';
import { TaskSearch } from '../TaskSearch';
import { selectTodo } from '../../reducers/todoSlice';

export const TaskList = () => {
  let tasks = useSelector(selectTodo);
  const currentFilter = useSelector(({ filterType }) => filterType.filterType);
  const searchedText = useSelector(({ search }) => search.text);

  if (currentFilter === 'SHOW_ACTIVE') {
    tasks = tasks.filter((task) => task.isComplited === false);
  } else if (currentFilter === 'SHOW_DONE') {
    tasks = tasks.filter((task) => task.isComplited === true);
  }
  if (searchedText) {
    tasks = tasks.filter((task) => task.text.includes(searchedText));
  }

  return (
    <TaskListWrapper>
      <Title />
      <TaskAddition />
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          isComplited={task.isComplited}
          text={task.text}
        />
      ))}
      <SearchFilterWrapper>
        <TaskSearch />
        <TasksFilter tasks={tasks} />
      </SearchFilterWrapper>
    </TaskListWrapper>
  );
};
