import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const DropdownMenu = ({ title, seemore }) => (
  <section>
    <header
      className="menu_header"
    >
      <h2 className="menu__title">{title}</h2>
      <button
        type="button"
        className="menu_see-more"
      >{seemore}
      </button>
    </header>
  </section>
);

DropdownMenu.propTypes = {
  title: PropTypes.string.isRequired,
  seemore: PropTypes.string.isRequired,
};
export default DropdownMenu;
