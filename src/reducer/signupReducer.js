import {
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_ERROR,
  SIGNUP_USERTYPE,
  HANDLE_IMG_UPLOAD,
} from 'src/actions/signupActions';

const initialState = {
  userType: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case USER_SIGNUP_SUCCESS:
      return {
        ...state,
        signedUp: action.payload,
      };

    case USER_SIGNUP_ERROR:
      return {
        ...state,
        ...action.payload,
      };
    case SIGNUP_USERTYPE:
      return {
        ...state,
        userType: action.payload,
      };
    case HANDLE_IMG_UPLOAD:
      return {
        ...state,
        pictureFile: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
