import { configureStore } from "@reduxjs/toolkit";

import reports from './report.slice';

const reducer = {
  reports,
};

export const store = configureStore({
  devTools: false,
  reducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;