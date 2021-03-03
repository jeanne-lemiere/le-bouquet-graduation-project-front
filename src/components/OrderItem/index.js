import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const OrderItem = ({ item }) => (
  <li>
    <span>{item.reference}</span>
    <span> {item.total_amount}</span>
    <span> {item.status}</span>
    <span> {item.date}</span>
  </li>
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
