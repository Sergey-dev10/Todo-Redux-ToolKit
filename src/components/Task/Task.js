import React from 'react';
import { useDispatch } from 'react-redux';
import { compliteTask, removeTask } from '../../actions';
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
  const onComplite = () => {
    dispatch(compliteTask(id));
  };
  const onRemove = () => {
    dispatch(removeTask(id));
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
        <ButtonRemove
          type="button"
          onClick={onRemove}
        >
          Remove
        </ButtonRemove>
      </ButtonsWrapper>
    </TaskWrapper>
  );
};
