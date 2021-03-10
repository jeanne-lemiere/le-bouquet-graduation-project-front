import axios from 'axios';
import {
  USER_HANDLE_LOGIN,
  userLoginSuccess,
  userLoginError,
} from 'src/actions/loginActions';
import {
  USER_HANDLE_SIGNIN,
  userSigninSuccess,
  userSigninError,
} from 'src/actions/signinActions';

const BASE_URL = ' https://c-le-bouquet.herokuapp.com';

export default (store) => (next) => async (action) => {
  switch (action.type) {
    case USER_HANDLE_LOGIN: {
    // starting a login request
    // if success dispatch an action
    // if error dispatch another action
      const { email, password, userType } = store.getState().login;
      try {
        const response = await axios({
          url: `${BASE_URL}/${userType}/login`,
          method: 'POST',
          data: {
            email, password,
          },
        });
        const actionToDispatch = userLoginSuccess(response.data);
        localStorage.setItem('token', JSON.stringify(response.data.token));
        store.dispatch(actionToDispatch);
      }
      catch (error) {
        const actionToDispatch = userLoginError();
        store.dispatch(actionToDispatch);
      }
      break;
    }
    case USER_HANDLE_SIGNIN: {
      const {
        signinInfos,
      } = store.getState().signin;
      try {
        const response = await axios({
          url: `${BASE_URL}/${signinInfos.userType}/signin`,
          method: 'POST',
          data: {
            signinInfos,
          },
        });
        console.log('response create account', response.data);
        const signinMessage = 'Votre compte a bien été créé.';
        const actionToDispatch = userSigninSuccess(signinMessage);
        store.dispatch(actionToDispatch);
      }
      catch (error) {
        const signinMessage = 'Erreur à la création du compte.';
        const actionToDispatch = userSigninError(signinMessage);
        store.dispatch(actionToDispatch);
      }
      break;
    }
    default:
      return next(action);
  }
  return null;
};
