import { connect } from 'react-redux';
import SigninFormSeller from 'src/components/SigninFormSeller';

import { signinUsertype, handleImgUpload, updatePictureUrl } from 'src/actions/signinActions';

const mapState = (state) => {
  const {
    pictureFile,
  } = state.signin;
  return {
    image: pictureFile,
  };
};

const mapDispatch = (dispatch) => ({
  updateUsertype: () => {
    const action = signinUsertype('seller');
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
});

export default connect(mapState, mapDispatch)(SigninFormSeller);
