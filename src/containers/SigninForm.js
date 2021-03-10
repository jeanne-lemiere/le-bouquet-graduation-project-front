import { connect } from 'react-redux';
import SigninForm from 'src/components/SigninForm';

import { signinInputChange, handleCheck } from 'src/actions/signinActions';

const mapState = (state) => {
  const {
    signinInfos, gscChecked,
  } = state.signin;
  return {
    signinInfos, gscChecked,
  };
};

const mapDispatch = (dispatch) => ({
  changeField: (value, name) => {
    // here I am getting infos from form inputs and turning it into a JS object
    // so then can I can easily change the values contained in the state
    const data = { [name]: value };
    const action = signinInputChange(data);
    dispatch(action);
  },
  handleSignin: () => {
    console.log('Let me signin!');
    /* const action = userSignin();
    dispatch(action); */
  },
  handleCheck: () => {
    const action = handleCheck();
    dispatch(action);
  },
});

export default connect(mapState, mapDispatch)(SigninForm);
