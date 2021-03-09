import React from 'react';
import './styles.scss';
// import { useParams } from 'react-router-dom';
import Image from 'src/assets/not-found.jpg';
import PropTypes from 'prop-types';

// Il s'agit ici de la page de détails d'un seul produit


// const { id } = useParams();
// // Puis on cherche l'article demandé parmi la liste des articles
// // On oublie pas les parseInt pour le === car il faut que les id aient le même type sinon ça passe pas
// const productFound = products.find(
//   (product) => parseInt(product.id, 10) === parseInt(id, 10),
// );
const SingleProduct = () => (
  <div className="singleProduct">
    <div className="singleProduct-picture">
      <img src={Image}></img>
    </div>
    <div className="singleProduct-description">
      <p>Voici le plus beau bouquet de France</p>
    </div>
  </div>

);

export default SingleProduct;