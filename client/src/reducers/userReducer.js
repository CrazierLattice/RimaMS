import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice(
  {
    name: 'user',
    initialState: {
      value: JSON.parse(localStorage.getItem('user')) || undefined,
    },
    reducers: {
      logIn: (state, action) => {
        state.value = action.payload;
      },
      logOut: (state, action) => {
        state.value = undefined;
      },
    },
  },
  {}
);

export const { logIn, logOut } = userSlice.actions;

export default userSlice.reducer;
