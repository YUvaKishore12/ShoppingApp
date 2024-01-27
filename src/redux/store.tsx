import { configureStore } from "@reduxjs/toolkit";
import { RootReducers } from "./RootReducer";

const store = configureStore({
  reducer: RootReducers,
});

export default store;
