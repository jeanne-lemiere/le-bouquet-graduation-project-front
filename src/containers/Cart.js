import { connect } from 'react-redux';
import Cart from 'src/components/Cart';
import { fetchCartProducts, increaseQuantity, decreaseQuantity } from '../actions/productActions';


const mapState = (state) => ({
  cartProducts: state.product.cartProducts,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCartProducts: () => dispatch(fetchCartProducts()),
  increaseQuantity : (id) => dispatch(increaseQuantity(id)),
  decreaseQuantity : (id) => dispatch(decreaseQuantity(id))
});

export default connect(mapState, mapDispatchToProps)(Cart);
