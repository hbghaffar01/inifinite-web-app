import { configureStore } from '@reduxjs/toolkit';
import { photosApi } from './photosSlice';

export const store = configureStore({
  reducer: {
    [photosApi.reducerPath]: photosApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(photosApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;