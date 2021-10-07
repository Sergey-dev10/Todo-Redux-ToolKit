import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Title } from '../Title';
import { TaskAddition } from '../TaskAddition';
import { TaskListWrapper } from './TodoList.style';
import { Task } from '../Task';

export const TodoList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.todo);
  return (
    <TaskListWrapper>
      <Title />
      <TaskAddition />
      {tasks.map((task) => (<Task id={task.id} isComplited={task.isComplited} text={task.text} />))}
    </TaskListWrapper>
  );
};
