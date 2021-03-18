import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import ProductCard from '../ProductCard';

const Products = ({ products }) => {
  if (!products) {
    return <p>chargement</p>;
  }
  return (
    <div className="products">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          imgLink={product.images[0].url}
          price={product.price}
        />
      ))}
    </div>
  );
};

Products.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string,
    }),
  ),
};

Products.defaultProps = {
  products: [],
};

export default Products;
