import {
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_ERROR,
  USER_SIGNIN_INPUT_CHANGE,
  HANDLE_GSC_CHECK,
} from 'src/actions/signinActions';

// some variables below are in snake case
// I know this is bad practise, but I need them to be in snake case
// to send the API an object with the right format
// If I change to camel case either I cannot control the inputs or the axios request won't work
// I don't know what the good approch would be here
const initialState = {
  gscChecked: false,
  signinInfos: {
    gender: 'F',
    email: '',
    password: '',
    passwordConfirm: '',
    lastname: '',
    firstname: '',
    phone_number: '',
    street_name: '',
    street_number: '',
    city: '',
    zipcode: '',
    userType: '',
  },
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
    case USER_SIGNIN_INPUT_CHANGE:
      return {
        ...state,
        signinInfos: {
          ...state.signinInfos,
          ...action.payload,
        },
      };
    case HANDLE_GSC_CHECK:
      return {
        ...state,
        gscChecked: !state.gscChecked,
      };
    default:
      return state;
  }
};

export default reducer;
