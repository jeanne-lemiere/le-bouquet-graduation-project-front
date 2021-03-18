import { connect } from 'react-redux';
import CartProduct from 'src/components/Cart/CartProduct';
import { increaseQuantity, decreaseQuantity, removeFromCard } from '../actions/productActions';
import { increaseCartAmount, decreaseCartAmount, setLoading } from '../actions/displayActions';

const mapState = null;

const mapDispatchToProps = (dispatch) => ({

  increaseQuantity: (id) => dispatch(increaseQuantity(id)),
  decreaseQuantity: (id) => dispatch(decreaseQuantity(id)),
  removeFromCard: (id) => dispatch(removeFromCard(id)),
  increaseCartAmount: () => dispatch(increaseCartAmount()),
  decreaseCartAmount: () => dispatch(decreaseCartAmount()),
});

export default connect(mapState, mapDispatchToProps)(CartProduct);
