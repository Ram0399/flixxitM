import { createSlice } from "@reduxjs/toolkit";

// Define the initial state
const initialState = {
  user: null,
};

// Create a user slice with actions
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

// Export login and logout actions
export const { login, logout } = userSlice.actions;

// Select the user from the state
export const selectUser = (state) => state.user.user;

// Export the user reducer
export default userSlice.reducer;
