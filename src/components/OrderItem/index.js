import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import dayjs from 'dayjs';

const OrderItem = ({ item }) => (
  <tr>
    <td>{item.reference}</td>
    <td> {item.total_amount}</td>
    <td> {item.status}</td>
    <td> {dayjs(item.createdAt).format('DD / MM / YYYY')}</td>
  </tr>
);

OrderItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    reference: PropTypes.string.isRequired,
    total_amount: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
  }).isRequired,
};

export default OrderItem;
