export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';

export const fetchProducts = () => ({
  type: FETCH_PRODUCTS,
});

export const SET_PRODUCTS = 'SET_PRODUCTS';

export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  products,
});

export const FETCH_CART_PRODUCTS = 'FETCH_CART_PRODUCTS';

export const fetchCartProducts = () => ({
  type: FETCH_CART_PRODUCTS,
});


export const SET_CART_PRODUCTS = 'SET_CART_PRODUCTS';

export const setCartProducts = (cartProducts) => ({
  type: SET_CART_PRODUCTS,
  cartProducts,
});



export const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
export const increaseQuantity = (id) => ({
  type: INCREASE_QUANTITY,
  id,
});


export const DECREASE_QUANTITY = 'DECREASE_QUANTITY';
export const decreaseQuantity = (id) => ({
  type: DECREASE_QUANTITY,
  id,
});

export const REMOVE_FROM_CARD = 'REMOVE_FROM_CARD';
export const removeFromCard = (id) => ({
  type: REMOVE_FROM_CARD,
  id,
});

