import {
  USER_LOGIN_INPUT_CHANGE,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_ERROR,
  USER_HANDLE_LOGOUT,
} from 'src/actions/userActions';

const initialState = {
  email: 'dantes@gmail.com',
  password: 'lepharaon14',
  userType: '',
  isLogged: false,
  infos: {
    token: localStorage.getItem('token'),
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        email: '',
        password: '',
        isLogged: true,
        infos: {
          ...action.payload,
        },
      };

    case USER_LOGIN_ERROR:
      return {
        ...state,
        isLogged: false,
        infos: {},
      };
    case USER_HANDLE_LOGOUT:
      return {
        ...state,
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
