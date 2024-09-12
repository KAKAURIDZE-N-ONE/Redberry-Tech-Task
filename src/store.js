// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Use localStorage for persistence
import mainSlice from "./slices/mainSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, mainSlice);

export const store = configureStore({
  reducer: {
    main: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"], // Add other actions if needed
      },
    }),
});

export const persistor = persistStore(store);
