import { connect } from 'react-redux';
import BurgerMenu from 'src/components/AuthModal/LoginForm';

import { toggleBurger, toggleAuthModal } from 'src/actions/displayActions';
import { userLogout } from 'src/actions/loginActions';

const mapState = (state) => {
  const {
    isLogged, userType,
  } = state.login;

  return {
    userType,
    isLogged,
  };
};

const mapDispatch = (dispatch) => ({
  toggleAuthModal: () => {
    const action = toggleAuthModal();
    dispatch(action);
  },
  toggleBurger: () => {
    const action = toggleBurger();
    dispatch(action);
  },
  logOut: () => {
    const action = userLogout();
    dispatch(action);
  },
});

export default connect(mapState, mapDispatch)(BurgerMenu);
