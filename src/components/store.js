import { configureStore } from "@reduxjs/toolkit";
import loaderReducer from "../components/loaderSlice";

export const store = configureStore({
  reducer: {
    loader: loaderReducer,
  },
});
