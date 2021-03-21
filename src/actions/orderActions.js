export const FETCH_ORDERS = 'FETCH_ORDERS';
export const FETCH_ORDERS_SUCCESS = 'FETCH_ORDERS_SUCCESS';
export const PASS_ORDER = 'PASS_ORDER';
export const SET_ORDER_ITEM = 'SET_ORDER_ITEM';
export const SET_ORDER_ERROR = 'SET_ORDER_ERROR';
export const ORDER_TO_EMPTY = 'ORDER_TO_EMPTY';

export const fetchOrders = () => ({
  type: FETCH_ORDERS,
});

export const fetchOrdersSuccess = (payload) => ({
  type: FETCH_ORDERS_SUCCESS,
  payload,
});

export const passOrder = (userId) => ({
  type: PASS_ORDER,
  userId,
});

export const setOrderItem = (item) => ({
  type: SET_ORDER_ITEM,
  item,
});

export const setOrderError = (error) => ({
  type: SET_ORDER_ERROR,
  error,
});

export const orderToEmpty = () => ({
  type: ORDER_TO_EMPTY,
});
