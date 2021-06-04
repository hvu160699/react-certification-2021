import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Button from '../Common/Button';

const MenuButton = ({ toggleMenu = () => {} }) => {
  return (
    <Button onClick={toggleMenu}>
      <span className="sr-only">Open aside menu</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </Button>
  );
};

MenuButton.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
};

export default memo(MenuButton);
