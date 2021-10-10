import { createAction } from '@reduxjs/toolkit';
import { actionTypes } from './actionTypes';

const {
  ADD_TASK, COMPLITE_TASK, REMOVE_TASK, SET_FILTER, SEARCH_TASK,
} = actionTypes;

export const addTask = createAction(ADD_TASK);

export const compliteTask = createAction(COMPLITE_TASK);

export const removeTask = createAction(REMOVE_TASK);

export const showAll = createAction(SET_FILTER);

export const showActive = createAction(SET_FILTER);

export const showADone = createAction(SET_FILTER);

export const searchTask = createAction(SEARCH_TASK);
