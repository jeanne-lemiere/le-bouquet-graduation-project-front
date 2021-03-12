import React from 'react';
import './styles.scss';
import ProductCard from '../ProductCard';
import PropTypes from 'prop-types';


const Products = ({products, fetchProducts}) => {

  if (!products) {
    return <p>chargement</p>;
  }
  return (
  <div className="products">
    {products.map((product) => (
      <ProductCard key={product.id} id={product.id} name={product.name} imgLink ={product.images[0].url} price={product.price}/>
    ))}
  </div>
  )

};

Products.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string,
    }),
  ),
  fetchProducts: PropTypes.func.isRequired,
};

Products.defaultProps = {
  products: [],
};

export default Products;