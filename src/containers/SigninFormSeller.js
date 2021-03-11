import { connect } from 'react-redux';
import SigninFormSeller from 'src/components/SigninFormSeller';

import { signinUsertype } from 'src/actions/signinActions';

const mapState = null;

const mapDispatch = (dispatch) => ({
  updateUsertype: () => {
    const action = signinUsertype('seller');
    dispatch(action);
  },
});

export default connect(mapState, mapDispatch)(SigninFormSeller);
