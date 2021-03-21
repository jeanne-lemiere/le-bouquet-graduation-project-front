import { connect } from 'react-redux';
import NavBar from 'src/components/NavBar';
import { userLogout } from 'src/actions/loginActions';
import {
  toggleAuthModal, changeNavBackground, toggleBurger, closeBurger,
} from 'src/actions/displayActions';

const mapState = (state) => {
  const {
    isLogged,
    userType,
  } = state.login;

  const {
    navBackground,
    cartAmount,
    burgerOpen,
  } = state.display;

  return {
    isLogged,
    navBackground,
    userType,
    cartAmount,
    burgerOpen,
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
  changeBackground: (screenHeight) => {
    const data = screenHeight >= 50;
    const action = changeNavBackground(data);
    dispatch(action);
  },
  toggleBurger: () => {
    const action = toggleBurger();
    dispatch(action);
  },
  closeBurger: () => {
    const action = closeBurger();
    dispatch(action);
  },
});

export default connect(mapState, mapDispatch)(NavBar);
