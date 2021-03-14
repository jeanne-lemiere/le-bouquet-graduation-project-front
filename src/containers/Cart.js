import { connect } from 'react-redux';
import Cart from 'src/components/Cart';
import { fetchCartProducts, increaseQuantity, decreaseQuantity } from '../actions/productActions';
import { setLoading } from '../actions/displayActions';

const mapState = (state) => ({
  cartProducts: state.product.cartProducts,
  loading: state.product.loading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCartProducts: () => dispatch(fetchCartProducts()),
  increaseQuantity: (id) => dispatch(increaseQuantity(id)),
  decreaseQuantity: (id) => dispatch(decreaseQuantity(id)),
  setLoading: (payload) => dispatch(setLoading(payload)),
});

export default connect(mapState, mapDispatchToProps)(Cart);
