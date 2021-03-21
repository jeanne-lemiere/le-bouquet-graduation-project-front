import { connect } from 'react-redux';
import { fetchOneSeller } from '../actions/sellerActions';
import SellerPage from 'src/components/SellerPage';

const mapState = (state) => ({
  products: state.producer.oneSellerProducts,
});

const mapDispatchToProps = (dispatch) => ({
    fetchOneSeller: (id) => dispatch(fetchOneSeller(id)),
});

export default connect(mapState, mapDispatchToProps)(SellerPage);




