import {
  USER_LOGIN_INPUT_CHANGE,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_ERROR,
  USER_HANDLE_LOGOUT,
} from 'src/actions/loginActions';

const initialState = {
  email: '',
  password: '',
  userType: localStorage.getItem('role'),
  loginError: false,
  isLogged: localStorage.getItem('logged'),
  profile: JSON.parse(localStorage.getItem('profile')),
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
      };

    case USER_LOGIN_ERROR:
      return {
        ...state,
        isLogged: false,
        loginError: true,
      };
    case USER_HANDLE_LOGOUT:
      return {
        ...state,
        email: '',
        password: '',
        isLogged: false,
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
