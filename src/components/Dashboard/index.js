import React from 'react';
import { FiSettings } from 'react-icons/fi';
import PropTypes from 'prop-types';
import './styles.scss';
import DashboardHeader from '../DashboardHeader';
import DropdownMenu from '../DropdownMenu';
import profile from '../../data/seller-profile';

const Dashboard = ({ userType, orderHistory, currentOrders }) => {
  // if the connected user is a seller we want to give them
  // a link to access their product stock
  const stock = userType === 'seller' ? (
    <div className="dashboard__stock"><p>Stock</p>
      <a href="/stock">→ Gérer le stock</a>
    </div>
  ) : null;

  return (
    <div className="seller-dashboard">
      <FiSettings />
      <DashboardHeader
        profile={profile}
        currentOrderAmount={currentOrders.length}
        userType={userType}
      />
      <DropdownMenu
        title="Commandes en cours"
        seemore="Voir toutes les commandes"
        open
        items={currentOrders}
      />
      <DropdownMenu
        title="Historique de commandes"
        seemore="Voir l'historique"
        open={false}
        items={orderHistory}
      />
      {stock}
    </div>
  );
};

Dashboard.propTypes = {
  userType: PropTypes.string.isRequired,
  currentOrders: PropTypes.arrayOf(PropTypes.shape({
    reference: PropTypes.number.isRequired,
    total_amount: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
  })).isRequired,
  orderHistory: PropTypes.arrayOf(PropTypes.shape({
    reference: PropTypes.number.isRequired,
    total_amount: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
  })).isRequired,
};

export default Dashboard;
