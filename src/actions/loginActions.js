export const USER_LOGIN_INPUT_CHANGE = 'USER_LOGIN_INPUT_CHANGE';
export const USER_HANDLE_LOGIN = 'USER_HANDLE_LOGIN';
export const USER_HANDLE_LOGOUT = 'USER_HANDLE_LOGOUT';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR';

export const loginInputChange = (payload) => ({
  type: USER_LOGIN_INPUT_CHANGE,
  payload,
});

export const userLogin = () => ({
  type: USER_HANDLE_LOGIN,
});
export const userLoginSuccess = (payload) => ({
  type: USER_LOGIN_SUCCESS,
  payload,
});
export const userLoginError = () => ({
  type: USER_LOGIN_ERROR,
});

export const userLogout = () => ({
  type: USER_HANDLE_LOGOUT,
});
