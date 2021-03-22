import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { FiArrowDown, FiArrowRight } from 'react-icons/fi';

const ProductItem = ({ item, open }) => {
  // console.log("product item lancé")
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
        <tr className="stock__product">
          <td>{item.reference}</td>
          <td> {item.name}</td>
          <td> {item.price}</td>
          <td> {item.stock}</td>
          <td> 
            <button
              type="button"
              className="stock__unfold-button">
              {arrow} Voir le détail
            </button>
          </td>
        </tr>
    );
  return (product);
};

ProductItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    reference: PropTypes.string.isRequired,
    total_amount: PropTypes.string,
    status: PropTypes.string,
    date: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    stock: PropTypes.number,
    price: PropTypes.string,
  }).isRequired,
  open: PropTypes.bool,
};
// open boolean should be required in the future
ProductItem.defaultProps = {
  open: false,
};

export default ProductItem;
