import { connect } from 'react-redux';
import OrderProducts from 'src/components/OrderProducts';
import { fetchOrderProducts } from '../actions/orderActions';



const mapState = (state) => ({
  // loading: state.product.loading,
  // isLogged: state.user.isLogged,
//   userId: state.login.profile.id,
//   userType: state.login.userType,
//   item: state.order.orderedItem,
//   orderError: state.order.orderError,
    orderProducts: state.order.orderProducts,
});

const mapDispatchToProps = (dispatch) => ({
  fetchOrderProducts: (orderId) => dispatch(fetchOrderProducts(orderId)),
});

export default connect(mapState, mapDispatchToProps)(OrderProducts);
