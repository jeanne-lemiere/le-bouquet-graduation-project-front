import { connect } from 'react-redux';
import App from 'src/components/App';
import { fetchProducts } from '../actions/productActions';


const mapState = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProducts()),
});

export default connect(mapState, mapDispatchToProps)(App);