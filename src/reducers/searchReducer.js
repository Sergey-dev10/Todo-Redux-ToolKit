import { actionTypes } from '../actions/actionTypes';

const initialState = {
  text: '',
};

const { SEARCH_TASK } = actionTypes;

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_TASK:
      return { ...state, text: action.payload };
    default:
      return state;
  }
};
