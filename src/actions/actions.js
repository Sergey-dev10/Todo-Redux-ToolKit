import { actionTypes } from './actionTypes';

const { ADD_TASK } = actionTypes;

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});
