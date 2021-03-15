import { connect } from 'react-redux';
import Dashboard from 'src/components/Dashboard';
import { toggleCurrentOrders, toggleHistory } from 'src/actions/displayActions';

const mapState = (state) => {
  const {
    currentOrdersOpen, historyOpen,
  } = state.display;
  const {
    userType,
  } = state.login;
  return {
    userType,
    currentOpen: currentOrdersOpen,
    historyOpen,
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
});

export default connect(mapState, mapDispatch)(Dashboard);
