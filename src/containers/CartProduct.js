import { connect } from 'react-redux';
import CartProduct from 'src/components/Cart/CartProduct';
import { increaseQuantity, decreaseQuantity } from '../actions/productActions';


const mapState = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

  increaseQuantity : (id) => dispatch(increaseQuantity(id)),
  decreaseQuantity : (id) => dispatch(decreaseQuantity(id))
});

export default connect(mapState, mapDispatchToProps)(CartProduct);
