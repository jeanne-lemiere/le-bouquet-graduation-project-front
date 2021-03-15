import { connect } from 'react-redux';
import Dashboard from 'src/components/Dashboard';
import { toggleCurrentOrders, toggleHistory } from 'src/actions/displayActions';
import { fetchOrders } from 'src/actions/orderActions';

const mapState = (state) => {
  const {
    currentOrdersOpen, historyOpen,
  } = state.display;
  const {
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
    historyOpen,
    currentOrders,
    orderHistory,
  };
};

const mapDispatch = (dispatch) => ({
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
});

export default connect(mapState, mapDispatch)(Dashboard);
