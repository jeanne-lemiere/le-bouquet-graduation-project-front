import { connect } from 'react-redux';
import SingleProduct from 'src/components/SingleProduct';


const mapState = (state) => ({
  products: state.product.products,
});

export default connect(mapState)(SingleProduct);
