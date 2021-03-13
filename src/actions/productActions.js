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
