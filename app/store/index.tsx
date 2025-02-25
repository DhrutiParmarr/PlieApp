import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {DESTROY_SESSION} from '@root/app/store/store.type';
import eventListModuleSliceReducer from '@screens/app/event/api/Events.slice';

import signInModuleSliceReducer from '@screens/auth/signin/api/SignIn.slice';
import logger from 'redux-logger';
import {PersistConfig, persistReducer, persistStore} from 'redux-persist';

const persistConfig: PersistConfig<any> = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
  timeout: undefined,
};

export const rootReducers = combineReducers({
  signInModule: signInModuleSliceReducer,
  eventListModule: eventListModuleSliceReducer,
});

export const rootReducer = (state: any, action: any): unknown => {
  let newState = state;
  if (action.type === DESTROY_SESSION) {
    AsyncStorage.removeItem('persist:root');
    newState = undefined;
  }
  return rootReducers(newState, action);
};
export const persistedReducer = persistReducer(persistConfig, rootReducer);
const middlewares: any[] = [];

middlewares.push(logger);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}).concat(middlewares),
  devTools: true,
});

export const persistor = persistStore(store);
