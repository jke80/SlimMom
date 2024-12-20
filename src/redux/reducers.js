import { combineReducers } from 'redux';
import { authReducer } from './auth/authSlice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
export const rootReducer = combineReducers({
  auth: persistReducer(persistConfig, authReducer),
});
