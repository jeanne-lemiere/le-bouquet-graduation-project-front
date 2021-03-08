import {
  FETCH_PRODUCTS,
  SET_PRODUCTS,
} from 'src/actions/productActions';

const initialState = {
  products: []
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
    default:
        return state;
  }
};