import React, { useState } from 'react';
import { FiSettings, FiArrowRight } from 'react-icons/fi';
import PropTypes from 'prop-types';
import './styles.scss';
import DashboardHeader from '../DashboardHeader';
import DropdownMenu from '../DropdownMenu';
import profile from '../../data/seller-profile';

const Dashboard = ({ userType, orderHistory, currentOrders }) => {
  // if the connected user is a seller we want to give them
  // a link to access their product stock
  const stock = userType === 'seller' ? (
    <div className="dashboard__stock"><h2>Stock</h2>
      <a className="stock__link" href="/stock"><FiArrowRight /> Gérer le stock</a>
    </div>
  ) : null;

  // adding a simple toggle function for dropdown menus css animation testing
  const [currentOpen, setCurrentOpen] = useState(false);
  const [historyOpen, setHistoryOpen] = useState(false);
  const toggleCurrentOrders = () => {
    setCurrentOpen(!currentOpen);
  };
  const toggleHistory = () => {
    setHistoryOpen(!historyOpen);
  };

  return (
    <div className="dashboard">
      <FiSettings className="dashboard__settings" />
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
      />
      <DropdownMenu
        title="Historique de commandes"
        unfoldMessage="Voir l'historique"
        open={historyOpen}
        items={orderHistory}
        toggle={toggleHistory}
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
