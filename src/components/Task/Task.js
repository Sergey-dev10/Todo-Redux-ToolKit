import React from 'react';
import {
  TaskWrapper,
  TextWrapper,
  ButtonsWrapper,
  ButtonComplite,
  ButtonRemove,
} from './Task.styles';

export const Task = ({
  id, isComplited, text,
}) => (
  <TaskWrapper>
    <TextWrapper complition={isComplited}>{text}</TextWrapper>
    <ButtonsWrapper>
      <ButtonComplite type="button">Complite</ButtonComplite>
      <ButtonRemove type="button">Remove</ButtonRemove>
    </ButtonsWrapper>
  </TaskWrapper>
);
