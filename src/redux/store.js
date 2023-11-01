import { configureStore } from '@reduxjs/toolkit';
import { advertsReducer } from './adverts/slice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const advertsPersistConfig = {
  key: 'adverts',
  storage,
  whitelist: ['favorites'],
};

export const store = configureStore({
  reducer: {
    adverts: persistReducer(advertsPersistConfig, advertsReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
