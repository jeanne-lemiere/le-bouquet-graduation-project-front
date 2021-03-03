import React from 'react';
import { FiSettings } from 'react-icons/fi';
import PropTypes from 'prop-types';
import './styles.scss';
import DashboardHeader from '../DashboardHeader';
import DropdownMenu from '../DropdownMenu';
import data from '../../data/seller-profile';

const Dashboard = ({ userType }) => {
  const stock = userType === 'seller' ? (
    <div className="dashboard__stock"><p>Stock</p>
      <a href="/stock">→ Gérer le stock</a>
    </div>
  ) : null;

  return (
    <div className="seller-dashboard">
      <FiSettings />
      <DashboardHeader
        profile={data}
        currentOrderAmount={3}
        userType={userType}
      />
      <DropdownMenu
        title="Commandes en cours"
        seemore="→ Voir toutes les commandes"
      />
      <DropdownMenu
        title="Historique de commandes"
        seemore="→ Voir l'historique"
      />
      {stock}
    </div>
  );
};

Dashboard.propTypes = {
  userType: PropTypes.string.isRequired,
};
export default Dashboard;
