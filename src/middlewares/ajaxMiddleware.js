import axios from 'axios';
import {
  USER_HANDLE_LOGIN,
  userLoginSuccess,
  userLoginError,
} from 'src/actions/userActions';

const BASE_URL = ' https://c-le-bouquet.herokuapp.com';

export default (store) => (next) => async (action) => {
  switch (action.type) {
    case USER_HANDLE_LOGIN: {
    // starting a login request
    // if success dispatch an action
    // if error dispatch another action
      const { email, password, userType } = store.getState().user;
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
    default:
      return next(action);
  }
  return null;
};
