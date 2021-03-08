export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';

export const fetchProducts = () => ({
  type: FETCH_PRODUCTS,
});

export const SET_PRODUCTS = 'SET_PRODUCTS';

export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  products,
});

