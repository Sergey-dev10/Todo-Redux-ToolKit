/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todo: [],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTask(state, action) {
      state.todo.push(action.payload);
    },
    compliteTask(state, action) {
      const id = action.payload;
      state.todo = state.todo.map((task) => (task.id === action.payload
        ? { ...task, isComplited: !task.isComplited } : task));
    },
    removeTask(state, action) {
      const id = action.payload;
      state.todo = state.todo.filter((task) => task.id !== id);
    },
  },
});

export const { addTask, compliteTask, removeTask } = todoSlice.actions;
export const selectTodo = ({ todo }) => todo.todo;
export default todoSlice.reducer;
