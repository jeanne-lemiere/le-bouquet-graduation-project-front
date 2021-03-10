import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import NotFound from '../NotFound';

import './styles.scss';

// Il s'agit ici de la page de détails d'un seul produit

const SingleProduct = ({ products }) => {
  useEffect(() => {
    //cette fonction permet de remonter en haut d'une page, car sinon le scroll se situe au meme niveau que sur l'autre component
    window.scrollTo(0,0)
    // On demande à récupérer la donnée
    // Pour ca je dois donc déclencher une intention de récupération de données
  }, []);
  // On extrait l'id des paramètres de la route
  const { id } = useParams();
  // Puis on cherche l'article demandé parmi la liste des articles
  // On oublie pas les parseInt pour le === car il faut que les id aient le même type sinon ça passe pas
  const productFound = products.find(
    (product) => parseInt(product.id, 10) === parseInt(id, 10),
  );
    // On teste si on a trouvé l'article
  // Si on l'a pas trouvé on renvoie le composant 404
  if (!productFound) {
    return <NotFound />;
  }
  // Si on a trouvé l'article, on extrait les variables depuis cet article
  // Attention de renommer l'id puisqu'il est déclaré plus haut
  const {
    id: productId, price, name, description, images, seller
  } = productFound;
  console.log(productFound)

  return (
  <div className="single-product">
    <div className="single-product_leftside">
      <img src={images[0].url}></img>
    </div>
    <div className="single-product_rightside">
      <h2 className="product-name">{name}</h2>
      <p className="product-shopname">vendu par <i>{seller.shop_name}</i></p>
      <p className="product-price">{price}€</p>
      <p className="product-description">{description}</p>
      <button className="add-to-cart">→ Ajouter au panier</button>
    </div>
  </div>
  )
};

  SingleProduct.propTypes = {
    products: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        description: PropTypes.string,
        price: PropTypes.string,
      }),
    ),
  };

  SingleProduct.defaultProps = {
    products: [],
  };

export default SingleProduct;






