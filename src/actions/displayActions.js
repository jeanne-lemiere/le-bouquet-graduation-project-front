export const TOGGLE_AUTH_MODAL = 'TOGGLE_AUTH_MODAL';
export const SET_SCROLL_HEIGHT = 'SET_SCROLL_HEIGHT';
export const SET_LOADING = 'SET_LOADING';
export const TOGGLE_CURRENT_ORDERS = 'TOGGLE_CURRENT_ORDERS';
export const TOGGLE_ORDER_HISTORY = 'TOGGLE_ORDER_HISTORY';
export const INCREASE_CART_AMOUNT = 'INCREASE_CART_AMOUNT';
export const DECREASE_CART_AMOUNT = 'DECREASE_CART_AMOUNT';
export const TOGGLE_PRODUCTS = 'TOGGLE_PRODUCTS';
export const TOGGLE_BURGER = 'TOGGLE_BURGER';
export const CLOSE_BURGER = 'CLOSE_BURGER';

export const toggleAuthModal = () => ({
  type: TOGGLE_AUTH_MODAL,
});

export const setScrollHeight = (payload) => ({
  type: SET_SCROLL_HEIGHT,
  payload,
});

export const setLoading = (payload) => ({
  type: SET_LOADING,
  payload,
});

export const toggleCurrentOrders = () => ({
  type: TOGGLE_CURRENT_ORDERS,
});
export const toggleHistory = () => ({
  type: TOGGLE_ORDER_HISTORY,
});

export const increaseCartAmount = () => ({
  type: INCREASE_CART_AMOUNT,
});

export const decreaseCartAmount = () => ({
  type: DECREASE_CART_AMOUNT,
});

export const toggleProducts = () => ({
  type: TOGGLE_PRODUCTS,
});

export const toggleBurger = () => ({
  type: TOGGLE_BURGER,
});

 export const closeBurger = () => ({
  type: CLOSE_BURGER,
});
 
