import {
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_ERROR,
  SIGNIN_USERTYPE,
} from 'src/actions/signinActions';

// some variables below are in snake case
// I know this is bad practise, but I need them to be in snake case
// to send the API an object with the right format
// If I change to camel case either I cannot control the inputs or the axios request won't work
// I don't know what the good approch would be here
const initialState = {
  userType: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case USER_SIGNIN_SUCCESS:
      return {
        cgvChecked: false,
        signinInfos: {},
        signinMessage: action.payload,
      };

    case USER_SIGNIN_ERROR:
      return {
        ...state,
        isLogged: false,
        loginError: true,
        infos: {},
      };
    case SIGNIN_USERTYPE:
      return {
        ...state,
        userType: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
