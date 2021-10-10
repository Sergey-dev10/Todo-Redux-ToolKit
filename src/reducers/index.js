import { combineReducers } from 'redux';
import todoReducer from './todoSlice';
import filterReducer from './filterSlice';
import searchReducer from './searchSlice';

export const rootReducer = combineReducers({
  todo: todoReducer,
  filterType: filterReducer,
  search: searchReducer,
});
