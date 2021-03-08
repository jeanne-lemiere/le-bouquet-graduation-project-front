import { connect } from 'react-redux';
import NavBar from 'src/components/NavBar';

import { toggleAuthModal } from 'src/actions/displayActions';

const mapState = (state) => {
  const {
    isLogged,
  } = state.user;
  return {
    isLogged,
  };
};

const mapDispatch = (dispatch) => ({
  toggleAuthModal: () => {
    const action = toggleAuthModal();
    dispatch(action);
  },
});

export default connect(mapState, mapDispatch)(NavBar);
