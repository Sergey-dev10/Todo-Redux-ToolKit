/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filterType: 'SHOW_ALL',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    showAll(state) {
      state.filterType = 'SHOW_ALL';
    },
    showActive(state) {
      state.filterType = 'SHOW_ACTIVE';
    },
    showADone(state) {
      state.filterType = 'SHOW_DONE';
    },
  },
});

export const { showAll, showActive, showADone } = filterSlice.actions;
export const selectTypeFilter = ({ filter }) => filter.filterType;
export default filterSlice.reducer;
