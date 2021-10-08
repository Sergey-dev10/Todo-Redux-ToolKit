import { actionTypes } from './actionTypes';

const {
  ADD_TASK, COMPLITE_TASK, REMOVE_TASK, SET_FILTER,
} = actionTypes;

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

export const showAll = () => ({
  type: SET_FILTER,
  payload: 'SHOW_ALL',
});

export const showActive = () => ({
  type: SET_FILTER,
  payload: 'SHOW_ACTIVE',
});

export const showADone = () => ({
  type: SET_FILTER,
  payload: 'SHOW_DONE',
});
