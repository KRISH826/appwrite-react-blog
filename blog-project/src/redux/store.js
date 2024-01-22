/** @format */

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./featured/authSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
