import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Products from 'src/components/Products';

const mapState = (state) => ({
  products: state.productReducer.products,
});

const mapDispatchToProps = {};

export default connect(mapState, mapDispatchToProps)(Products);