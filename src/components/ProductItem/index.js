import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { FiArrowDown, FiArrowRight } from 'react-icons/fi';

const ProductItem = ({ item, open }) => {
  const arrow = open ? <FiArrowDown /> : <FiArrowRight />;
  const product = open ? (
    <div className="stock__product stock__product--full">
      <img className="product__image" src="" alt="produit" />
      <div className="product__description">
        <h4>Description</h4>
        <p>{item.description}</p>
      </div>
    </div>
  )
    : (
      <li>
        <div className="stock__product">
          <span>{item.reference}</span>
          <span> {item.name}</span>
          <span> {item.price}</span>
          <span> {item.stock}</span>
        </div>
        <button
          type="button"
          className="stock__unfold-button"
        >{arrow} Voir le détail
        </button>
      </li>
    );
  return (product);
};

ProductItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    reference: PropTypes.number.isRequired,
    total_amount: PropTypes.number,
    status: PropTypes.string,
    date: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    stock: PropTypes.number,
    price: PropTypes.number,
  }).isRequired,
  open: PropTypes.bool,
};
// open boolean should be required in the future
ProductItem.defaultProps = {
  open: false,
};

export default ProductItem;
