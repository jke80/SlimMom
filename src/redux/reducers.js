import { combineReducers } from 'redux';
import { authReducer } from './auth/authSlice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import diaryDateSlice from './diaryDate/diaryDate.slice';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
export const rootReducer = combineReducers({
  auth: persistReducer(persistConfig, authReducer),
  diaryDate: diaryDateSlice,
});
