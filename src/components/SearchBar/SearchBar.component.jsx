import React from 'react';
import styled from '@emotion/styled';
import Input from '../Common/Input';

const SearchBarContainer = styled.div`
  margin-left: 1rem;
  position: relative;
  display: none;

  @media (min-width: 576px) {
    display: block;
  }
`;

const SearchIconWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  position: absolute;
  z-index: 10;

  svg {
    width: 1rem;
    height: 1rem;
    display: inline-block;
    flex-shrink: 0;
  }
`;

const SearchBarInput = styled(Input)`
  padding-left: calc(1em + 32px);
`;

const SearchBar = () => {
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
      <SearchBarInput placeholder="Search..." />
    </SearchBarContainer>
  );
};

export default SearchBar;
