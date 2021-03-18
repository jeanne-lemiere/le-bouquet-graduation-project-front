export const USER_HANDLE_SIGNUP = 'USER_HANDLE_SIGNUP';
export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS';
export const USER_SIGNUP_ERROR = 'USER_SIGNUP_ERROR';
export const SIGNUP_USERTYPE = 'SIGNUP_USERTYPE';
export const HANDLE_IMG_UPLOAD = 'HANDLE_IMG_UPLOAD';
export const HANDLE_FIREBASE_UPLOAD = 'HANDLE_FIREBASE_UPLOAD';

export const userSignup = (payload) => ({
  type: USER_HANDLE_SIGNUP,
  payload,
});
export const userSignupSuccess = (payload) => ({
  type: USER_SIGNUP_SUCCESS,
  payload,
});
export const userSignupError = (payload) => ({
  type: USER_SIGNUP_ERROR,
  payload,
});
export const signupUsertype = (payload) => ({
  type: SIGNUP_USERTYPE,
  payload,
});
export const handleImgUpload = (payload) => ({
  type: HANDLE_IMG_UPLOAD,
  payload,
});
export const handleFirebaseUpload = (payload) => ({
  type: HANDLE_FIREBASE_UPLOAD,
  payload,
});
