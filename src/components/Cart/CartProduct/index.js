import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../styles.scss';
import { Link } from 'react-router-dom';

const CartProduct = ({
  id, image, name, description, price, quantity, increaseQuantity, decreaseQuantity, removeFromCard, increaseCartAmount, decreaseCartAmount,
}) => {
  const moreQuantity = () => {
    increaseQuantity(id);
    // console.log('fonction + lancée', id, quantity)

    // --- DISPLAY ---
    // I first update the value in localStorage
    const newAmount = JSON.parse(localStorage.getItem('cartAmount')) + 1;
    localStorage.setItem('cartAmount', JSON.stringify(newAmount));
    // then trigger an action for the state to update
    // depending on the new value in localStorage
    increaseCartAmount();
    // --------------
  };

  const lessQuantity = () => {
    decreaseQuantity(id);
    // console.log('fonction - lancée', id,  quantity)

    // --- DISPLAY ---
    const newAmount = JSON.parse(localStorage.getItem('cartAmount')) - 1;
    localStorage.setItem('cartAmount', JSON.stringify(newAmount));
    decreaseCartAmount();
    // ---------------
  };

  const remove = () => {
    removeFromCard(id);
    // console.log('fonction remove')

    // --- DISPLAY ---
    const newAmount = JSON.parse(localStorage.getItem('cartAmount')) - quantity;
    localStorage.setItem('cartAmount', JSON.stringify(newAmount));
    decreaseCartAmount();
    // ---------------
  };

  return (
    <div className="card__product" id={id}> {/* un produit */}

      <div className="card__product__img-container">
        <Link to={`/product/${id}`} className="card__img-link"><img src={image} alt="image" /></Link>
      </div>

      <div className="card__product__info">
        <div className="info__left">
          <div className="info__left__top">
            <h3 className="info__left__title"><Link to={`/product/${id}`}>{name}</Link></h3>
            <button onClick={remove} className="info__left__remove"><span className="delete-text">Retirer du panier</span> <span className="delete-cross">X</span></button>
          </div>

          <p className="info__left__description">{description}</p>
          <div className="see-more" />
          <p className="quantity-container">
            <span className="info__left__quantity-text">Quantité :</span>
            <button onClick={lessQuantity} className="info__left__quantity-less">-</button>
            <span className="info__left__quantity-number">{quantity}</span>
            <button onClick={moreQuantity} className="info__left__quantity-more">+</button>
          </p>
          <p className="price-price"><span className="info__price-container">Prix</span> : <span className="info__price-content"> {price}€</span></p>
        </div>

      </div>

    </div>

  );
};

CartProduct.propTypes = {
  increaseQuantity: PropTypes.func.isRequired,
  decreaseQuantity: PropTypes.func.isRequired,
  removeFromCard: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  price: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  increaseCartAmount: PropTypes.func.isRequired,
  decreaseCartAmount: PropTypes.func.isRequired,
};

CartProduct.defaultProps = {
  description: '',
  //     // email: "",
  //     // password: "",
  //     // isLogged: false,
  //     // loggedMessage: 'Connecté',
  //     increaseQuantity: () => {},
  //     decreaseQuantity: () => {},
  //     removeFromCard: () => {},

};
// id, image, name, description, price, quantity, increaseQuantity, decreaseQuantity

export default CartProduct;

// https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Biedermeierstrau%C3%9F_aus_Seidenblumen_und_pr%C3%A4parierten_Rosen.JPG/1200px-Biedermeierstrau%C3%9F_aus_Seidenblumen_und_pr%C3%A4parierten_Rosen.JPG
