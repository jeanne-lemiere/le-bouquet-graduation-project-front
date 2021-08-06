import { connect } from 'react-redux';
import AuthModal from 'src/components/AuthModal';
import { toggleAuthModal, toggleBurger } from 'src/actions/displayActions';

const mapState = (state) => {
  const {
    authModal,
  } = state.display;
  const {
    isLogged,
  } = state.login;
  return {
    open: authModal,
    isLogged,
  };
};

const mapDispatch = (dispatch) => ({
  toggleModal: () => {
    const action = toggleAuthModal();
    dispatch(action);
  },
  toggleBurger: () => {
    const action = toggleBurger();
    dispatch(action);
  },
});

export default connect(mapState, mapDispatch)(AuthModal);
