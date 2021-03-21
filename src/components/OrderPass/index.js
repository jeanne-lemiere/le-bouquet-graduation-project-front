import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { Link } from 'react-router-dom';
// import Spinner from './Spinner';

const OrderPass = ({ /* loading, setLoading, */ passOrder, userId, item, orderError, userType, decreaseCartAmount,
}) => {
  useEffect(() => {
    console.log('ici component OrderPass ', userId);
    console.log('type :', userType);
    if (userType == 'customer') {
      passOrder(userId);
      // --- DISPLAY ---
      // I first update the value in localStorage
      const newAmount = 0;
      localStorage.setItem('cartAmount', JSON.stringify(newAmount));
      // then trigger an action for the state to update
      // depending on the new value in localStorage
      decreaseCartAmount();
    // --------------
    }
  }, []);

  let error = false;
  console.log('item: ', item);
  console.log('longueur de item: ', item.length);
  console.log('orderError : ', orderError);
  if (orderError || item.length === 0) {
    error = true;
    console.log('if longueur de item: ', item.length);
  }

  console.log(`item est un ${typeof (item)}`, item);
  // setLoading(true)
  return (
    <div className="order-pass">
      { error
        ? (
          <div>
            <h1>Il y a eu une erreur sur votre commande</h1>
            <p>{orderError}</p>
            <Link to="/">Retourner à la page d'accueil</Link>
          </div>
        )
        : (
          <div>
            <h1>Votre commande est passée avec succès </h1>
            <p>Voici les informations sur votre commande</p>
            <div className="order-content">
              <p>N° de commande : {item.reference} </p>
              <p>Total : {item.total_amount}€</p>
            </div>
          </div>
        )}
    </div>
  );
};

OrderPass.propTypes = {
  passOrder: PropTypes.func.isRequired,
  userId: PropTypes.number,
  item: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      reference: PropTypes.string.isRequired,
      total_amount: PropTypes.string.isRequired,
      // status: PropTypes.string.isRequired,
      // createdAt: PropTypes.string.isRequired,
    }),
  ]),

  // cartProducts: PropTypes.func.isRequired,
  // setLoading: PropTypes.func.isRequired,
  // loading: PropTypes.bool,
};

OrderPass.defaultProps = {
  // loading: true,
  userId: 0,
};
export default OrderPass;
