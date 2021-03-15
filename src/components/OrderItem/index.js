import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const OrderItem = ({ item }) => (
  <tr>
    <td>{item.reference}</td>
    <td> {item.total_amount}</td>
    <td> {item.status}</td>
    <td> {item.date}</td>
  </tr>
);

OrderItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    reference: PropTypes.number.isRequired,
    total_amount: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default OrderItem;
