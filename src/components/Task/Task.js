import React from 'react';
import { useDispatch } from 'react-redux';
import { compliteTask } from '../../actions/actions';
import {
  TaskWrapper,
  TextWrapper,
  ButtonsWrapper,
  ButtonComplite,
  ButtonRemove,
} from './Task.styles';

export const Task = ({
  id, isComplited, text,
}) => {
  const dispatch = useDispatch();
  const onComplite = (event) => {
    const taskId = event.target.id;
    dispatch(compliteTask(taskId));
  };
  return (
    <TaskWrapper>
      <TextWrapper complition={isComplited}>{text}</TextWrapper>
      <ButtonsWrapper>
        <ButtonComplite
          id={id}
          type="button"
          onClick={onComplite}
        >
          Complite
        </ButtonComplite>
        <ButtonRemove type="button">Remove</ButtonRemove>
      </ButtonsWrapper>
    </TaskWrapper>
  );
};
