export const TOGGLE_AUTH_MODAL = 'TOGGLE_AUTH_MODAL';
export const CHANGE_NAV_BACKGROUND = 'CHANGE_NAV_BACKGROUND';
export const SET_LOADING = 'SET_LOADING';
export const TOGGLE_CURRENT_ORDERS = 'TOGGLE_CURRENT_ORDERS';
export const TOGGLE_ORDER_HISTORY = 'TOGGLE_ORDER_HISTORY';

export const toggleAuthModal = () => ({
  type: TOGGLE_AUTH_MODAL,
});

export const changeNavBackground = (payload) => ({
  type: CHANGE_NAV_BACKGROUND,
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
