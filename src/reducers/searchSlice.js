/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import todoSlice from './todoSlice';

const initialState = {
  text: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    searchTask(state, action) {
      state.text = action.payload;
    },
  },
});

export const { searchTask } = searchSlice.actions;
export const selectSerchedText = ({ search }) => search.text;
export default searchSlice.reducer;
