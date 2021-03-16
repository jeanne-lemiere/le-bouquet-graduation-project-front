import { connect } from 'react-redux';
import NavBar from 'src/components/NavBar';
import { userLogout } from 'src/actions/loginActions';
import { toggleAuthModal, changeNavBackground } from 'src/actions/displayActions';

const mapState = (state) => {
  const {
    isLogged,
    userType,
  } = state.login;

  const {
    navBackground,
  } = state.display;
  const {
    cartProducts,
  } = state.product;

  return {
    isLogged,
    navBackground,
    userType,
    cartAmount: cartProducts.length,
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
  /* The console.log works and gives me a dynamic boolean depending on scrollY
    The action is trigged as I can see in the DevTools
    But the value never changes in the state and remains false */
  changeBackground: (screenHeight) => {
    const data = screenHeight >= 50;
    const action = changeNavBackground(data);
    dispatch(action);
  },
});

export default connect(mapState, mapDispatch)(NavBar);
