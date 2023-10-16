import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";

// Create the Redux store
export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

// Export the store for application-wide use
