// src/store/store.js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

// Create the Redux store
const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
