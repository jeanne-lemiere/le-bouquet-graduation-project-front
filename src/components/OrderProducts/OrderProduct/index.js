import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.scss';

const OrderProduct = ({product}) => (

  <div className="order-product">
      <p className="order-product__title"><Link to={`/product/${product.id}`}>{product.name}</Link></p>
        <div className="order-product__details">
            <img src={product.images[0].url} className="order-product__image"></img>
            <div className="order-product__info">
                <p>Quantity: {product.order_has_product.quantity}</p>
                <p>Prix payé: {product.order_has_product.price_per_unit}€</p>
            </div>
        </div>
    
  </div>
);

OrderProduct.propTypes = {
    product: PropTypes.object,
};

OrderProduct.defaultProps = {
    product: {},
};
export default OrderProduct;
