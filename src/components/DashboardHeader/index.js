import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const DashboardHeader = ({ profile, currentOrderAmount, userType }) => {
  // if the connected user is a seller we want to display their profile picture
  const profilePicture = userType === 'seller' ? (
    <img
      src={profile.picture_url}
      alt="profil"
      className="profile__picture"
    />
  ) : null;

  return (
    <header className="dashboard-header">
      <span className="dashboard-header__profile">
        {profilePicture}
        <div className="profile__contact"> <h2>{profile.shop_name}</h2>
          <p>{profile.email}</p>
          <p>{profile.phone_number}</p>
        </div>
        <div className="profile__address">
          <p>{profile.street_number}, {profile.street_name} </p>
          <p>{profile.zipcode} {profile.city}</p>
        </div>
        <p className="profile__description">{profile.shop_presentation}</p>
      </span>
      <span className="dashboard-header__welcome">
        <strong>Bonjour {profile.first_name},</strong>
        <p>Vous avez actuellement {currentOrderAmount} commandes en cours.</p>
      </span>
    </header>
  );
};

// phone_number PropTypes should be changed to number when using real data
// for now I am using fake data, and had to make it a string
// since I was getting an Eslint error I couldn't avoid when removing the "" in seller-profile.js

DashboardHeader.propTypes = {
  profile: PropTypes.shape({
    gender: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    email: PropTypes.string,
    phone_number: PropTypes.string,
    street_name: PropTypes.string,
    street_number: PropTypes.number,
    zipcode: PropTypes.number,
    city: PropTypes.string,
    picture_url: PropTypes.string,
    siret: PropTypes.number,
    shop_name: PropTypes.string,
    shop_presentation: PropTypes.string,
  }).isRequired,
  currentOrderAmount: PropTypes.number.isRequired,
  userType: PropTypes.string.isRequired,
};

export default DashboardHeader;
