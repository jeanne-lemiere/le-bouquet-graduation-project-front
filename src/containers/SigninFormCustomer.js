import { connect } from 'react-redux';
import SigninFormCustomer from 'src/components/SigninFormCustomer';

import { signinUsertype } from 'src/actions/signinActions';

const mapState = null;

const mapDispatch = (dispatch) => ({
  updateUsertype: () => {
    const action = signinUsertype('customer');
    dispatch(action);
  },
});

export default connect(mapState, mapDispatch)(SigninFormCustomer);
