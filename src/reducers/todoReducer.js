import { actionTypes } from '../actions/actionTypes';

const initialState = {
  todo: [],
};

const {
  ADD_TASK,
  COMPLITE_TASK,
  REMOVE_TASK,
} = actionTypes;
export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        todo:
        [...state.todo, { id: action.payload.id, isComplited: false, text: action.payload.text }],
      };
    case COMPLITE_TASK:
      return {
        ...state,
        todo: [...state.todo.map((task) => (task.id === action.payload
          ? { ...task, isComplited: !task.isComplited } : task))],
      };
    case REMOVE_TASK:
      return {
        ...state, todo: [...state.todo.filter(((task) => task.id !== action.payload))],
      };
    default:
      return state;
  }
};
