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
    {/* <h1><Link to={`product/${product.id}`}>{product.name}</Link></h1> */}
    {/* <p>Quantité : {product.order_has_products.quantity}</p> */}
  </div>
);

OrderProduct.propTypes = {
    product: PropTypes.object,
//   zipcode: PropTypes.string.isRequired,
//   street_number: PropTypes.string.isRequired,
//   shop_name: PropTypes.string.isRequired,
//   street_name: PropTypes.string.isRequired,
//   email: PropTypes.string.isRequired,
//   city: PropTypes.string.isRequired,
};

OrderProduct.defaultProps = {
    product: {},
};
export default OrderProduct;
