import { connect } from 'react-redux';
import LoginForm from 'src/components/AuthModal/LoginForm';

import { userInputChange, userLogin } from 'src/actions/userActions';

const mapState = (state) => {
  const {
    email, password, userType,
  } = state.user;
  return {
    email,
    password,
    selected: userType,
  };
};

const mapDispatch = (dispatch) => ({
  changeField: (value, name) => {
    // here I am getting infos from form inputs and turning it into a JS object
    // so then can I can easily change the values contained in the state
    const data = { [name]: value };
    const action = userInputChange(data);
    dispatch(action);
  },
  handleLogin: () => {
    const action = userLogin();
    dispatch(action);
  },
});

export default connect(mapState, mapDispatch)(LoginForm);
