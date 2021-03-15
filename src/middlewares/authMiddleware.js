import axios from 'axios';
import {
  USER_HANDLE_LOGIN,
  userLoginSuccess,
  userLoginError,
} from 'src/actions/loginActions';
import {
  USER_HANDLE_SIGNUP,
  userSignupSuccess,
  userSignupError,
} from 'src/actions/signupActions';

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
        localStorage.setItem('profile', JSON.stringify(response.data.user));
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('logged', response.data.logged);
        localStorage.setItem('role', response.data.role);
        store.dispatch(actionToDispatch);
      }
      catch (error) {
        const actionToDispatch = userLoginError();
        store.dispatch(actionToDispatch);
      }
      break;
    }
    case USER_HANDLE_SIGNUP: {
      const {
        userType,
      } = store.getState().signup;

      if (userType === 'seller') {
        let {
          picture_url,
        } = store.getState().signup;

        // Setting a default avatar, since adding a profile picture is not mandatory
        if (!picture_url) {
          const defaultAvatar = 'https://firebasestorage.googleapis.com/v0/b/c-estlebouquet.appspot.com/o/sellers%2Fdefault-avatar.jpg?alt=media&token=f3ad35ec-1f35-4b17-97c8-b892bb737e9f';
          picture_url = defaultAvatar;
        }

        const {
          gender,
          lastname,
          firstname,
          email,
          password,
          passwordConfirm,
          street_number,
          street_name,
          zipcode,
          city,
          phone_number,
          siret,
          shop_name,
          shop_presentation,
        } = store.getState().form.signupSeller.values;

        // I am building a new object the exact shape the API is expecting
        // Adding the picture url and removing the checked terms boolean
        const signupData = {
          gender,
          lastname,
          firstname,
          email,
          password,
          passwordConfirm,
          street_number,
          street_name,
          zipcode,
          city,
          phone_number,
          siret,
          shop_name,
          shop_presentation,
          picture_url,
        };
        console.log('data à envoyer seller:', signupData);

        try {
          const response = await axios({
            url: `${BASE_URL}/${userType}/signup`,
            method: 'POST',
            data: {
              ...signupData,
            },
          });
          console.log('response create account', response.data);
          const signedUp = true;

          const actionToDispatch = userSignupSuccess(signedUp);
          store.dispatch(actionToDispatch);
        }
        catch (error) {
          console.log('error account creation: ', error);
          const result = {
            signedUp: false,
            signUpError: "Hum, quelque chose n'a pas fonctionné...",
          };
          const actionToDispatch = userSignupError(result);
          store.dispatch(actionToDispatch);
        }
      }
      else if (userType === 'customer') {
        const {
          gender,
          lastname,
          firstname,
          email,
          password,
          passwordConfirm,
          street_number,
          street_name,
          zipcode,
          city,
          phone_number,
        } = store.getState().form.signupCustomer.values;

        try {
          const response = await axios({
            url: `${BASE_URL}/${userType}/signup`,
            method: 'POST',
            data: {
              gender,
              lastname,
              firstname,
              email,
              password,
              passwordConfirm,
              street_number,
              street_name,
              zipcode,
              city,
              phone_number,
            },
          });

          console.log('response create account', response.data);
          const signedUp = true;
          const actionToDispatch = userSignupSuccess(signedUp);
          store.dispatch(actionToDispatch);
        }
        catch (error) {
          console.log('error account creation: ', error);
          const result = {
            signedUp: false,
            signUpError: "Hum, quelque chose n'a pas fonctionné...",
          };

          const actionToDispatch = userSignupError(result);
          store.dispatch(actionToDispatch);
        }
      }
      break;
    }
    default:
      return next(action);
  }
  return null;
};
