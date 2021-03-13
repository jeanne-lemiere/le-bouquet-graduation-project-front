import { connect } from 'react-redux';
import Cart from 'src/components/Cart';
import { fetchCartProducts } from '../actions/productActions';


const mapState = (state) => ({
  cartProducts: state.product.cartProducts,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCartProducts: () => dispatch(fetchCartProducts()),
});

export default connect(mapState, mapDispatchToProps)(Cart);
