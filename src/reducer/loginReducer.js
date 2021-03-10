import {
  USER_LOGIN_INPUT_CHANGE,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_ERROR,
  USER_HANDLE_LOGOUT,
} from 'src/actions/loginActions';

const initialState = {
  email: '',
  password: '',
  userType: '',
  loginError: false,
  isLogged: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        email: '',
        password: '',
        isLogged: true,
        loginError: false,
        ...action.payload.user,
      };

    case USER_LOGIN_ERROR:
      return {
        ...state,
        isLogged: false,
        loginError: true,
        infos: {},
      };
    case USER_HANDLE_LOGOUT:
      return {
        ...state,
        email: '',
        password: '',
        isLogged: false,
        infos: {},
      };
    case USER_LOGIN_INPUT_CHANGE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
