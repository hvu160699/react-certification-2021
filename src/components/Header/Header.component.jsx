import React, { useState } from 'react';

import SearchBar from '../SearchBar';
import Avatar from '../Common/Avatar';
import ToggleSwitch from '../ToggleSwitch';
import Button from '../Common/Button';
import { HeaderContainer, HeaderSection } from './Header.styled';

const Header = () => {
  const [isCheck, setCheck] = useState(false);

  return (
    <HeaderContainer>
      <HeaderSection>
        <Button>
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
        <SearchBar />
      </HeaderSection>
      <HeaderSection>
        <div style={{ marginRight: '1rem' }}>
          <ToggleSwitch
            toggleName="theme-toggle-switch"
            checked={isCheck}
            onChange={() => setCheck(!isCheck)}
          />
        </div>
        <Avatar
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="avatar"
        />
      </HeaderSection>
    </HeaderContainer>
  );
};

export default Header;
