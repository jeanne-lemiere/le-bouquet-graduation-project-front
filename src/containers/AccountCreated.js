import { connect } from 'react-redux';
import AccountCreated from 'src/components/AccountCreated';
import { toggleAuthModal } from 'src/actions/displayActions';

const mapState = null;

const mapDispatch = (dispatch) => ({
  toggleAuthModal: () => {
    const action = toggleAuthModal();
    dispatch(action);
  },
});

export default connect(mapState, mapDispatch)(AccountCreated);
