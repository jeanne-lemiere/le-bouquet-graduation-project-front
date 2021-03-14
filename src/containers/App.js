import { connect } from 'react-redux';
import App from 'src/components/App';
import { fetchProducts } from '../actions/productActions';
import { setLoading } from '../actions/displayActions';

const mapState = (state) => {
  const {
    loading,
  } = state.display;

  return {
    loading,
  };
};
const mapDispatchToProps = (dispatch) => ({
  init: () => {
    dispatch(setLoading(true));
    dispatch(fetchProducts());
  },
});

export default connect(mapState, mapDispatchToProps)(App);
