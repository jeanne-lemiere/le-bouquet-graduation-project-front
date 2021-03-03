// == Import npm
import React from 'react';

// == Import
import './styles.css';
import AuthModal from '../AuthModal';
import Dashboard from '../Dashboard';

// == Fake data for testing
import currentOrders from '../../data/current-orders';
import orderHistory from '../../data/order-history';

// == Composant
const App = () => (
  <div>
    <Dashboard
      userType="seller"
      currentOrders={currentOrders}
      orderHistory={orderHistory}
    />
    <AuthModal isHidden={false} />
  </div>
);

// == Export
export default App;
