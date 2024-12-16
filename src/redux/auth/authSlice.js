import { createSlice } from '@reduxjs/toolkit';

const authInitialState = {
  user: { name: null, email: null, password: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isError: null,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    authRegister(state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isError = null;
      state.isLoading = false;
    },
    authLogin(state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.isError = null;
    },
    authLogout(state, action) {
      state.user = { name: null, email: null, password: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    authCurrent(state, action) {
      state.user.name = action.payload.name;
      state.user.email = action.payload.email;
      state.isLoggedIn = true;
      state.isRefreshing = true;
    },
  },
});

export const { authRegister, authLogin, authLogout, authCurrent } =
  authSlice.actions;
export const authReducer = authSlice.reducer;
