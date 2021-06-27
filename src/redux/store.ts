import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";

import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "@slices/index";
import storage from "redux-persist/lib/storage"; // Use localStorage as persist storage

const persistConfig = {
  key: "root",
  storage,
};

/**
 * Inject store persistor into already present reducers(registered slices)
 */
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      /** Ignore redux-persist action types */
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV !== "production",
});

/**
 * Attachable store persistor that will be linked to app's <PersistGate />
 */
const persistor = persistStore(store);

export { persistor };
export default store;
