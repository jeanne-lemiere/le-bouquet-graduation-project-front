import React from 'react';
// import PropTypes from 'prop-types';
// import { useParams } from 'react-router-dom';
// import DOMPurify from 'dompurify';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.scss';
// import Erreur404 from '../Erreur404';

// ProductCard représente la card d'un seul produit dans la page Products
const ProductCard = ({
  imgLink,
  name,
  id,
  price,
}) => (
  <article className="product-card">
    <Link to={`/product/${id}`}>
      {/* <div className="product-image-container"> */}
      <img className="product-card-img" src={imgLink} alt={name} />
      {/* </div> */}
      <div className="product-card-caption">
        <h2 className="product-card-title">{name}</h2>
        <p className="product-card-price">{price}€</p>
      </div>
    </Link>
  </article>

);

ProductCard.propTypes = {
  imgLink: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default ProductCard;
