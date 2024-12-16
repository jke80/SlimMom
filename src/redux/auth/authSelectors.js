export const selectUser = state => state.auth.user;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectToken = state => state.auth.token;
export const selectIsLoading = state => state.auth.user.isLoading;
export const selectIsError = state => state.auth.user.isError;
