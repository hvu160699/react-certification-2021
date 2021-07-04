import React from 'react';
import propTypes from 'prop-types';

import {
  SearchBarContainer,
  SearchIconWrapper,
  SearchBarInput,
} from './SearchBar.styled';

const SearchBar = ({ placeholder, value, onChange, onKeyDown }) => {
  return (
    <SearchBarContainer>
      <SearchIconWrapper>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </SearchIconWrapper>
      <SearchBarInput
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </SearchBarContainer>
  );
};

SearchBar.propTypes = {
  placeholder: propTypes.string,
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  onKeyDown: propTypes.func.isRequired,
};

SearchBar.defaultProps = {
  placeholder: 'Search...',
};

export default SearchBar;
