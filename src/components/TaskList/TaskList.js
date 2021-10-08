import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Title } from '../Title';
import { TaskAddition } from '../TaskAddition';
import { TaskListWrapper } from './TaskList.styles';
import { Task } from '../Task';
import { TasksFilter } from '../TasksFilter';

export const TaskList = () => {
  let tasks = useSelector(({ todo }) => todo.todo);
  const currentFilter = useSelector(({ filterType }) => filterType.filterType);
  if (currentFilter === 'SHOW_ACTIVE') {
    tasks = tasks.filter((task) => task.isComplited === false);
  } else if (currentFilter === 'SHOW_DONE') {
    tasks = tasks.filter((task) => task.isComplited === true);
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
      <TasksFilter tasks={tasks} />
    </TaskListWrapper>
  );
};
