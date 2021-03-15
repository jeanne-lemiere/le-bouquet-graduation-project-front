import React, { useEffect } from 'react';
import { FiArrowRight, FiSettings } from 'react-icons/fi';
import PropTypes from 'prop-types';
import './styles.scss';
import DashboardHeader from '../DashboardHeader';
import DropdownMenu from '../DropdownMenu';

const Dashboard = ({
  userType,
  currentOrders,
  orderHistory,
  toggleCurrentOrders,
  toggleHistory,
  currentOpen,
  historyOpen,
  profile,
  fetchOrders,
}) => {
  // if the connected user is a seller we want to give them
  // a link to access their product stock
  const pageTitle = userType === 'seller' ? <h1>Mon espace pro</h1> : <h1>Mon espace client</h1>;

  useEffect(fetchOrders, []);

  return (
    <main className="dashboard-container">{ pageTitle }
      <div className="dashboard">
        <div className="dashboard__settings"><FiSettings /></div>
        <DashboardHeader
          profile={profile}
          currentOrderAmount={currentOrders.length}
          userType={userType}
        />
        <DropdownMenu
          title="Commandes en cours"
          unfoldMessage="Voir toutes les commandes"
          open={currentOpen}
          items={currentOrders}
          toggle={toggleCurrentOrders}
          itemType="order"
        />
        <DropdownMenu
          title="Historique de commandes"
          unfoldMessage="Voir l'historique"
          open={historyOpen}
          items={orderHistory}
          toggle={toggleHistory}
          itemType="order"
        />
        {userType === 'seller'
    && (
    <div className="dashboard__stock"><h2>Stock</h2>
      <div className="stock__links">
        <a className="stock__link" href="/stock"><FiArrowRight /> Gérer le stock</a>
        <a className="stock__link" href="/nouveau-produit"><FiArrowRight /> Ajouter un produit</a>
      </div>
    </div>
    )}
      </div>
    </main>

  );
};

Dashboard.propTypes = {
  userType: PropTypes.string.isRequired,
  currentOrders: PropTypes.arrayOf(PropTypes.shape({
    reference: PropTypes.string.isRequired,
    total_amount: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  })).isRequired,
  orderHistory: PropTypes.arrayOf(PropTypes.shape({
    reference: PropTypes.string.isRequired,
    total_amount: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  })).isRequired,
  toggleCurrentOrders: PropTypes.func.isRequired,
  toggleHistory: PropTypes.func.isRequired,
  currentOpen: PropTypes.bool.isRequired,
  historyOpen: PropTypes.bool.isRequired,
  profile: PropTypes.shape({
    picture_url: PropTypes.string.isRequired,
    shop_name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone_number: PropTypes.string.isRequired,
    street_number: PropTypes.number.isRequired,
    street_name: PropTypes.string.isRequired,
    zipcode: PropTypes.number.isRequired,
    city: PropTypes.string.isRequired,
  }).isRequired,
  fetchOrders: PropTypes.func.isRequired,
};

export default Dashboard;
