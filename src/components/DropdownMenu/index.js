import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { FiArrowDown, FiArrowRight } from 'react-icons/fi';
import OrderItem from '../OrderItem';

// I am creating a plain dropdown menu component so we can re-use it for different purposes
// I will be reused for Current orders, Order History, in seller AND customer dashboards
// but also to handle the stock
const DropdownMenu = ({
  title, unfoldMessage, open, items, toggle,
}) => {
  // here is the list of items which will be contained in the dropdown menu
  const itemList = items.map((item) => (
    <OrderItem key={item.id} item={item} />
  ));
  // are there items to show ? if not show nothing
  const itemsToShow = items === [] ? null : itemList;

  // when the menu is open the arrow points down and the content is displayed
  // when open === false the content is hidden
  const arrow = open ? <FiArrowDown /> : <FiArrowRight />;
  const menuContent = open ? <ul className="menu__list">{itemsToShow}</ul> : null;

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
};
export default DropdownMenu;
