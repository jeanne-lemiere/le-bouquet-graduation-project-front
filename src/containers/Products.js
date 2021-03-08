import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Products from 'src/components/Products';
import { fetchProducts } from '../actions/productActions';


const mapState = (state) => ({
  products: state.productReducer.products,
});

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProducts()),
});

export default connect(mapState, mapDispatchToProps)(Products);