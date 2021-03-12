import { connect } from 'react-redux';
import SignupFormSeller from 'src/components/SignupFormSeller';

import {
  signupUsertype, handleImgUpload, updatePictureUrl, userSignup,
} from 'src/actions/signupActions';

const mapState = (state) => {
  const {
    pictureFile,
    signUpError,
    signedUp,
  } = state.signup;
  return {
    image: pictureFile,
    signUpError,
    signedUp,
  };
};

const mapDispatch = (dispatch) => ({
  updateUsertype: () => {
    const action = signupUsertype('seller');
    dispatch(action);
  },
  onUploadChange: (event) => {
    const file = event.target.files[0];
    if (file) {
      const action = handleImgUpload(file);
      dispatch(action);
    }
  },
  updatePictureUrl: (url) => {
    const action = updatePictureUrl(url);
    dispatch(action);
  },
  onSubmit: () => {
    const action = userSignup();
    dispatch(action);
  },
});

export default connect(mapState, mapDispatch)(SignupFormSeller);
