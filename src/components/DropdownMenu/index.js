import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { FiArrowDown, FiArrowRight } from 'react-icons/fi';
import OrderItem from '../OrderItem';
import ProductItem from '../ProductItem';

// I am creating a plain dropdown menu component so we can re-use it for different purposes
// I will be reused for Current orders, Order History, in seller AND customer dashboards
// but also to handle the stock
const DropdownMenu = ({
  title, unfoldMessage, open, items, toggle, itemType,
}) => {
  // what kind of item do we want to display?
  // here is the list of items which will be contained in the dropdown menu
  const itemList = itemType === 'order' ? items.map((item) => (
    <OrderItem key={item.id} item={item} />
  )) : items.map((item) => (
    <ProductItem key={item.id} item={item} />
  ));

  const itemInfos = itemType === 'order' ? (
    <tr>
      <th>N° de commande</th>
      <th>Montant total (TTC)</th>
      <th>Statut</th>
      <th>Date</th>
    </tr>
  )
    : (
      <tr>
        <th>Référence</th>
        <th>Nom</th>
        <th>Prix</th>
        <th>Quantité disponible</th>
      </tr>
    );

  // when the menu is open the arrow points down and the content is displayed
  // when open === false the content is hidden
  const arrow = open ? <FiArrowDown /> : <FiArrowRight />;
  const menuContent = open ? (
    <div className="menu__list">
      <table>
        <thead className="menu__infos">{itemInfos}</thead>
        <tbody>{ // are there items to show ? if not show nothing
 items !== [] && itemList
}
        </tbody>
      </table>
    </div>
  ) : null;

  return (
    <section>
      <header
        className="menu-header"
      >
        <h2 className="header__title">{title}</h2>
        <button
          className="header__unfold-button"
          type="button"
          onClick={() => {
            toggle(open);
          }}
        >{arrow} {unfoldMessage}
        </button>
      </header>
      {menuContent}
    </section>
  );
};

DropdownMenu.propTypes = {
  title: PropTypes.string.isRequired,
  unfoldMessage: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    reference: PropTypes.number.isRequired,
    total_amount: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  })).isRequired,
  toggle: PropTypes.func.isRequired,
  itemType: PropTypes.string.isRequired,
};
export default DropdownMenu;
