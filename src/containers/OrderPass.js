import { connect } from 'react-redux';
import OrderPass from 'src/components/OrderPass';
import { passOrder } from '../actions/orderActions';
import { decreaseCartAmount } from '../actions/displayActions';
import { clearCart } from '../actions/productActions';


const mapState = (state) => ({
  // loading: state.product.loading,
  // isLogged: state.user.isLogged,
  userId: state.login.profile.id,
  userType: state.login.userType,
  item: state.order.orderedItem,
  orderError: state.order.orderError,
});

const mapDispatchToProps = (dispatch) => ({
  passOrder: (userId) => dispatch(passOrder(userId)),
  decreaseCartAmount: () => dispatch(decreaseCartAmount()),
  clearCart: () => dispatch(clearCart())
});

export default connect(mapState, mapDispatchToProps)(OrderPass);
