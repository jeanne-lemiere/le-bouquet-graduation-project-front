import { connect } from 'react-redux';
import AuthModal from 'src/components/AuthModal';
import { toggleAuthModal } from 'src/actions/displayActions';

const mapState = (state) => {
  const {
    authModal,
  } = state.display;
  const {
    isLogged,
  } = state.user;
  return {
    open: authModal,
    isLogged,
  };
};

const mapDispatch = (dispatch) => ({
  toggle: () => {
    const action = toggleAuthModal();
    dispatch(action);
  },
});

export default connect(mapState, mapDispatch)(AuthModal);
