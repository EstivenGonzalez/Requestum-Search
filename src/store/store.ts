import AsyncStorage from '@react-native-async-storage/async-storage'
import { configureStore } from '@reduxjs/toolkit'
import { persistCombineReducers, persistStore } from 'redux-persist'

const config = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [],
}

const combineReducer = persistCombineReducers(config, {})

export const store = configureStore({
  reducer: combineReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export const persistor = persistStore(store)
