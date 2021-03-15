export const FETCH_ORDERS = 'FETCH_ORDERS';
export const FETCH_ORDERS_SUCCESS = 'FETCH_ORDERS_SUCCESS';

export const fetchOrders = () => ({
  type: FETCH_ORDERS,
});

export const fetchOrdersSuccess = (payload) => ({
  type: FETCH_ORDERS_SUCCESS,
  payload,
});
