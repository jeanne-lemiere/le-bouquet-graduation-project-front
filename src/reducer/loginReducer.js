import {
  USER_LOGIN_INPUT_CHANGE,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_ERROR,
  USER_HANDLE_LOGOUT,
} from 'src/actions/loginActions';

// if no value is stored in localStorage, because the user is not logged yet
// I want a default value in the state
// But I don't want to write it directly in the state, I want the default value
// to be dynamic in case a logged user refreshes the page

// if isLogged is null in localStorage, the user is not logged
// so the function will return false
const ifNullReturnFalse = (data) => {
  if (data === null) {
    return false;
  }
  return data;
};

// if userType is not yet specified, let's give the user
// a default role "customer" until his actions show us otherwise
const ifNullReturnCustomer = (data) => {
  if (data === null) {
    return 'customer';
  }
  return data;
};

const initialState = {
  email: '',
  password: '',
  userType: ifNullReturnCustomer(localStorage.getItem('role')),
  loginError: false,
  isLogged: ifNullReturnFalse(JSON.parse(localStorage.getItem('logged'))),
  profile: JSON.parse(localStorage.getItem('profile')),
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        email: '',
        password: '',
        isLogged: JSON.parse(localStorage.getItem('logged')),
        userType: localStorage.getItem('role'),
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
