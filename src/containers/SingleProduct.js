import { connect } from 'react-redux';
import SingleProduct from 'src/components/SingleProduct';
import { increaseCartAmount } from 'src/actions/displayActions';

const mapState = (state) => ({
  products: state.product.products,
  isLogged: state.login.isLogged,
  userType: state.login.userType,
});

const mapDispatch = (dispatch) => ({
  increaseCartAmount: () => {
    const action = increaseCartAmount();
    dispatch(action);
  },
});
export default connect(mapState, mapDispatch)(SingleProduct);
