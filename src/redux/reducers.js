import { combineReducers } from 'redux';
import authSlice from './auth/auth.slice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
export const rootReducer = combineReducers({
  auth: persistReducer(persistConfig, authSlice),
});
