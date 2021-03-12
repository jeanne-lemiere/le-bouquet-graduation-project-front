import {
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_ERROR,
  SIGNUP_USERTYPE,
  HANDLE_IMG_UPLOAD,
  UPDATE_PICTURE_URL,
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
    case UPDATE_PICTURE_URL:
      return {
        ...state,
        picture_url: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
