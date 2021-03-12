import { connect } from 'react-redux';
import SignupFormCustomer from 'src/components/SignupFormCustomer';

import { signupUsertype, userSignup } from 'src/actions/signupActions';

const mapState = (state) => {
  const {
    signUpError,
    signedUp,
  } = state.signup;
  return {
    signUpError,
    signedUp,
  };
};

const mapDispatch = (dispatch) => ({
  updateUsertype: () => {
    const action = signupUsertype('customer');
    dispatch(action);
  },
  onSubmit: () => {
    const action = userSignup();
    dispatch(action);
  },
});

export default connect(mapState, mapDispatch)(SignupFormCustomer);
