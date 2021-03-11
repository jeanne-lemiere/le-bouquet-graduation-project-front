export const USER_HANDLE_SIGNIN = 'USER_HANDLE_SIGNIN';
export const USER_SIGNIN_SUCCESS = 'USER_SIGNIN_SUCCESS';
export const USER_SIGNIN_ERROR = 'USER_SIGNIN_ERROR';
export const SIGNIN_USERTYPE = 'SIGNIN_USERTYPE';
export const HANDLE_IMG_UPLOAD = 'HANDLE_IMG_UPLOAD';
export const UPDATE_PICTURE_URL = 'UPDATE_PICTURE_URL';

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
export const signinUsertype = (payload) => ({
  type: SIGNIN_USERTYPE,
  payload,
});
export const handleImgUpload = (payload) => ({
  type: HANDLE_IMG_UPLOAD,
  payload,
});
export const updatePictureUrl = (payload) => ({
  type: UPDATE_PICTURE_URL,
  payload,
});
