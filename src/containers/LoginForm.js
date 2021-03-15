import { connect } from 'react-redux';
import LoginForm from 'src/components/AuthModal/LoginForm';

import { loginInputChange, userLogin } from 'src/actions/loginActions';

const mapState = (state) => {
  const {
    email, password, userType, loginError,
  } = state.login;
  return {
    email,
    password,
    selected: userType,
    loginError,
  };
};

const mapDispatch = (dispatch) => ({
  changeField: (value, name) => {
    // here I am getting infos from form inputs and turning it into a JS object
    // so then can I can easily change the values contained in the state
    const data = { [name]: value };
    const action = loginInputChange(data);
    dispatch(action);
  },
  handleLogin: () => {
    const action = userLogin();
    dispatch(action);
  },
});

export default connect(mapState, mapDispatch)(LoginForm);
