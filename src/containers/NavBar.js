import { connect } from 'react-redux';
import NavBar from 'src/components/NavBar';
import { userLogout } from 'src/actions/userActions';
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
  logOut: () => {
    const action = userLogout();
    dispatch(action);
  },
});

export default connect(mapState, mapDispatch)(NavBar);
