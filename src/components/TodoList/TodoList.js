import React from 'react';
import { Title } from '../Title';
import { TaskAddition } from '../TaskAddition';
import { TaskListWrapper } from './TodoList.style';

export const TodoList = () => (
  <TaskListWrapper>
    <Title />
    <TaskAddition />
  </TaskListWrapper>
);
