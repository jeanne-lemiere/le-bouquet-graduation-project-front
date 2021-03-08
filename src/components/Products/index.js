import React from 'react';
import './styles.scss';
import ProductCard from '../ProductCard';
import PropTypes from 'prop-types';



const Products = ({products}) => {
  if (!products) {
    return <p>chargement</p>;
  }
  return (
  <div className="products">
    {products.map((product) => (
      <ProductCard key={product.id} id={product.id} flowerName={product.title} imgLink ={product.image} price={product.price}/>
    ))}
  </div>
  )

};

Products.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }),
  ),
};

Products.defaultProps = {
  products: [],
};

export default Products;
