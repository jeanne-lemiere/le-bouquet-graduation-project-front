export const USER_SIGNIN_INPUT_CHANGE = 'USER_SIGNIN_INPUT_CHANGE';
export const USER_HANDLE_SIGNIN = 'USER_HANDLE_SIGNIN';
export const USER_SIGNIN_SUCCESS = 'USER_SIGNIN_SUCCESS';
export const USER_SIGNIN_ERROR = 'USER_SIGNIN_ERROR';
export const HANDLE_GSC_CHECK = 'HANDLE_GSC_CHECK';

export const signinInputChange = (payload) => ({
  type: USER_SIGNIN_INPUT_CHANGE,
  payload,
});
export const userSignin = (payload) => ({
  type: USER_HANDLE_SIGNIN,
  payload,
});
export const userSigninSuccess = (payload) => ({
  type: USER_SIGNIN_SUCCESS,
  payload,
});
export const userSigninError = (payload) => ({
  type: USER_SIGNIN_ERROR,
  payload,
});

export const handleCheck = () => ({
  type: HANDLE_GSC_CHECK,
});
