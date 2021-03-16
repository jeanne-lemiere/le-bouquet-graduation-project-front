import React from 'react';
import PropTypes from 'prop-types';
import { useParams, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotFound from '../NotFound';

import './styles.scss';

// Il s'agit ici de la page de détails d'un seul produit

const SingleProduct = ({ products }) => {
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
    id: productId, price, name, description, images, seller,
  } = productFound;
  // console.log(productFound);

  const addToCart = (event) => {
    const id = event.target.closest('.single-product').getAttribute('id'); // on récupère le id du produit

    const cart = JSON.parse(localStorage.getItem('cart')); // on vérifie s'il y a quelque chose dans cart

    if (cart) { // s'il y a quelque chose, on vérifie si le id de l'élément cliqué y est
      const findProduct = cart.find((element) => element.id == id);

      if (findProduct) { // il y est, on augmente la quantité
        console.log(findProduct, "existe alors j'augmente sa quantité");
        findProduct.quantity++;
        console.log('Il vaut maintenant', findProduct);
        localStorage.setItem('cart', JSON.stringify(cart));

        const allProducts = JSON.parse(localStorage.getItem('cart'));
        console.log('Voici tout le panier : ', allProducts);
      }
      else { // il n'y est pas, on l'ajoute
        const newCart = cart.push({ id, quantity: 1 });
        localStorage.setItem('cart', JSON.stringify(cart));
        console.log("N'a pas trouvé, alors ajouté", JSON.parse(localStorage.getItem('cart')));
      }
    }
    else { // aucun panier n'existe encore, on le crée
      const newCart = [{ id, quantity: 1 }];
      localStorage.setItem('cart', JSON.stringify(newCart));

      const allProducts = JSON.parse(localStorage.getItem('cart'));
      console.log('Aucun panier, on en crée un : ', allProducts);
    }

    toast("C'est noté!", {
      position: 'bottom-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="single-product" id={id}>
      <div className="single-product_leftside">
        {/* <img src={images[0].url}></img> alt="bouquet" */}
        <img src={images[0].url} alt="bouquet" />
      </div>
      <div className="single-product_rightside">
        <h2 className="product-name">{name}</h2>
        <p className="product-shopname">vendu par <i>{seller.shop_name}</i></p>
        <p className="product-price">{price}€</p>
        <p className="product-description">{description}</p>
        <button
          className="add-to-cart"
          type="button"
          onClick={addToCart}
        >→ Ajouter au panier
        </button>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        className="toaster"
      />
    </div>

  );
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
