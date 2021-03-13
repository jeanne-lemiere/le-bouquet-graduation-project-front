import {
  FETCH_PRODUCTS,
  SET_PRODUCTS,
  SET_CART_PRODUCTS
} from 'src/actions/productActions';

const initialState = {
  products: [],
  cartProducts: []
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      console.log(state)
      return {
        ...state
      };
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.products,
      };
    case SET_CART_PRODUCTS:
      return {
        ...state,
        cartProducts: action.cartProducts,
      };
    default:
        return state;
  }
};