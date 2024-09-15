// src/app/store.js
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Use localStorage for persistence
import agentSlice from "./slices/agentSlice";
import listingSlice from "./slices/listingSlice";
import filtersSlice from "./slices/filtersSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  agent: agentSlice,
  listing: listingSlice,
  filters: filtersSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);
