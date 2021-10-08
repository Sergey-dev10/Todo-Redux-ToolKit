import { combineReducers } from 'redux';
import { todoReducer } from './todoReducer';
import { filterReducer } from './filterReducer';

export const rootReducer = combineReducers({
  todo: todoReducer,
  filterType: filterReducer,
});
