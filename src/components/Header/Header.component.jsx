import React, { useState } from 'react';
import styled from '@emotion/styled';

import MenuButton from './MenuButton';
import SearchBar from '../SearchBar';
import Avatar from '../Common/Avatar';
import ToggleSwitch from '../ToggleSwitch';

const HeaderContainer = styled.header`
  width: 100%;
  height: 4rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 576px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media (min-width: 1024px) {
    padding-left: 4rem;
    padding-right: 4rem;
  }
`;

const HeaderSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Header = () => {
  const [isCheck, setCheck] = useState(false);

  return (
    <HeaderContainer>
      <HeaderSection>
        <MenuButton toggleMenu={() => {}} />
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
