import {
  FETCH_PRODUCTS,
  SET_PRODUCTS,
  SET_CART_PRODUCTS,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  REMOVE_FROM_CARD
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

      if (newProducts[foundId].data.quantity <= 0) {
        newProducts = newProducts.filter (product => parseInt(product.data.id) !== parseInt(action.id)); // we update the state

        var filteredCart = theCart.filter(element => parseInt(element.quantity) !== 0); 
        localStorage.setItem("cart", JSON.stringify(filteredCart)); // we update the localStorage
      }

      // console.log("pendant quantity cartProducts:", state.cartProducts[foundId].data.quantity)
      // console.log("finale quantity newproducts:", newProducts[foundId].data.quantity)
      return {
        ...state,
        cartProducts : newProducts,
      };

    case REMOVE_FROM_CARD:
      // var foundId = state.cartProducts.findIndex(product => parseInt(product.data.id) === parseInt(action.id));
      var newProducts = state.cartProducts.filter (product => parseInt(product.data.id) !== parseInt(action.id)); // we update the state
      
      var theCart = JSON.parse(localStorage.getItem('cart'));
      var newCart = theCart.filter(element => parseInt(element.id) !== parseInt(action.id))
      localStorage.setItem("cart", JSON.stringify(newCart));

      return {
        ...state,
        cartProducts: newProducts,
      };

    default:
        return state;
  }
};


