import { connect } from 'react-redux';
import NavBar from 'src/components/NavBar';
import { userLogout } from 'src/actions/loginActions';
import {
  toggleAuthModal, setScrollHeight, toggleBurger, closeBurger,
} from 'src/actions/displayActions';

const mapState = (state) => {
  const {
    isLogged,
    userType,
  } = state.login;

  const {
    scrollHeight,
    cartAmount,
    burgerOpen,
  } = state.display;

  return {
    isLogged,
    scrollHeight,
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
  setScrollHeight: (screenHeight) => {
    const action = setScrollHeight(screenHeight);
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
