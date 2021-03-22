import { connect } from 'react-redux';
import Dashboard from 'src/components/Dashboard';
import { toggleCurrentOrders, toggleHistory, toggleProducts } from 'src/actions/displayActions';
import { fetchOneSeller } from '../actions/sellerActions';
import { fetchOrders } from 'src/actions/orderActions';

const mapState = (state) => {
  const products = state.producer.oneSellerProducts;
  const {
    currentOrdersOpen, historyOpen, productsOpen
  } = state.display;
  const {
    isLogged,
    userType,
    profile,
  } = state.login;
  const {
    orders,
  } = state.order;

  const currentOrders = orders.filter((order) => order.status !== 'Livrée');
  const orderHistory = orders.filter((order) => order.status === 'Livrée');

  return {
    userType,
    profile,
    currentOpen: currentOrdersOpen,
    productsOpen,
    historyOpen,
    currentOrders,
    orderHistory,
    isLogged,
    products
  };
};

const mapDispatch = (dispatch) => ({
  fetchOneSeller: (id) => dispatch(fetchOneSeller(id)),

  toggleCurrentOrders: () => {
    const action = toggleCurrentOrders();
    dispatch(action);
  },
  toggleHistory: () => {
    const action = toggleHistory();
    dispatch(action);
  },
  fetchOrders: () => {
    const action = fetchOrders();
    dispatch(action);
  },
  toggleProducts: () => {
    const action = toggleProducts();
    dispatch(action);
  },
});

export default connect(mapState, mapDispatch)(Dashboard);


