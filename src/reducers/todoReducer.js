import { actionTypes } from '../actions/actionTypes';

const initialState = {
  todo: [],
};

const { ADD_TASK } = actionTypes;
export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        todo:
        [...state.todo, { id: action.payload.id, isComplited: false, text: action.payload.text }],
      };
    default:
      return state;
  }
};
