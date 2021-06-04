import React from 'react';
import styled from '@emotion/styled';

const SearchBarContainer = styled.div`
  position: relative;
  border-radius: 0.25rem;
  background-color: rgba(255, 255, 255, 0.15);

  .icon-wrapper {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;
    position: absolute;

    svg {
      width: 1rem;
      height: 1rem;
      display: inline-block;
      font-size: 1.5em;
      flex-shrink: 0;
    }
  }

  .input-wrapper {
    display: inline-flex;
    position: relative;
    font-size: 1em;
    box-sizing: border-box;
    align-items: center;
    font-weight: 400;
    line-height: 1.1876em;
    letter-spacing: 0.00938em;

    input {
      padding: 8px 8px 8px 0px;
      padding-left: calc(1em + 32px);
    }
  }
`;

const SearchBar = () => {
  return (
    <SearchBarContainer>
      <div className="icon-wrapper">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
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
      </div>
      <div className="input-wrapper">
        <input placeholder="Search..." />
      </div>
    </SearchBarContainer>
  );
};

export default SearchBar;
