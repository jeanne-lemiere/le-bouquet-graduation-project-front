import React, { useState } from 'react';
import { FiArrowRight, FiSettings, FiPlus } from 'react-icons/fi';
import PropTypes from 'prop-types';
import './styles.scss';
import DashboardHeader from '../DashboardHeader';
import DropdownMenu from '../DropdownMenu';
import profile from '../../data/seller-profile';

const Dashboard = ({ userType, orderHistory, currentOrders }) => {
  // if the connected user is a seller we want to give them
  // a link to access their product stock
  const pageTitle = userType === 'seller' ? <h1>Mon espace Pro</h1> : <h1>Mon espace</h1>;
  const stock = userType === 'seller' ? (
    <div className="dashboard__stock"><h2>Stock</h2>
      <div className="stock__links">
        <a className="stock__link" href="/stock"><FiArrowRight /> Gérer le stock</a>
        <a className="stock__link" href="/nouveau-produit"><FiArrowRight /> Ajouter un produit</a>
      </div>
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
        {stock}
      </div>
    </main>

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
