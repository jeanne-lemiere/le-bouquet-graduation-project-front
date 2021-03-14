import {
  FETCH_PRODUCTS,
  SET_PRODUCTS,
  SET_CART_PRODUCTS,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY
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
    case INCREASE_QUANTITY:
      var foundId = state.cartProducts.findIndex(product => parseInt(product.data.id) === parseInt(action.id));
      
      // console.log("début :", state.cartProducts)
      // console.log('trouvé : ', foundId)
      
      // console.log("avant quantity cartProducts:", state.cartProducts[foundId].data.quantity)
      var newProducts = [...(state.cartProducts)];
      newProducts[foundId].data.quantity++;

      var theCart = JSON.parse(localStorage.getItem('cart'));
      var newCart = theCart.find(element => parseInt(element.id) === parseInt(action.id))
      newCart.quantity++;
      localStorage.setItem("cart", JSON.stringify(theCart));

      
      // console.log("pendant quantity cartProducts:", state.cartProducts[foundId].data.quantity)
      // console.log("finale quantity newproducts:", newProducts[foundId].data.quantity)
      return {
        ...state,
        cartProducts : newProducts,
      };
    case DECREASE_QUANTITY:
      var foundId = state.cartProducts.findIndex(product => parseInt(product.data.id) === parseInt(action.id));
      
      // console.log("début :", state.cartProducts)
      // console.log('trouvé : ', foundId)
      
      // console.log("avant quantity cartProducts:", state.cartProducts[foundId].data.quantity)
      var newProducts = [...(state.cartProducts)];
      newProducts[foundId].data.quantity--;

      var theCart = JSON.parse(localStorage.getItem('cart'));
      var newCart = theCart.find(element => parseInt(element.id) === parseInt(action.id))
      newCart.quantity--;
      localStorage.setItem("cart", JSON.stringify(theCart));
      if (newCart.quantity==0) {
        
      }
      
      // console.log("pendant quantity cartProducts:", state.cartProducts[foundId].data.quantity)
      // console.log("finale quantity newproducts:", newProducts[foundId].data.quantity)
      return {
        ...state,
        cartProducts : newProducts,
      };
    default:
        return state;
  }
};