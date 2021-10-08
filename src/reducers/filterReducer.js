import { actionTypes } from '../actions/actionTypes';

const { SET_FILTER } = actionTypes;

const initialState = {
  filterType: 'SHOW_ALL',
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return { ...state, filterType: action.payload };
    default:
      return state;
  }
};
