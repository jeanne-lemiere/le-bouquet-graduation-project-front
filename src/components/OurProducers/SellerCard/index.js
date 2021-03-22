import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.scss';

const Card = ({
  zipcode, phone_number, shop_name, street_name, street_number, city, email, picture_url, id,
}) => (

  <li className="seller-card">
    <img className="seller-card__image" src={picture_url} alt="nos producteurs" />
    <div className="seller-card__text">
      <h2>{shop_name}</h2>
      <p>{street_number} {street_name} <br />{zipcode} {city}
      </p>
      <p>{phone_number} <br /> {email}</p>
      <i><Link to={`/nos-producteurs/${id}`}>Voir la boutique </Link>→</i>
    </div>

  </li>
);

Card.propTypes = {

  zipcode: PropTypes.string.isRequired,
  street_number: PropTypes.string.isRequired,
  shop_name: PropTypes.string.isRequired,
  street_name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
};

export default Card;
