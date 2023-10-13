import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice"; // Corrected import path

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
