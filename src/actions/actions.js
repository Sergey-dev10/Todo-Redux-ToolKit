import { actionTypes } from './actionTypes';

const { ADD_TASK, COMPLITE_TASK, REMOVE_TASK } = actionTypes;

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const compliteTask = (id) => ({
  type: COMPLITE_TASK,
  payload: id,
});

export const removeTask = (id) => ({
  type: REMOVE_TASK,
  payload: id,
});
